import React from 'react'
import { useState, useEffect } from 'react'

function Navbar() {
    //menu
    const [open, setOpen] = useState(false)
    const handleOpenMenu = ()=>{
        setOpen(!open)
    }

    //dark-theme
    const [isDark, setIsDark] = useState(localStorage.getItem("theme") === 'dark');

    useEffect(()=>{
        if(isDark){
            document.documentElement.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light')
        }
    }, [isDark])

    const toggleDark = () =>{
        setIsDark(!isDark)
    }
  return (
    <header>
        <nav>
            <div className="logo">
                <a href="#hero">
                    <img src="assets/icons/ico.png" alt="logo"/>
                </a>
            </div>
            <div className="tags">
                <a href="#projects">Projects</a>
                <a href="#about-me">About me</a>
                <a href="#contact">Contact</a>
            </div>
            <div className={isDark ? 'theme switch-theme' : 'theme'}>
                <label htmlFor='dark' className="ui-switch">
                    <img src="./assets/icons/switchtheme.png" alt="switch-theme-icon" />
                </label>
                <input type="checkbox" id="dark" onChange={toggleDark}/>
            </div>
            <div className="burger">
                <label htmlFor="burger-btn">
                    <img src="assets/icons/menu.png" alt="menu"/>
                </label>
                <input type="checkbox" name="burger-btn" id="burger-btn" onChange={handleOpenMenu}/>
                <nav className="burger-tags" id="burger-tags" style={{transform: open ? 'scale(1)' : 'scale(0)'}}>
                    <a href="#projects">Projects</a>
                    <a href="#about">About me</a>
                    <a href="#contact">Contact</a>
                </nav>
            </div>
        </nav>
    </header>
  )
}

export default Navbar
