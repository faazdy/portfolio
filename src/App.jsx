import React, { useState } from 'react'
import { motion } from "framer-motion"
import { projects } from './data/data'
import { stackLanguages } from './data/data'
import Navbar from './components/Navbar'
import ProjectCard from './components/ProjectCard'
import './styles/style.css'

function App() {
    const [status, setStatus] = useState('')
    const year = new Date().getFullYear()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target
        const data = new FormData(form)
        const res = await fetch("https://formspree.io/f/mjkalzry", {
            method: "POST",
            body: data,
            headers: { Accept: "application/json" },
        })
        if (res.ok) {
            setStatus("Message sent!")
            form.reset()
        } else {
            setStatus("Something went wrong")
        }
    }

    return (
        <>
            {/* ── NAV: pasa el control del dark mode a Navbar ── */}
            <Navbar />

            <main>

                {/* ── HERO ── */}
                <motion.section
                    id="hero"
                    initial={{ opacity: 0, y: 32 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.75, ease: "easeOut" }}
                >
                    <p className="hero-eyebrow">Bogotá, Colombia</p>

                    <h1 className="hero-name">
                        I'm <span>Leonardo</span>
                    </h1>

                    <p className="hero-role">Systems Engineer &amp; Web Developer</p>

                    <p className="hero-quote">"Everything is possible."</p>

                    <div className="hero-actions">
                        <a href="#projects" className="btn-primary">
                            View projects <span>↓</span>
                        </a>
                        <a href="#contact" className="btn-ghost">Contact me</a>
                    </div>

                    <div className="hero-social">
                        <a
                            href="https://www.linkedin.com/in/leonardo-rengifo-ramos-694022210"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                        >
                            <img src="assets/icons/linkedin.png" alt="LinkedIn" />
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/faazdy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                        >
                            <img src="assets/icons/icons8-github-480.png" alt="GitHub" />
                            GitHub
                        </a>
                    </div>
                </motion.section>

                {/* ── ABOUT ME ── */}
                <section id="about-me">
                    <div className="about-content">
                        <h2 className="section-label">About me</h2>
                        <p className="about-text">
                            I'm a Systems Engineering student and front-end web developer
                            passionate about creating clean, user-friendly interfaces. I work
                            with HTML5, CSS3, JavaScript, and Sass, using frameworks like
                            Bootstrap and React. Currently learning Vue.js to strengthen my
                            front-end skills and build modern, efficient web applications.
                        </p>
                        <a
                            href="/assets/content/HVLeonardoRengifoRamos-TI.pdf"
                            className="btn-download"
                            download="HVLeonardoRengifoRamos-TI.pdf"
                        >
                            <img src="/assets/icons/downloadcvico.png" alt="" />
                            Download resume
                        </a>
                    </div>

                    <div className="about-aside">
                        <div className="about-stat">
                            <div className="about-stat-num">3+</div>
                            <div className="about-stat-label">Years learning & building</div>
                        </div>
                        <div className="about-stat">
                            <div className="about-stat-num">∞</div>
                            <div className="about-stat-label">Curiosity</div>
                        </div>
                    </div>
                </section>

                {/* ── PROJECTS ── */}
                <section id="projects">
                    <h2 className="section-label">Featured projects</h2>
                    <div className="projects-grid">
                        {projects.map(project => (
                            <ProjectCard {...project} key={project.id} />
                        ))}
                    </div>
                </section>

                {/* ── SKILLS / STACK ── */}
                <section id="stack">
                    <p className="section-label">Skills &amp; stack</p>
                    <div className="stack-grid">
                        {stackLanguages.map(icon => (
                            <div className="stack-card" key={icon.id}>
                                <img src={icon.icon} alt={icon.nameTechnology} />
                                <span>{icon.nameTechnology}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── CONTACT ── */}
                <section id="contact">
                    <h2 className="contact-big">
                        Let's build<br />something <em>great</em>
                    </h2>
                    <p className="contact-sub">
                        Available for freelance projects and collaborations.
                        Tell me what you have in mind.
                    </p>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <input type="email" name="email" placeholder="Your email" required />
                        <input type="text"  name="name"  placeholder="Your name"  required />
                        <textarea name="message" placeholder="Message" required />
                        <button type="submit">Send message ↗</button>
                    </form>

                    {status && (
                        <p className={`form-status${status === "Something went wrong" ? " bad" : ""}`}>
                            {status}
                        </p>
                    )}

                    <hr className="contact-divider" />
                    <p className="contact-find-label">FIND ME ON</p>

                    <div className="contact-links">
                        <a href="mailto:leorengifor.dev@gmail.com" className="contact-link">
                            <img src="assets/icons/email.png" alt="" />
                            Email
                        </a>
                        <a
                            href="https://www.linkedin.com/in/leonardo-rengifo-ramos-694022210"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-link"
                        >
                            <img src="assets/icons/linkedin.png" alt="" />
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/faazdy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-link"
                        >
                            <img src="assets/icons/icons8-github-480.png" alt="" />
                            GitHub
                        </a>
                    </div>
                </section>

            </main>

            {/* ── FOOTER ── */}
            <footer>
                <span>Leonardo — {year}</span>
                <div className="footer-links">
                    <a href="https://www.linkedin.com/in/leonardo-rengifo-ramos-694022210" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://github.com/faazdy" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
            </footer>
        </>
    )
}

export default App