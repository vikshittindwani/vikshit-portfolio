'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Instagram, Heart } from 'lucide-react'

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com/in/vikshit-tindwani-ab88a630b', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/vikshittindwani', label: 'GitHub' },
  { icon: Twitter, href: 'https://twitter.com/TindwaniVi67470', label: 'Twitter' },
  { icon: Instagram, href: 'https://instagram.com/_vicky_tindwani', label: 'Instagram' },
]

export function Footer() {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-sm text-muted-foreground flex items-center gap-1"
          >
            Designed & Built with{' '}
            <Heart className="w-4 h-4 text-red-500 fill-red-500 inline" />{' '}
            by{' '}
            <span className="gradient-text font-medium">Vikshit Tindwani</span>
            {' '}· © 2025
          </motion.p>
        </div>
      </div>
    </footer>
  )
}
