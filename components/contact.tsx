'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Mail, Linkedin, Github, MessageCircle } from 'lucide-react'

const contacts = [
  {
    icon: Mail,
    label: 'Email',
    value: 'my6017371@gmail.com',
    href: 'mailto:my6017371@gmail.com',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/mohamed-youssef74',
    href: 'https://github.com/mohamed-youssef74',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/yourprofile',
    href: '#',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '01004431773',
    href: 'https://wa.me/201004431773',
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-card/30">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Title */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let&apos;s Connect</h2>
          <p className="text-lg text-foreground/70 max-w-2xl">
            I&apos;m always open to new opportunities, collaborations, or freelance projects. Feel free to reach out!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {contacts.map((contact) => {
            const Icon = contact.icon
            return (
              <Card
                key={contact.label}
                className="bg-card border-border hover:border-accent/50 transition-all p-6 group cursor-pointer"
                onClick={() => window.open(contact.href, '_blank')}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-accent-foreground transition-all">
                    <Icon className="w-5 h-5 text-accent group-hover:text-accent-foreground" />
                  </div>
                  <div className="flex-grow">
                    <p className="text-sm text-foreground/60 mb-1">{contact.label}</p>
                    <p className="font-semibold group-hover:text-accent transition-colors">
                      {contact.value}
                    </p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            Start a Project with Me
          </Button>
        </div>
      </div>
    </section>
  )
}
