'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Briefcase, GraduationCap, Globe, User, Calendar } from 'lucide-react'

const profileInfo = [
  { icon: User, label: 'Name', value: 'Vikshit Tindwani' },
  { icon: Briefcase, label: 'Role', value: 'AI Automation Specialist' },
  { icon: Calendar, label: 'Experience', value: '1 Year 3 Months' },
  { icon: MapPin, label: 'Location', value: 'Rajasthan, India' },
  { icon: GraduationCap, label: 'Education', value: 'Bachelor of Computer Application' },
  { icon: Globe, label: 'Languages', value: 'English, Hindi' },
]

const skills = [
  { name: 'Generative AI', percentage: 95 },
  { name: 'Data Visualization', percentage: 90 },
  { name: 'Deep Learning', percentage: 85 },
  { name: 'Statistical Analysis', percentage: 85 },
  { name: 'Machine Learning', percentage: 80 },
]

const techStack = [
  'Python', 'TensorFlow', 'NumPy', 'Pandas', 'Scikit-learn',
  'Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'FastAPI',
  'PostgreSQL', 'Docker', 'AWS', 'Git', 'HTML5'
]

function SkillBar({ name, percentage, delay }: { name: string; percentage: number; delay: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-foreground font-medium">{name}</span>
        <span className="text-primary">{percentage}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
        />
      </div>
    </div>
  )
}

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate about leveraging AI and machine learning to create innovative solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Profile Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass rounded-2xl p-6 md:p-8"
          >
            <h3 className="text-xl font-semibold mb-6 gradient-text">Profile</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {profileInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                >
                  <info.icon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground">{info.label}</p>
                    <p className="text-sm font-medium text-foreground">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass rounded-2xl p-6 md:p-8"
          >
            <h3 className="text-xl font-semibold mb-6 gradient-text">Skills</h3>
            <div className="space-y-5">
              {skills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  percentage={skill.percentage}
                  delay={0.3 + index * 0.1}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 glass rounded-2xl p-6 md:p-8"
        >
          <h3 className="text-xl font-semibold mb-6 gradient-text text-center">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-2 bg-muted/50 rounded-full text-sm font-medium text-foreground hover:bg-primary/20 hover:text-primary transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
