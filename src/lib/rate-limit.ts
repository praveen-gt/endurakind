import { NextRequest } from 'next/server'

interface RateLimitOptions {
  interval: number
  uniqueTokenPerInterval: number
}

interface RateLimitResult {
  success: boolean
  limit: number
  remaining: number
  reset: Date
}

// In-memory store (use Redis in production)
const tokenCache = new Map<string, { count: number; resetTime: number }>()

export function rateLimit(options: RateLimitOptions) {
  return {
    check: async (limit: number, token: string): Promise<RateLimitResult> => {
      const now = Date.now()
      const windowStart = Math.floor(now / options.interval) * options.interval
      const windowEnd = windowStart + options.interval

      // Clean old entries
      for (const [key, value] of tokenCache.entries()) {
        if (value.resetTime < now) {
          tokenCache.delete(key)
        }
      }

      const key = `${token}:${windowStart}`
      const current = tokenCache.get(key) || { count: 0, resetTime: windowEnd }

      if (current.count >= limit) {
        return {
          success: false,
          limit,
          remaining: 0,
          reset: new Date(current.resetTime)
        }
      }

      current.count++
      tokenCache.set(key, current)

      return {
        success: true,
        limit,
        remaining: limit - current.count,
        reset: new Date(current.resetTime)
      }
    }
  }
}

// Helper to get client IP
export function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for')
  const realIP = request.headers.get('x-real-ip')
  
  if (forwarded) {
    return forwarded.split(',')[0].trim()
  }
  
  if (realIP) {
    return realIP
  }
  
  return '127.0.0.1'
}