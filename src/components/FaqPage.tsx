"use client"
import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Plus, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function FAQPage() {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null)
  const [inputValue, setInputValue] = useState("")
  const [currentPage, setCurrentPage] = useState(0)



//   Data Will Come From API 
  const faqItems = [
    {
      question: "What is Feedback?",
      answer:
        "Feedback is a system that allows users to provide their opinions, suggestions, and experiences about a product or service. It helps organizations improve their offerings based on user input.",
    },
    {
      question: "Why should your organization use Feeback Application?",
      answer:
        "Organizations should use Feedback Applications to gather valuable insights from users, identify areas for improvement, enhance customer satisfaction, and make data-driven decisions to optimize their products or services.",
    },
    {
      question: "How to Contact Us?",
      answer:
        "You can contact our support team via email at support@feedback.com, call us at +1-123-456-7890, or use the contact form on our website. We're available 24/7 to assist you.",
    },
    {
      question: "Trust Level of Feedback Application?",
      answer:
        "Our Feedback Application maintains the highest trust level with bank-grade security, data encryption, GDPR compliance, and transparent privacy policies to ensure your information is always protected.",
    },
    {
      question: "What is Feedback?",
      answer:
        "Feedback is a system that allows users to provide their opinions, suggestions, and experiences about a product or service. It helps organizations improve their offerings based on user input.",
    },
    {
      question: "Why should your organization use Feeback Application?",
      answer:
        "Organizations should use Feedback Applications to gather valuable insights from users, identify areas for improvement, enhance customer satisfaction, and make data-driven decisions to optimize their products or services.",
    },
    {
        question: "Why should your organization use Feeback Application?",
        answer:
          "Organizations should use Feedback Applications to gather valuable insights from users, identify areas for improvement, enhance customer satisfaction, and make data-driven decisions to optimize their products or services.",
      },
      {
        question: "Why should your organization use Feeback Application?",
        answer:
          "Organizations should use Feedback Applications to gather valuable insights from users, identify areas for improvement, enhance customer satisfaction, and make data-driven decisions to optimize their products or services.",
      },
      {
        question: "Why should your organization use Feeback Application?",
        answer:
          "Organizations should use Feedback Applications to gather valuable insights from users, identify areas for improvement, enhance customer satisfaction, and make data-driven decisions to optimize their products or services.",
      },
      {
        question: "Why should your organization use Feeback Application?",
        answer:
          "Organizations should use Feedback Applications to gather valuable insights from users, identify areas for improvement, enhance customer satisfaction, and make data-driven decisions to optimize their products or services.",
      },
  ]

  const itemsPerPage = 6
  const totalPages = Math.ceil(faqItems.length / itemsPerPage)
  const currentItems = faqItems.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
    setActiveQuestion(null)
  }

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
    setActiveQuestion(null)
  }

  const toggleQuestion = (index: number) => {
    setActiveQuestion(activeQuestion === index ? null : index)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    alert(`Question submitted: ${inputValue}`)
    setInputValue("")
  }

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Frequently Ask Question</h1>
          <p className="text-lg">
            <span className="text-gray-600">
              <a href="#" className="text-cyan-500 hover:underline">
                Click Here
              </a>{" "}
              to buy now.
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            <AnimatePresence>
              {currentItems.map((item, index) => (
                <motion.div
                  key={`${currentPage}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-sm border border-gray-100"
                >
                  <div
                    onClick={() => toggleQuestion(index)}
                    className="flex justify-between items-center p-4 cursor-pointer"
                  >
                    <h3 className="text-gray-700 font-medium">{item.question}</h3>
                    <div className="bg-cyan-500 rounded-full p-1 text-white">
                      {activeQuestion === index ? <X size={18} /> : <Plus size={18} />}
                    </div>
                  </div>
                  <AnimatePresence>
                    {activeQuestion === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-4 pt-0 text-gray-600 border-t">{item.answer}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </AnimatePresence>

            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={handlePrevPage}
                className="bg-cyan-500 text-white p-2 rounded-full hover:bg-cyan-600 transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleNextPage}
                className="bg-cyan-500 text-white p-2 rounded-full hover:bg-cyan-600 transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:pl-8"
          >
            <div className="flex flex-col items-center">
              <div className="mb-6 relative w-64 h-64">
                <Image
                  src="/images/faqimage.jpg"
                  alt="Question illustration"
                  width={256}
                  height={256}
                  className="object-contain"
                />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Any Question?</h2>
              <p className="text-gray-600 mb-6 text-center">You can ask anything you want to know about Feedback.</p>
              <p className="text-gray-600 mb-2">Let me know.</p>
              <form onSubmit={handleSubmit} className="w-full max-w-md">
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Enter Here"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="pr-8 border-gray-300 focus:border-cyan-500 focus:ring focus:ring-cyan-200 focus:ring-opacity-50"
                  />
                  {inputValue && (
                    <button
                      type="button"
                      onClick={() => setInputValue("")}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <X size={16} />
                    </button>
                  )}
                </div>
                <div className="mt-4 flex justify-center">
                  <Button
                    type="submit"
                    className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
                  >
                    Sent
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

