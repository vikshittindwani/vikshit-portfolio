'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export function GitHubStats() {
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
            GitHub <span className="gradient-text">Stats</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My open source contributions and coding activity
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass rounded-2xl p-6 md:p-8 max-w-4xl mx-auto"
        >
          <div className="flex flex-col items-center gap-8">
            {/* GitHub Streak */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="w-full overflow-hidden rounded-lg"
            >
              <Image
                src="https://streak-stats.demolab.com?user=vikshittindwani&theme=dracula&hide_border=true&background=00000000"
                alt="GitHub Streak Stats"
                width={800}
                height={200}
                className="w-full h-auto"
                unoptimized
              />
            </motion.div>

            {/* GitHub Trophies */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="w-full overflow-hidden rounded-lg"
            >
              <Image
                src="https://github-profile-trophy.vercel.app/?username=vikshittindwani&theme=dracula&no-frame=true&no-bg=true&column=4&margin-w=15&margin-h=15"
                alt="GitHub Trophies"
                width={800}
                height={200}
                className="w-full h-auto"
                unoptimized
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
