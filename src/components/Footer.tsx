"use client"

import { motion } from "framer-motion"
import { Facebook, Twitter, Instagram, Linkedin, Github, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative w-[100%] pt-24 pb-12 overflow-hidden bg-black/80">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
      </div>    

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl">
                  F
                </div>
                <span className="text-xl font-bold text-white">FutureTech</span>
              </div>

              <p className="text-slate-400 mb-6">
                We create cutting-edge digital solutions that transform businesses and elevate user experiences to
                unprecedented heights.
              </p>

              <div className="flex gap-4">
                <Link
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-emerald-500/20 transition-colors"
                >
                  <Facebook className="h-4 w-4" />
                </Link>
                <Link
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-emerald-500/20 transition-colors"
                >
                  <Twitter className="h-4 w-4" />
                </Link>
                <Link
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-emerald-500/20 transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                </Link>
                <Link
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-emerald-500/20 transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                </Link>
                <Link
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-emerald-500/20 transition-colors"
                >
                  <Github className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-slate-400 hover:text-emerald-300 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-emerald-300 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-emerald-300 transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-emerald-300 transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-emerald-300 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-emerald-300 transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-emerald-300 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold text-white mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-emerald-400 mt-0.5" />
                  <span className="text-slate-400">123 Innovation Street, Tech City, TC 10101</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-emerald-400" />
                  <span className="text-slate-400">+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-emerald-400" />
                  <span className="text-slate-400">info@futuretech.com</span>
                </li>
              </ul>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-lg font-semibold text-white mb-6">Subscribe</h3>
              <p className="text-slate-400 mb-4">Subscribe to our newsletter to receive the latest updates and news.</p>
              <div className="space-y-3">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="bg-white/5 border-white/10 text-white placeholder:text-slate-500"
                />
                <Button className="w-full bg-gradient-to-r from-emerald-500 to-emerald-700 hover:from-emerald-600 hover:to-emerald-800 text-white border-0">
                  Subscribe
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">© {currentYear} FutureTech. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="text-slate-400 text-sm hover:text-emerald-300 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-slate-400 text-sm hover:text-emerald-300 transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-slate-400 text-sm hover:text-emerald-300 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

