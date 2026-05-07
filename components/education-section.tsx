'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Award } from 'lucide-react'

const education = [
  {
    degree: 'Bachelor of Computer Application',
    institution: 'University of Rajasthan',
    period: '2022 – 2024',
    grade: 'First Class Distinction',
    icon: GraduationCap,
  },
  {
    degree: 'Higher Secondary School',
    institution: 'Tiny Tots Public School',
    period: '2020 – 2021',
    grade: 'First Class Distinction',
    icon: Award,
  },
]

export function EducationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Academic foundation in computer science and technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="glass rounded-2xl p-6 hover:glow-blue/20 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-colors">
                  <edu.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-foreground mb-1">{edu.degree}</h3>
                  <p className="text-primary text-sm mb-2">{edu.institution}</p>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                    <span className="px-2 py-0.5 rounded-full bg-muted/50">{edu.period}</span>
                    <span>•</span>
                    <span className="text-secondary font-medium">{edu.grade}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
