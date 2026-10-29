import { localizeProjects } from '../data/i18n'
import Columns from '../components/Columns'
import ProjectCard from '../components/ProjectCard'
import { HomeLeft, HomeRight } from '../components/HomeSide'
import '../styles/pages/Home.css'

const FEATURED_COUNT = 3

function Home({ t, goTo }) {
    const projects = localizeProjects(t)
    const featured = projects.slice(0, FEATURED_COUNT)

    return (
        <Columns left={<HomeLeft t={t} />} right={<HomeRight t={t} />}>
            <p className="statement sticky">
                {t.stmtA} <span className="muted">{t.stmtB}</span>
            </p>

            <div className="spacer" />

            <div className="row-between list-head">
                <span className="h-sm">{t.selected}</span>
                <span className="muted">({projects.length})</span>
            </div>

            <div className="featured">
                {featured.map(project => (
                    <ProjectCard key={project.id} project={project} goTo={goTo} />
                ))}
            </div>
        </Columns>
    )
}

export default Home
