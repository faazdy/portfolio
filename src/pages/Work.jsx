import { useState } from 'react'
import { localizeProjects } from '../data/i18n'
import Columns from '../components/Columns'
import ProjectCard from '../components/ProjectCard'
import RevealText from '../components/RevealText'
import '../styles/pages/Work.css'

const SHOW_ALL = 0

function Work({ t, goTo }) {
    // The filter index is the scope number (see SCOPE in data/site.js)
    const [scope, setScope] = useState(SHOW_ALL)

    const visibleProjects = localizeProjects(t).filter(project =>
        scope === SHOW_ALL || project.scope === scope
    )

    return (
        <Columns>
            <div className="work-head">
                <RevealText as="h1" className="display">{t.workTitle}</RevealText>

                <div className="filters">
                    {t.filters.map((label, index) => (
                        <button
                            type="button"
                            key={label}
                            onClick={() => setScope(index)}
                            className={scope === index ? 'link is-active' : 'link'}
                        >
                            {label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="work-grid">
                {visibleProjects.map(project => (
                    <ProjectCard key={project.id} project={project} goTo={goTo} detailed />
                ))}
            </div>
        </Columns>
    )
}

export default Work
