import React from 'react'

function Navbar() {
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
                <a href="#about">About me</a>
                <a href="#contact">Contact</a>
            </div>
            <div className="theme">
                <label className="ui-switch">
                    <input type="checkbox" id="dark"/>
                    <div className="slider">
                        <div className="circle"></div>
                    </div>
                </label>
            </div>
            <div className="burger">
                <label htmlFor="burger-btn">
                    <img src="assets/icons/menu.png" alt="menu"/>
                </label>
                <input type="checkbox" name="burger-btn" id="burger-btn"/>
                <nav className="burger-tags" id="burger-tags">
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
