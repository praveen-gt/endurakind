"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner"; // ✅ same toast system as contact form

export default function NewsletterSignup() {
  const [email, setEmail] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      toast.error("Invalid Email", {
        description: "Please enter a valid email address.",
        duration: 4000,
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Subscription Successful 🎉", {
          description: "You’ve been added to our newsletter list.",
          duration: 5000,
        });
        setEmail("");
      } else {
        throw new Error(result.error || "Failed to subscribe. Please try again.");
      }
    } catch (error) {
      console.error("Newsletter error:", error);
      toast.error("Subscription Failed", {
        description:
          error instanceof Error
            ? error.message
            : "An unexpected error occurred. Please try again later.",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-2xl md:text-3xl font-bold mb-3 flex items-center gap-2">
        <Heart className="w-7 h-7 md:w-8 md:h-8 text-pink-500 fill-pink-500" />
        Stay Connected
      </h3>
      <p className="text-gray-400 mb-6 text-sm md:text-base">
        Subscribe to our newsletter for updates, tips, and stories from our community.
      </p>

      <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 h-12 bg-white/5 border-white/10 focus:border-teal-500 text-white placeholder:text-gray-500"
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 px-6 h-12 w-full sm:w-auto"
        >
          {isSubmitting ? "Subscribing..." : "Subscribe"}
          {!isSubmitting && <ArrowRight className="ml-2 w-4 h-4" />}
        </Button>
      </form>
    </motion.div>
  );
}
