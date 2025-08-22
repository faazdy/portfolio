import React from 'react'
import { useState } from 'react'
import "../styles/card.css"

function ProjectCard({ id, nameProject, description, techStack, stack, cardImg, url }) {
    {/* OLD CARDS
        <div className="card" style={{ backgroundImage: `url(${cardImg})` }}>
            <div className="content">
                <h4>{nameProject}</h4>
                <p>{description}</p>
                <div>
                    <div className="stack">
                        {
                            stack.map((icon, index) => {
                                return <img src={icon} alt="icon-stack" key={index} />
                            })
                        }
                    </div>
                    <a href={url}>View</a>
                </div>
            </div>
        </div> 

        <div className="project-card">
            <div className="card-img">
                <img src={cardImg} alt="project image" />
            </div>
            <div className="card-info">
                <h4 className='card-title'>{nameProject}</h4>
                <p className='card-text'>{description}</p>
                <div className="card-stack">
                    {stack.map((icon, index) => {
                        return <img src={icon} alt={`stack`} key={index}/>
                    })}
                </div>
            </div>
            <div className="card-btn-container">
                <a href={url} className='card-btn'>View Project</a>
            </div>
        </div>
        
        */}

    const [isActive, setIsActive] = useState(false);
    const handleActive = () => {
        setIsActive(!isActive);
    }
    const cardClass = isActive ? 'card active' : 'card';
    const cardBgClass = isActive ? 'card-bg-active' : 'card-bg';
    return (
        <div className={cardBgClass} onClick={handleActive}>
            <div className={cardClass} onClick={handleActive} style={{ backgroundImage: `url(${cardImg})` }}>
                <div className="info">
                    <h4>{nameProject}</h4>
                    <p>
                        {techStack.map((tech, index) => {
                            return <span key={index} className='tech-stack'>{tech}</span>
                        })}
                    </p>
                </div>
                <div className="card-info-hidden">
                    <h4 className='card-title'>{nameProject}</h4>
                    <p className='card-text'>{description}</p>
                    <div className="card-stack">
                        {stack.map((icon, index) => {
                            return <img src={icon} alt={`stack`} key={index} />
                        })}
                    </div>
                    <div className="card-btn-container">
                        <a href={url} className='card-btn'>View Project</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
