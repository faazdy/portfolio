import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion';
import "../styles/card.css"

function ProjectCard({ id, nameProject, description, techStack, stack, cardImg, url }) {
    const [isActive, setIsActive] = useState(false);
    const handleActive = () => {
        setIsActive(!isActive);
    }
    const cardClass = isActive ? 'card active' : 'card';
    const cardBgClass = isActive ? 'card-bg-active' : 'card-bg';
    return (
        <motion.div 
            className={cardBgClass} 
            onClick={handleActive}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}>
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
                        <a href={url} className='card-btn' target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectCard
