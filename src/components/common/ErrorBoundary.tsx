// src/components/common/ErrorBoundary.tsx

"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react'
import Link from 'next/link'

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
}

interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ComponentType<{ error?: Error; resetError: () => void }>
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error,
    }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error to monitoring service
    console.error('ErrorBoundary caught an error:', error, errorInfo)
    
    // You can add error reporting service here
    // Example: Sentry.captureException(error)
  }

  resetError = () => {
    this.setState({ hasError: false, error: undefined })
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        const FallbackComponent = this.props.fallback
        return <FallbackComponent error={this.state.error} resetError={this.resetError} />
      }

      return <DefaultErrorFallback error={this.state.error} resetError={this.resetError} />
    }

    return this.props.children
  }
}

function DefaultErrorFallback({ error, resetError }: { error?: Error; resetError: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-neutral/20 to-white p-4">
      <Card className="w-full max-w-md">
        <CardContent className="p-8 text-center">
          <div className="mb-6">
            <AlertTriangle className="h-16 w-16 text-red-500 mx-auto mb-4" />
            <h1 className="text-2xl font-heading font-bold text-brand-dark mb-2">
              Oops! Something went wrong
            </h1>
            <p className="text-gray-600">
              We&apos;re sorry for the inconvenience. Please try refreshing the page or return to the homepage.
            </p>
          </div>

          {process.env.NODE_ENV === 'development' && error && (
            <div className="mb-6 text-left">
              <details className="bg-red-50 border border-red-200 rounded p-4">
                <summary className="cursor-pointer font-medium text-red-800">
                  Error Details (Development Only)
                </summary>
                <pre className="mt-2 text-xs text-red-700 overflow-auto">
                  {error.message}
                  {error.stack}
                </pre>
              </details>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3">
            <Button 
              onClick={resetError}
              className="btn-wimbledon flex-1"
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Try Again
            </Button>
            <Button 
              asChild
              variant="outline"
              className="btn-wimbledon-outline flex-1"
            >
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Go Home
              </Link>
            </Button>
          </div>

          <div className="mt-6 text-sm text-gray-500">
            <p>If this problem persists, please contact us:</p>
            <a 
              href="mailto:info@newgenstrataservices.com.au"
              className="text-primary hover:text-primary/80 font-medium"
            >
              info@newgenstrataservices.com.au
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default ErrorBoundary