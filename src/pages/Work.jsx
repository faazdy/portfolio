import { useState } from 'react'
import { localizeProjects } from '../data/i18n'
import Columns from '../components/Columns'
import ProjectCard from '../components/ProjectCard'
import { HomeLeft, HomeRight } from '../components/HomeSide'
import RevealText from '../components/RevealText'
import '../styles/pages/Work.css'

const SHOW_ALL = 0

function Work({ t, goTo }) {
    // The filter index is the category number (see CATEGORY in data/site.js)
    const [category, setCategory] = useState(SHOW_ALL)

    const visibleProjects = localizeProjects(t).filter(project =>
        category === SHOW_ALL || project.category === category
    )

    return (
        <Columns left={<HomeLeft t={t} />} right={<HomeRight t={t} />}>
            <div className="work-head">
                <RevealText as="h1" className="display">{t.workTitle}</RevealText>

                <div className="filters">
                    {t.filters.map((label, index) => (
                        <button
                            type="button"
                            key={label}
                            onClick={() => setCategory(index)}
                            className={category === index ? 'link is-active' : 'link'}
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
