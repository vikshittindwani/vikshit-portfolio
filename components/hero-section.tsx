'use client'

import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { ArrowDown, Github, Linkedin, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Profile Photo */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary animate-glow blur-xl opacity-50" />
            <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full p-1 bg-gradient-to-r from-primary to-secondary">
              <div className="w-full h-full rounded-full overflow-hidden bg-background">
                <Image
                  src="https://avatars.githubusercontent.com/u/198349503?v=4"
                  alt="Vikshit Tindwani"
                  width={176}
                  height={176}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance">
              {"Hi, I'm "}
              <span className="gradient-text">Vikshit Tindwani</span>
              <span className="ml-2">👋</span>
            </h1>
          </motion.div>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-xl md:text-2xl lg:text-3xl text-primary font-medium h-10"
          >
            <TypeAnimation
              sequence={[
                'AI Engineer',
                2000,
                'GenAI Data Scientist',
                2000,
                'ML Engineer',
                2000,
                'Full-Stack AI Builder',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="glow-text-blue"
            />
          </motion.div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl text-balance"
          >
            Building AI-powered solutions that solve real-world problems
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:glow-blue transition-all duration-300 px-8"
              asChild
            >
              <a href="#projects">
                <ExternalLink className="w-4 h-4 mr-2" />
                View My Projects
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary/50 text-primary hover:bg-primary/10 transition-all duration-300 px-8"
              asChild
            >
              <a href="https://drive.google.com/file/d/1NltANysRX6XKewgK26N71FAkePauY8bT/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <ArrowDown className="w-4 h-4 mr-2" />
                Download CV
              </a>
            </Button>
          </motion.div>

          {/* Stats Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="flex flex-wrap items-center justify-center gap-4 mt-8"
          >
            <a
              href="https://github.com/vikshittindwani"
              target="_blank"
              rel="noopener noreferrer"
              className="glass px-4 py-2 rounded-full flex items-center gap-2 hover:glow-blue transition-all duration-300"
            >
              <Github className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">25 Repositories</span>
            </a>
            <div className="glass px-4 py-2 rounded-full flex items-center gap-2">
              <span className="text-yellow-400">⭐</span>
              <span className="text-sm font-medium">23 Stars</span>
            </div>
            <a
              href="https://linkedin.com/in/vikshit-tindwani-ab88a630b"
              target="_blank"
              rel="noopener noreferrer"
              className="glass px-4 py-2 rounded-full flex items-center gap-2 hover:glow-blue transition-all duration-300"
            >
              <Linkedin className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-muted-foreground"
        >
          <ArrowDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  )
}
