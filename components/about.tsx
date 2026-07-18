'use client'

export function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-card/30">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Title */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-accent rounded-full"></div>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              I&apos;m a Front-End Developer graduated in 2025 with a passion for building modern, responsive web applications. I focus on creating clean user interfaces and enhancing user experience through real-world projects using React, Next.js, and API integration.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              I&apos;m passionate about writing clean code and applying best practices in web development. I love working on challenging projects that require creative thinking and effective technical solutions.
            </p>
          </div>

          {/* Stats */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-colors">
              <div className="text-3xl font-bold text-accent mb-2">5+</div>
              <p className="text-foreground/80">Projects Completed</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-colors">
              <div className="text-3xl font-bold text-accent mb-2">2025</div>
              <p className="text-foreground/80">Program Graduate</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-colors">
              <div className="text-3xl font-bold text-accent mb-2">7+</div>
              <p className="text-foreground/80">Tools & Technologies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
