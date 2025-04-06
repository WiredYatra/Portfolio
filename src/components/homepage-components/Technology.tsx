"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const technologies = [
  { name: "React", logo: "/placeholder.svg?height=80&width=80" },
  { name: "Next.js", logo: "/placeholder.svg?height=80&width=80" },
  { name: "TypeScript", logo: "/placeholder.svg?height=80&width=80" },
  { name: "Node.js", logo: "/placeholder.svg?height=80&width=80" },
  { name: "TailwindCSS", logo: "/placeholder.svg?height=80&width=80" },
  { name: "GraphQL", logo: "/placeholder.svg?height=80&width=80" },
  { name: "AWS", logo: "/placeholder.svg?height=80&width=80" },
  { name: "Docker", logo: "/placeholder.svg?height=80&width=80" },
]

export default function TechnologiesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, type: "spring", stiffness: 100 },
    },
  }

  return (
    <section ref={sectionRef} className="py-24 px-4 relative overflow-hidden bg-black/50">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-gradient-to-r from-emerald-400/20 to-purple-400/20 text-emerald-300 text-sm font-medium mb-4 backdrop-blur-sm border border-white/10">
            Our Tech Stack
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
            Technologies We Use
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            We leverage cutting-edge technologies to build robust, scalable, and high-performance digital solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-purple-500 rounded-full blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
                <div className="relative bg-black/50 backdrop-blur-sm p-6 rounded-full border border-white/10">
                  <img src={tech.logo || "/placeholder.svg"} alt={tech.name} className="h-12 w-12 object-contain" />
                </div>
              </div>
              <p className="mt-4 text-white font-medium">{tech.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block py-2 px-4 rounded-full bg-gradient-to-r from-emerald-400/20 to-purple-400/20 text-white text-sm backdrop-blur-sm border border-white/10">
            And many more cutting-edge technologies...
          </div>
        </motion.div>
      </div>
    </section>
  )
}

