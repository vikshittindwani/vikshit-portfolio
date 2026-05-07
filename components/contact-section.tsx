'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { MapPin, Phone, Mail, Linkedin, Github, Twitter, Instagram, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const contactInfo = [
  { icon: MapPin, label: 'Location', value: 'Rajasthan, India' },
  { icon: Phone, label: 'Phone', value: '+91 7232871369', href: 'tel:+917232871369' },
  { icon: Mail, label: 'Email', value: 'Vickytindwani366@gmail.com', href: 'mailto:Vickytindwani366@gmail.com' },
]

const socialLinks = [
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/vikshit-tindwani-ab88a630b' },
  { icon: Github, label: 'GitHub', href: 'https://github.com/vikshittindwani' },
  { icon: Twitter, label: 'Twitter', href: 'https://twitter.com/TindwaniVi67470' },
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/_vicky_tindwani' },
]

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setFormData({ name: '', email: '', message: '' })
    alert('Message sent! Thank you for reaching out.')
  }

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {"Have a project in mind? Let's collaborate and build something amazing together."}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass rounded-2xl p-6 md:p-8"
          >
            <h3 className="text-xl font-semibold mb-6 gradient-text">Contact Information</h3>
            
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="p-3 rounded-lg bg-primary/10">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <span className="text-muted-foreground">{info.value}</span>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <h4 className="text-lg font-semibold mb-4 text-foreground">Follow Me</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-3 rounded-lg bg-muted/50 text-muted-foreground hover:bg-primary/20 hover:text-primary hover:glow-blue transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass rounded-2xl p-6 md:p-8"
          >
            <h3 className="text-xl font-semibold mb-6 gradient-text">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-muted/50 border-border/50 focus:border-primary transition-colors"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-muted/50 border-border/50 focus:border-primary transition-colors"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-3 py-2 rounded-md bg-muted/50 border border-border/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground hover:glow-blue transition-all duration-300"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
