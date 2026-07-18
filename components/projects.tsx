'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Read Zone - Online Book Reading Platform',
    icon: '📚',
    category: 'Main Project',
    description:
      'A modern web application for discovering, searching, and exploring books and audiobooks. The platform provides a responsive user experience with authentication, personalized features, and REST API integration.',
    features: [
      'User Authentication (Login, Signup, OTP Verification)',
      'Browse Books by Categories',
      'Audiobooks Support',
      'Advanced Search (Books & Authors)',
      'User Library & Favorites',
      'Ratings & Reviews',
      'Responsive UI for Desktop & Mobile',
      'REST API Integration',
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'REST API', 'Git & GitHub', 'Vercel'],
    links: {
      demo: 'https://read-zone-portfolio.vercel.app/',
      github: 'https://github.com/mohamed-youssef74/read-zone-portfolio',
    },
  },
  {
    id: 2,
    title: 'Weather App',
    icon: '🌤️',
    category: 'Small Projects',
    description:
      'A real-time weather application that provides accurate weather information using API integration with a clean, responsive interface.',
    tech: ['JavaScript', 'API', 'CSS'],
    links: {
      demo: '#',
      github: '#',
    },
  },
  {
    id: 3,
    title: 'Todo App',
    icon: '✅',
    category: 'Small Projects',
    description:
      'A task management application that allows users to add, edit, and manage their daily tasks efficiently and effectively.',
    tech: ['JavaScript', 'Local Storage', 'CSS'],
    links: {
      demo: '#',
      github: '#',
    },
  },
]

const filterOptions = ['All', 'Main Project', 'Small Projects']

export function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter)

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-background to-card/30">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Title */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-accent rounded-full"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-12">
          {filterOptions.map((filter) => (
            <Button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              variant={activeFilter === filter ? 'default' : 'outline'}
              className={`transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-accent text-accent-foreground hover:bg-accent/90'
                  : 'border-border hover:border-accent'
              }`}
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`${index === 0 ? 'md:col-span-2' : 'col-span-1'} animate-fade-in-up transition-all duration-500`}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <Card className="bg-card border-border hover:border-accent/50 transition-all duration-300 h-full flex flex-col p-6 group hover:shadow-lg hover:shadow-accent/10">
                {/* Header */}
                <div className="mb-4">
                  {project.icon && (
                    <span className="text-4xl mb-3 block">{project.icon}</span>
                  )}
                  <h3 className="text-xl font-bold group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-foreground/70 text-sm mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Features */}
                {project.features && (
                  <div className="mb-6">
                    <ul className="space-y-1 text-sm text-foreground/60">
                      {project.features.map((feature) => (
                        <li key={feature}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-border">
                  {project.links.demo !== '#' && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-accent hover:bg-accent/10"
                      asChild
                    >
                      <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 ml-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.links.github !== '#' && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-accent hover:bg-accent/10"
                      asChild
                    >
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 ml-2" />
                        GitHub
                      </a>
                    </Button>
                  )}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
