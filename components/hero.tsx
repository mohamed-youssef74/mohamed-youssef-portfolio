'use client'

import { Button } from '@/components/ui/button'
import { Download, ExternalLink } from 'lucide-react'

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-start pt-20 pb-20">
      <div className="max-w-4xl mx-auto w-full px-6">
        {/* Subtitle */}
        <div className="mb-6">
          <span className="text-sm text-accent font-medium tracking-wider">Front-End Developer</span>
        </div>

        {/* Main Title */}
        <h1 className="text-6xl md:text-7xl font-bold mb-6 text-pretty">
          Hi, I&apos;m Mohamed Youssef
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-2xl leading-relaxed text-pretty">
          I&apos;m a Front-End Developer specializing in building modern, responsive web applications using React and Next.js. I focus on creating clean user interfaces and seamless user experiences through real-world projects.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Projects
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
          <a href="/MO-Youssef-CV-Resume.pdf" download>
            <Button
              size="lg"
              variant="outline"
              className="border-border hover:bg-card"
            >
              Download Resume
              <Download className="w-4 h-4 ml-2" />
            </Button>
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-accent/50"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
