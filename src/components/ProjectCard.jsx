import React from 'react'

function ProjectCard({id, nameProject, description, stack, cardImg, url}) {
    return (
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
    )
}

export default ProjectCard
