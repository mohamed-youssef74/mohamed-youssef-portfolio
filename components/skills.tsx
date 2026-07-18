'use client'

import { Card } from '@/components/ui/card'

const skills = {
  frontend: [
    'HTML5',
    'CSS3',
    'JavaScript (ES6+)',
    'React.js',
    'Next.js',
    'Responsive Design',
    'Tailwind CSS',
  ],
  tools: [
    'Git',
    'GitHub',
    'VS Code',
    'REST API',
    'Swagger API',
  ],
}

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Title */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills</h2>
          <div className="w-20 h-1 bg-accent rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Frontend Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Front-End</h3>
            <div className="flex flex-wrap gap-3">
              {skills.frontend.map((skill) => (
                <div
                  key={skill}
                  className="bg-card border border-border rounded-full px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all cursor-default"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Others */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Tools & Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {skills.tools.map((skill) => (
                <div
                  key={skill}
                  className="bg-card border border-border rounded-full px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all cursor-default"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
