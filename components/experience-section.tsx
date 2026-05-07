'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase } from 'lucide-react'

const experiences = [
  {
    company: 'Artizence',
    role: 'AI Engineer',
    period: '2025 – Present',
    project: 'Scrape AI Agent',
    description: [
      'AI scraping agent using Playwright + LLMs for dynamic websites',
      'Automated data pipelines for e-commerce & travel platforms',
      'Handles inconsistent DOM structures across sites',
    ],
    tags: ['Python', 'Playwright', 'LLMs', 'FastAPI'],
  },
  {
    company: 'Data Science Project',
    role: 'ML Engineer',
    period: '2024 – 2025',
    project: 'Customer Churn Prediction',
    description: [
      'ML model with 85% accuracy using Python, Pandas, Scikit-learn',
      'Analyzed 10,000+ customer records to identify churn patterns',
      'Interactive Power BI dashboards for retention trends',
    ],
    tags: ['Python', 'Scikit-learn', 'Power BI', 'ML'],
  },
]

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building real-world AI solutions and data-driven applications
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-transparent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company + exp.period}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
              className={`relative flex flex-col md:flex-row gap-4 md:gap-8 mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary glow-blue z-10" />

              {/* Card */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="glass rounded-2xl p-6 hover:glow-blue/20 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/20">
                      <Briefcase className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{exp.company}</h3>
                      <p className="text-sm text-primary">{exp.role}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <span>{exp.period}</span>
                    <span>•</span>
                    <span className="text-secondary">{exp.project}</span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">▹</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Date on opposite side (desktop) */}
              <div className={`hidden md:flex md:w-1/2 items-center ${index % 2 === 0 ? 'md:pl-12 justify-start' : 'md:pr-12 justify-end'}`}>
                <span className="text-sm text-muted-foreground font-medium">{exp.period}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
