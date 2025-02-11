import React from 'react'
import { projects } from './data/data'
import { stackLanguages } from './data/data'
import Navbar from './components/Navbar'

function App() {
    return (
        <>
            <Navbar />
            <main>
                <section className="hero-intro" id="hero">
                    <h4>Hello!</h4>
                    <h1>I'm <span>Leonardo</span></h1>
                    <h3>Front-end Developer</h3>
                    <p>
                        "Every is posible."
                    </p>
                    <div className="btns">
                        <a href="#projects">View projects</a>
                        <a href="#contact">Contact</a>
                    </div>
                    <div className="social">
                        <a href="https://es.fiverr.com/users/faazdy/">
                            <img src="assets/icons/fiverr-svgrepo-com.svg" alt="fiverr" />
                        </a>
                        <a href="https://github.com/faazdy">
                            <img src="assets/icons/icons8-github-480.png" alt="git" />
                        </a>
                    </div>
                </section>
                <section className="projects" id="projects">
                    <h2>Projects/</h2>
                    <article className="pj-container">
                        {projects.map(project => {
                            return (
                                <div className="card" key={project.id} style={{ backgroundImage: `url(${project.cardImg})` }}>
                                    <div className="content">
                                        <h4>{project.nameProject}</h4>
                                        <p>{project.description}</p>
                                        <div>
                                            <div className="stack">
                                                {
                                                    project.stack.map((icon, index) => {
                                                        return <img src={icon} alt="icon-stack" key={index}/>
                                                    })
                                                }
                                            </div>
                                            <a href={project.url}>View</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </article>
                </section>
                <section className="about" id="about">
                    <h2>About me/</h2>
                    <article className="about-container">
                        <p>
                            I'm a passionate Front-end web developer with a pure dedication to my work.
                            My enthusiasm for crafting exceptional web experiences is evident in every project I undertake. Currently, I'm immersed in my journey as a systems engineering student,
                            allowing me to continuously expand my skills and knowledge. If you're interested in collaborating on exciting projects or have any questions, feel free to contact me through the links provided below.
                            I look forward to contributing to the success of your next project!
                        </p>
                        <div className="stack-container">
                            {
                                stackLanguages.map(icon => {
                                    return (
                                        <div className="st-card" key={icon.id}>
                                            <img src={icon.icon} alt="stack" />
                                            <span>{icon.nameTechnology}</span>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </article>
                </section>
                <section className="contact" id="contact">
                    <h2>Contact/</h2>
                    <article className="c-container">
                        <p>
                            You can contact me via email or Instagram. Simply press the icons to reach out to me in whichever way you prefer.
                        </p>
                        <div className="tags">
                            <div className="contact-card" id="email">
                                <img src="assets/icons/email.png" alt="icon-contact" />
                                <span>leorengifor.dev@gmail.com</span>
                            </div>
                            <a href="https://www.instagram.com/fzdy1.js">
                                <div className="contact-card">
                                    <img src="assets/icons/insta.png" alt="icon-contact" />
                                    <span>fzdy1.js</span>
                                </div>
                            </a>
                            <a href="https://www.linkedin.com/in/leonardo-rengifo-ramos-694022210?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                                <div className="contact-card">
                                    <img src="assets/icons/linkedin.png" alt="icon-contact" />
                                    <span>LinkedIn</span>
                                </div>
                            </a>
                        </div>
                    </article>
                </section>
            </main>
            <footer>
                <p>
                    Made with ❤️
                </p>
            </footer>
        </>
    )
}

export default App
