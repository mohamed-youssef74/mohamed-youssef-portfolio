'use client'

import { useState } from 'react'
import { Asterisk, ArrowUpRight, Copy, GitBranch, Mail, MapPin, Menu, X } from 'lucide-react'

const projects = [
  { number: '01', title: 'Nour Baqin', type: 'PWA / PRODUCT', description: 'A calm, focused Islamic companion for reading, listening, and returning to daily rituals.', stack: 'Next.js · TypeScript · PWA', tone: 'project-sand', label: 'Read / Reflect', url: 'https://nour-baqin-updata.vercel.app/' },
  { number: '02', title: 'Read Zone', type: 'DISCOVERY / API', description: 'A faster way to find the next great book, with live catalog data and thoughtful filtering.', stack: 'React · REST APIs · Tailwind', tone: 'project-blue', label: 'Explore / Save', url: 'https://read-zone-portfolio.vercel.app/' },
  { number: '03', title: 'Paint Shop OS', type: 'DASHBOARD / SYSTEM', description: 'A lightweight operating system for inventory, sales, and the everyday rhythm of a paint shop.', stack: 'React · git pusht · Local Storage', tone: 'project-orange', label: 'Track / Move', url: 'https://managing-a-paint-shop.vercel.app/' },
]

const skills = ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'React.js', 'Next.js', 'Tailwind CSS', 'IT Fundamentals', 'Component Architecture', 'Responsive Web Design', 'State Management', 'React Hooks', 'REST APIs', 'Performance Optimization', 'Local Storage', 'Git', 'GitHub', 'VS Code', 'Progressive Web Apps', 'Agile Methodologies', 'Team Collaboration', 'Problem Solving', 'Technical Communication', 'Code Quality']

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [activeFilter, setActiveFilter] = useState('ALL WORK')

  const copyEmail = async () => {
    await navigator.clipboard.writeText('my6017371@gmail.com')
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <main className="site-shell">
      <div className="noise" aria-hidden="true" />
      <nav className="nav-wrap" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Mohamed Youssef home"><span>MY</span><small>Mohmmed Youssef / Frontend Developer</small></a>
        <div id="primary-navigation" className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          <a href="#work" onClick={() => setMenuOpen(false)}>Selected work <i>01</i></a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About me <i>02</i></a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Let&apos;s talk <i>03</i></a>
        </div>
        <a className="availability" href="https://wa.me/201004431773" target="_blank" rel="noreferrer"><span /> Available for work</a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} aria-controls="primary-navigation">{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
      </nav>

      <section className="hero" id="top">
        <div className="hero-kicker"><span>Frontend Developer</span><span>Mansoura, EGYPT</span></div>
        <div className="hero-title"><span className="title-outline">BUILDING</span><span>DIGITAL</span><span className="title-offset">EXPERIENCES<Asterisk className="asterisk" aria-hidden="true" /></span></div>
        <div className="hero-bottom"><p className="hero-intro">I&apos;m Mohamed — a junior frontend developer balancing <em>visual craft</em> with thoughtful code, so every interface feels clear, useful, and fast.</p><div className="scroll-note"><span className="arrow-down">↓</span> SCROLL TO EXPLORE</div></div>
        <div className="hero-orbit" aria-hidden="true"><span>REACT • NEXT • HTML5 • CSS3 • REACT • NEXT • HTML5 • CSS3 • </span></div>
      </section>

      <section className="ticker" aria-label="Skills"><div className="ticker-track" aria-hidden="true">{[...skills, ...skills].map((skill, index) => <span key={`${skill}-${index}`}>{skill} <b>✦</b></span>)}</div></section>

      <section className="work-section section-pad" id="work">
        <div className="section-heading"><p className="eyebrow">( 01 — SELECTED WORK )</p><h2>Things I&apos;ve<br /><em>shipped.</em></h2><div className="filters" role="group" aria-label="Filter projects">{['ALL WORK', 'PRODUCT', 'SYSTEM'].map((filter) => <button key={filter} className={activeFilter === filter ? 'active' : ''} onClick={() => setActiveFilter(filter)}>{filter}</button>)}</div></div>
        <div className="project-list">{projects.filter((project) => activeFilter === 'ALL WORK' || project.type.includes(activeFilter)).map((project) => <article className={`project-card ${project.tone}`} key={project.number}><div className="project-meta"><span>{project.number}</span><span>{project.type}</span></div><div className="project-visual"><div className="visual-window"><div className="window-top"><span /><span /><span /><b>{project.label}</b></div><div className="visual-lines"><i /><i /><i /><i /></div><strong>{project.number}</strong></div></div><div className="project-info"><h3>{project.title}</h3><p>{project.description}</p><div className="project-footer"><span>{project.stack}</span><a href={project.url} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} live demo`}>Live demo <ArrowUpRight size={16} /></a></div></div></article>)}</div>
      </section>

      <section className="about-section section-pad" id="about"><div className="about-marker"><Asterisk aria-hidden="true" /><p>( 02 — THE SHORT VERSION )</p></div><div className="about-copy"><h2>Good interfaces feel<br />like <em>good thinking.</em></h2><p>I&apos;m a motivated IT graduate who enjoys the space between a messy problem and its simplest digital solution. I care about the small things: a component that makes sense, a transition that feels right, a page that works everywhere without making the user wait.</p><p>When I&apos;m not building, I&apos;m learning, sketching ideas, and looking for better ways to make the web a little more human.</p><div className="about-facts"><div><b>2026</b><span>Graduating in<br />Information Technology</span></div><div><b>∞</b><span>Always curious<br />about what&apos;s next</span></div></div></div></section>

      <section className="contact-section section-pad" id="contact"><div className="contact-top"><p className="eyebrow">( 03 — START A CONVERSATION )</p><span className="contact-index">LET&apos;S MAKE<br /><em>SOMETHING.</em></span></div><a className="email-link" href="mailto:my6017371@gmail.com">my6017371@gmail.com <ArrowUpRight size={28} /></a><div className="contact-bottom"><button className="copy-button" onClick={copyEmail}><Copy size={15} /> {copied ? 'Copied!' : 'Copy email'}</button><div className="socials"><a href="https://github.com/mohamed-youssef74" target="_blank" rel="noreferrer"><GitBranch size={18} /> GitHub</a><a href="https://wa.me/201004431773" target="_blank" rel="noreferrer"><Mail size={18} /> WhatsApp</a></div></div></section>

      <footer><div className="footer-logo">MOHAMED<br /><span>YOUSSEF</span></div><p>Designed by Mohammed Yossef<br /></p><span className="location"><MapPin size={14} /> Mansoura </span></footer>
    </main>
  )
}
