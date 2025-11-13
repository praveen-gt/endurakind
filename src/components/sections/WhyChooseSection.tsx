"use client"

import React, { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  Clock,
  Users,
  Target,
  Heart,
  Shield,
  Award,
  Zap,
} from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock assistance whenever you need it",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Highly qualified compassionate professionals",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Target,
    title: "Personalized Plans",
    description: "Tailored support for your unique needs",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Heart,
    title: "Person-Centered",
    description: "You at the heart of everything we do",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description: "Committed to highest standards of care",
    color: "from-teal-500 to-emerald-500",
  },
  {
    icon: Award,
    title: "Proven Results",
    description: "Outstanding service and satisfaction",
    color: "from-amber-500 to-yellow-500",
  },
]

export default function WhyChooseSection() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 overflow-hidden bg-white"
    >
      {/* Wavy Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          className="relative block w-full h-20 md:h-32"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            fill="#f9fafb"
          />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <div className="pt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Why Choose{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-amber-500">
                Endurakind?
              </span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-teal-600 to-amber-500 rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 leading-relaxed">
              We're dedicated to delivering exceptional support with
              integrity, compassion, and professionalism.
            </p>
          </motion.div>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Features Grid */}
          <div>
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100 hover:border-teal-200 hover:shadow-xl transition-all duration-300"
                >
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}
                  >
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-teal-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Shine Effect on Hover */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right - Collage */}
          <motion.div
            style={{ y }}
            className="relative flex justify-center items-center px-4 lg:px-8"
          >
            <div className="relative w-full max-w-[550px] mx-auto">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-100 via-amber-50 to-white rounded-3xl blur-3xl opacity-60" />

              {/* Collage Grid */}
              <div className="grid grid-cols-3 gap-3 relative z-10">
                {/* Top Left */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="col-span-1 rounded-xl overflow-hidden shadow-lg h-40"
                >
                  <Image
                    src="/images/home/why-choose-image-1.jpg?q=80&w=400"
                    alt="Care and Support"
                    width={200}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </motion.div>

                {/* Top Right */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="col-span-2 rounded-xl overflow-hidden shadow-lg h-40"
                >
                  <Image
                    src="/images/home/why-choose-image-2.jpg?q=80&w=600"
                    alt="Inclusive Community"
                    width={400}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </motion.div>

                {/* Middle Left */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="col-span-2 rounded-xl overflow-hidden shadow-lg h-48"
                >
                  <Image
                    src="/images/home/why-choose-image-3.jpg?q=80&w=600"
                    alt="Diverse Abilities"
                    width={400}
                    height={250}
                    className="object-cover w-full h-full"
                  />
                </motion.div>

                {/* Middle Right */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="col-span-1 rounded-xl overflow-hidden shadow-lg h-48"
                >
                  <Image
                    src="/images/home/why-choose-image-4.jpg?q=80&w=400"
                    alt="Respect and Dignity"
                    width={200}
                    height={250}
                    className="object-cover w-full h-full"
                  />
                </motion.div>

                {/* Bottom Full */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="col-span-3 rounded-xl overflow-hidden shadow-xl relative h-52"
                >
                  <Image
                    src="/images/home/why-choose-image-5.jpg?q=80&w=900"
                    alt="Unity and Care"
                    width={600}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-xl" />
                </motion.div>
              </div>

              {/* Floating Circle Animation */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 w-96 h-96 border-4 border-dashed border-teal-300 rounded-full -z-10 -translate-x-1/2 -translate-y-1/2"
              />

              {/* Floating Stats Cards - Positioned Inside Container */}
              {/* <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute top-0 left-0 bg-white rounded-xl p-4 shadow-2xl z-20"
              >
                <div className="text-3xl font-bold text-teal-600 mb-1">50+</div>
                <div className="text-xs text-gray-600">
                  Families We Support
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-0 right-0 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl p-4 shadow-2xl z-20"
              >
                <div className="text-white">
                  <Zap className="w-8 h-8 mb-2" />
                  <div className="text-2xl font-bold mb-1">100%</div>
                  <div className="text-xs">Committed to Quality</div>
                </div>
              </motion.div> */}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wavy Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-20 md:h-32"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            fill="#f9fafb"
          />
        </svg>
      </div>
    </section>
  )
}
