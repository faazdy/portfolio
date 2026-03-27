import React, { useState, useEffect } from 'react'
import "../styles/navbar.css"

function Navbar() {
    const [open, setOpen] = useState(false)
    const [isDark, setIsDark] = useState(localStorage.getItem("theme") === 'dark')

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark-theme')
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark-theme')
            localStorage.setItem('theme', 'light')
        }
    }, [isDark])

    const toggleDark = () => setIsDark(prev => !prev)
    const handleOpenMenu = () => setOpen(prev => !prev)

    return (
        <header className="site-header">
            <nav className="navbar">

                {/* Logo */}
                <a href="#root" className="navbar__logo">
                    <img src="assets/content/profile.jpeg" alt="Leonardo" />
                    <span>Leonardo</span>
                </a>

                {/* Links desktop */}
                <ul className="navbar__links">
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#about-me">About</a></li>
                    <li><a href="#stack">Skills</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

                {/* Right: status + dark toggle + burger */}
                <div className="navbar__right">
                    <div className="navbar__status">
                        <span className="navbar__status-dot" />
                        <span>Available</span>
                    </div>

                    <button
                        className={`navbar__theme-btn${isDark ? ' is-dark' : ''}`}
                        onClick={toggleDark}
                        aria-label="Toggle dark mode"
                    >
                        {isDark ? '☀︎' : '◐'}
                    </button>

                    <button
                        className={`navbar__burger${open ? ' is-open' : ''}`}
                        onClick={handleOpenMenu}
                        aria-label="Toggle menu"
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>

                {/* Mobile dropdown */}
                <div className={`navbar__mobile-menu${open ? ' is-open' : ''}`}>
                    <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
                    <a href="#about-me" onClick={() => setOpen(false)}>About</a>
                    <a href="#stack"    onClick={() => setOpen(false)}>Skills</a>
                    <a href="#contact"  onClick={() => setOpen(false)}>Contact</a>
                </div>

            </nav>
        </header>
    )
}

export default Navbar