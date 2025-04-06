"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const bootcampCourses = [
  {
    id: 1,
    title: "Active Investor CFI - Advanced Trading Course",
    image: "/placeholder.svg?height=200&width=300",
    bgColor: "from-blue-400/20 to-blue-600/20",
    popular: true,
    rating: 4.8,
    reviews: 86,
    instructor: {
      name: "John Smith",
      image: "/placeholder.svg?height=50&width=50"
    }
  },
  {
    id: 2,
    title: "Master Course: English Grammar and Public Speaking",
    image: "/placeholder.svg?height=200&width=300",
    bgColor: "from-orange-400/20 to-orange-600/20",
    popular: true,
    rating: 4.7,
    reviews: 124,
    instructor: {
      name: "Sarah Johnson",
      image: "/placeholder.svg?height=50&width=50"
    }
  },
  {
    id: 3,
    title: "The Complete 2024 Web Development Bootcamp",
    image: "/placeholder.svg?height=200&width=300",
    bgColor: "from-purple-400/20 to-purple-600/20",
    popular: true,
    rating: 4.9,
    reviews: 215,
    instructor: {
      name: "Michael Chen",
      image: "/placeholder.svg?height=50&width=50"
    }
  },
  {
    id: 4,
    title: "The Complete Personal Finance Course",
    image: "/placeholder.svg?height=200&width=300",
    bgColor: "from-emerald-400/20 to-emerald-600/20",
    popular: true,
    rating: 4.6,
    reviews: 92,
    instructor: {
      name: "David Wilson",
      image: "/placeholder.svg?height=50&width=50"
    }
  }
]

export default function RecentWork() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  const scrollLeft = () => {
    if (sectionRef.current) {
      const container = sectionRef.current.querySelector('.courses-container');
      if (container) {
        container.scrollBy({ left: -300, behavior: 'smooth' });
      }
    }
  };

  const scrollRight = () => {
    if (sectionRef.current) {
      const container = sectionRef.current.querySelector('.courses-container');
      if (container) {
        container.scrollBy({ left: 300, behavior: 'smooth' });
      }
    }
  };

  return (
    <section ref={sectionRef} className="py-24 px-4 relative overflow-hidden">
      {/* Background elements */}
    

      <div className="container mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-gradient-to-r from-emerald-400/20 to-purple-400/20 text-emerald-300 text-sm font-medium mb-4 backdrop-blur-sm border border-white/10">
            WiredYatra
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text">
            Our Recent Work
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Look our Recent Work and Projects. We are a team of talented developers and designers who build custom websites for your business.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="courses-container flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {bootcampCourses.map((course, index) => (
              <motion.div
                key={course.id}
                variants={itemVariants}
                className="min-w-[280px] sm:min-w-[320px] snap-start group"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="rounded-xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-sm h-full flex flex-col">
                  <div className={`relative h-48 bg-gradient-to-br ${course.bgColor} p-4 flex items-end`}>
                    {course.popular && (
                      <Badge className="absolute top-3 left-3 bg-blue-600 hover:bg-blue-700">
                        Popular
                      </Badge>
                    )}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img 
                        src={course.instructor.image || "/placeholder.svg"} 
                        alt={course.instructor.name}
                        className="w-24 h-24 object-cover rounded-full border-2 border-white/20"
                      />
                    </div>
                  </div>
                  
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold mb-2  group-hover:text-emerald-300 transition-colors duration-300 line-clamp-2">
                      {course.title}
                    </h3>
                    
                  
                    
                    <Link 
                      href="#" 
                      className="mt-4 text-emerald-400 hover:text-emerald-300 text-sm font-medium flex items-center transition-colors"
                    >
            
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="flex justify-center gap-4 mt-8">
            <Button 
              onClick={scrollLeft}
              variant="outline" 
              size="icon" 
              className="rounded-full border-white/20  hover:bg-white/10 backdrop-blur-sm"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button 
              onClick={scrollRight}
              variant="outline" 
              size="icon" 
              className="rounded-full border-white/20  hover:bg-white/10 backdrop-blur-sm"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
