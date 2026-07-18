'use client'

import { Card } from '@/components/ui/card'
import { GraduationCap } from 'lucide-react'

export function Education() {
  return (
    <section id="education" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Title */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-accent rounded-full"></div>
        </div>

        {/* Education Card */}
        <Card className="bg-card border-border p-8 hover:border-accent/50 transition-colors">
          <div className="flex items-start gap-6">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-6 h-6 text-accent" />
            </div>
            <div className="flex-grow">
              <h3 className="text-2xl font-bold mb-2">Bachelor&apos;s Degree</h3>
              <p className="text-lg text-accent mb-2">Faculty of Computers and Information</p>
              <p className="text-foreground/70">Graduate 2025</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
