'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Github, ExternalLink, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

const projects = [
  {
    name: 'TableTalk AI',
    description: 'AI-powered restaurant ordering via voice, phone call & WhatsApp. No human waiter needed — 24/7 AI handles orders across all channels.',
    tech: ['Next.js', 'FastAPI', 'Groq', 'Sarvam AI', 'Supabase', 'TypeScript'],
    github: 'https://github.com/vikshittindwani/tabletalk-ai',
    live: 'https://tabletalk-ai-d9dv.vercel.app',
    featured: true,
  },
  {
    name: 'AI Interview Practice',
    description: 'AI-powered mock interview platform to help candidates prepare smarter.',
    tech: ['JavaScript', 'AI/LLM'],
    github: 'https://github.com/vikshittindwani/AI-interview-practice',
    live:'https://ai-interview-practice-tau.vercel.app/',
  },
  {
    name: 'Scrape AI Agent',
    description: 'Natural language AI scraping agent using Playwright + LLMs for flights, e-commerce, and dynamic sites.',
    tech: ['Python', 'Playwright', 'LLMs', 'FastAPI'],
    github: 'https://github.com/vikshittindwani/scrape_ai_agent',
  },
  {
    name: 'Calling Agent',
    description: 'AI-powered phone calling agent for automated voice interactions.',
    tech: ['Python', 'AI', 'Voice API'],
    github: 'https://github.com/vikshittindwani/calling-agent',
  },
  {
    name: 'Movie Recommendation System',
    description: 'ML-based movie recommender using collaborative + content filtering.',
    tech: ['Python', 'Jupyter', 'Scikit-learn', 'Pandas'],
    github: 'https://github.com/vikshittindwani/movie-recommended-system',
  },
  {
    name: 'IPL Prediction Model',
    description: 'Machine learning model to predict IPL match outcomes.',
    tech: ['Python', 'Jupyter', 'ML', 'Data Analysis'],
    github: 'https://github.com/vikshittindwani/ipl-predict',
  },
  {
    name: 'SMS Spam Classifier',
    description: 'NLP + ML model to classify SMS messages as spam or ham.',
    tech: ['Python', 'NLP', 'Scikit-learn'],
    github: 'https://github.com/vikshittindwani/sms-spam',
  },
  {
    name: 'Dog vs Cat Classifier',
    description: 'CNN-based binary image classification (dogs vs cats).',
    tech: ['Python', 'TensorFlow', 'CNN', 'Deep Learning'],
    github: 'https://github.com/vikshittindwani/image-classification-dog-vs-cat',
  },
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className={`glass rounded-2xl p-6 group transition-all duration-300 relative overflow-hidden ${
        project.featured 
          ? 'md:col-span-2 border-2 border-primary/30 hover:border-primary/60' 
          : 'hover:border-primary/30'
      }`}
    >
      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 right-4">
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground text-xs font-semibold"
          >
            <Star className="w-3 h-3 fill-current" />
            Featured
          </motion.span>
        </div>
      )}

      {/* Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
      </div>

      <div className="relative z-10">
        <h3 className={`font-bold mb-2 text-foreground group-hover:gradient-text transition-all ${
          project.featured ? 'text-2xl' : 'text-xl'
        }`}>
          {project.name}
        </h3>
        
        <p className={`text-muted-foreground mb-4 ${project.featured ? 'text-base' : 'text-sm'}`}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs font-medium rounded-full bg-muted/50 text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-primary hover:bg-primary/10"
            asChild
          >
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              Code
            </a>
          </Button>
          {project.live && (
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-primary hover:bg-primary/10"
              asChild
            >
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of AI-powered applications and machine learning projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            asChild
          >
            <a href="https://github.com/vikshittindwani?tab=repositories" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View all 25 repos on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
