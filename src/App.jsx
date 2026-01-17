import React from 'react'
import { useState } from 'react'
import { projects } from './data/data'
import { stackLanguages } from './data/data'
import { motion } from "framer-motion";

import Navbar from './components/Navbar'
import ProjectCard from './components/ProjectCard'


function App() {
    const [status, setStatus] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        const res = await fetch("https://formspree.io/f/mjkalzry", {
            method: "POST",
            body: data,
            headers: { Accept: "application/json" },
        });

        if (res.ok) {
            setStatus("Message sent!");
            form.reset();
        } else {
            setStatus("Something went wrong");
        }
    };

    //year dynamic
    const year = new Date();
    return (
        <>
            <Navbar />
            <main>
                <motion.section className="hero-intro" id="hero"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}>
                    <h4>Hello!</h4>
                    <h1>I'm <span>Leonardo</span></h1>
                    <h3>Systems engineer & Web Developer</h3>
                    <p>
                        "Every is posible."
                    </p>
                    <div className="btns">
                        <a href="#projects">View projects</a>
                        <a href="#contact">Contact</a>
                    </div>
                    <div className="social">
                        <a href="https://www.linkedin.com/in/leonardo-rengifo-ramos-694022210?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
                            <img src="assets/icons/linkedin.png" alt="linkedIn" />
                        </a>
                        <a href="https://github.com/faazdy" target="_blank" rel="noopener noreferrer">
                            <img src="assets/icons/icons8-github-480.png" alt="github" />
                        </a>
                    </div>
                </motion.section>
                <section className="about-me" id='about-me'>
                    <h2>About me</h2>
                    <p>
                        I’m a Systems Engineering student and front-end web developer passionate about creating clean, user-friendly interfaces. I work with HTML5, CSS3, JavaScript, and Sass, using frameworks like Bootstrap and React.
                        Currently, I’m learning Vue.js to strengthen my front-end skills and build modern, efficient web applications. I focus on crafting responsive designs with great attention to UI/UX and performance.
                        I’m a responsible, adaptable person who enjoys continuous learning and bringing ideas to life through code.
                    </p>
                    <a href="#contact" className='btn'>Let's Connect</a>
                </section>
                <section className="projects" id="projects">
                    <h2>Featured Projects</h2>
                    <article className="pj-container">
                        {projects.map(project => {
                            return (
                                <ProjectCard {...project} key={project.id} />
                            )
                        })}
                    </article>
                </section>
                <section className="stack" id="stack">
                    <h2>Skills</h2>
                    <div className="stack-container">
                        {
                            stackLanguages.map(icon => {
                                return (
                                    <div className="stack-card" key={icon.id}>
                                        <img src={icon.icon} alt="stack" />
                                        <span>{icon.nameTechnology}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </section>
                <section className="contact" id="contact">
                    <h2>Contact me</h2>
                    <article className="c-container">
                        <p>
                            You can contact me via email or LinkedIn. Just press the icons or use the form below.
                        </p>

                        <form
                            onSubmit={handleSubmit}
                        >
                            <input type="email" name="email" placeholder="Your email" required />
                            <input type="text" name="name" placeholder="Name" required />
                            <textarea name="message" placeholder="Message" required></textarea>
                            <button type="submit">Send</button>
                        </form>
                        {status && <p className={status === "Something went wrong" ? "form-status bad" : 'form-status'}>{status}</p>}
                        <hr />
                        <h3>Find me on</h3>
                        <div className="tags">
                            <a href="mailto:leorengifor.dev@gmail.com" className="contact-card">
                                <img src="assets/icons/email.png" alt="icon-contact" />
                                <span>Email</span>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/leonardo-rengifo-ramos-694022210"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-card"
                            >
                                <img src="assets/icons/linkedin.png" alt="icon-contact" />
                                <span>LinkedIn</span>
                            </a>
                            <a
                                href="https://github.com/faazdy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-card"
                            >
                                <img src="assets/icons/icons8-github-480.png" alt="icon-contact" />
                                <span>GitHub</span>
                            </a>
                        </div>
                    </article>
                </section>

            </main>
            <footer>
                <div className="text">
                    <p>
                        Leonardo - {year.getFullYear()}
                    </p>
                </div>
                <div className="tags">
                    <a href="https://www.linkedin.com/in/leonardo-rengifo-ramos-694022210?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                    <a href="https://github.com/faazdy" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                </div>
            </footer>
        </>
    )
}

export default App
