"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code, Layers, LineChart, Smartphone, Globe, Shield } from "lucide-react"

const services = [
  {
    icon: <Code className="h-8 w-8" />,
    title: "Web Development",
    description:
      "Custom web applications built with cutting-edge technologies for optimal performance and scalability.",
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
  },
  {
    icon: <Layers className="h-8 w-8" />,
    title: "UI/UX Design",
    description: "Intuitive and engaging user interfaces designed to maximize user satisfaction and business outcomes.",
  },
  {
    icon: <LineChart className="h-8 w-8" />,
    title: "Data Analytics",
    description: "Transform your raw data into actionable insights with our advanced analytics solutions.",
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and services tailored to your business requirements.",
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets and customer data.",
  },
]

export default function ServicesSection() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section ref={sectionRef} className="py-24 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-gradient-to-r from-emerald-400/20 to-purple-400/20 text-emerald-300 text-sm font-medium mb-4 backdrop-blur-sm border border-white/10">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
            Cutting-Edge Solutions
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            We deliver innovative digital solutions tailored to your unique business needs, helping you stay ahead in
            today's rapidly evolving technological landscape.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative p-6 rounded-xl backdrop-blur-sm border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="mb-4 p-3 inline-flex items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500/20 to-purple-500/20 text-emerald-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-emerald-300 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-slate-400">{service.description}</p>
              </div>

              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-emerald-500 to-purple-500 group-hover:w-full transition-all duration-300 rounded-b-xl" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

