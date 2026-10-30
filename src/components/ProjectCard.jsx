import { useEffect } from 'react'
import { localizeProjects } from '../data/i18n'
import Columns from './Columns'
import RevealText from './RevealText'
import '../styles/components/ProjectCard.css'

// Two versions, both open the project detail on click:
// - compact (Home): image + name
// - detailed (Work): adds description and stack
function ProjectCard({ project, goTo, detailed = false }) {
    const route = `work/${project.slug}`

    return (
        <a href={`#${route}`} onClick={goTo(route)} className={detailed ? 'proj' : 'proj proj--feat'}>
            <img src={project.cardImg} alt={project.shortName} className="proj-img" loading="lazy" />

            <div className="proj-meta">
                <span className="proj-name">
                    {project.shortName}
                    <span className="diamond">◆</span>
                    <span className="muted">{project.categoryLabel}</span>
                </span>
            </div>

            {detailed && (
                <>
                    <p className="proj-desc">{project.description}</p>
                    <span className="mono muted proj-stack">{project.techStack.join(' · ')}</span>
                </>
            )}
        </a>
    )
}

// ── Project detail page (#work/<slug>) ──

// Left column: name, thumbnail and facts (year, type, client, role)
function DetailFacts({ project, t }) {
    const facts = [
        { label: t.project.year, value: project.year && `'${String(project.year).slice(2)}` },
        { label: t.project.type, value: project.categoryLabel },
        { label: t.project.client, value: project.client },
        { label: t.project.role, value: project.role },
    ].filter(fact => fact.value)

    return (
        <>
            <RevealText as="h1" className="display">{project.shortName}</RevealText>

            <div className="pd-thumb">
                <img src={project.cardImg} alt="" />
                <span className="muted">{project.categoryLabel}</span>
            </div>

            <div className="push-bottom">
                {facts.map(fact => (
                    <div key={fact.label} className="pd-fact">
                        <span className="muted">{fact.label}</span>
                        <span>{fact.value}</span>
                    </div>
                ))}
            </div>
        </>
    )
}

// Right column: objective / challenge / solution, stack and prev/next links
function DetailNotes({ project, previous, next, t, goTo }) {
    const notes = [
        { label: t.project.objective, text: project.objective },
        { label: t.project.challenge, text: project.challenge },
        { label: t.project.solution, text: project.solution },
    ].filter(note => note.text)

    return (
        <>
            <div className="indent pd-notes">
                {notes.map(note => (
                    <div key={note.label} className="pd-note">
                        <span className="pd-label">{note.label}</span>
                        <p className="muted">{note.text}</p>
                    </div>
                ))}

                <div className="pd-note">
                    <span className="pd-label">Stack</span>
                    <div className="pd-chips">
                        {project.techStack.map(tech => <span key={tech} className="mono">{tech}</span>)}
                    </div>
                </div>
            </div>

            <div className="push-bottom row-between indent">
                <a href={`#work/${previous.slug}`} onClick={goTo(`work/${previous.slug}`)} className="pd-pager">
                    <span>{t.project.prev}</span>
                    <span className="muted">{previous.shortName}</span>
                </a>
                <a href={`#work/${next.slug}`} onClick={goTo(`work/${next.slug}`)} className="pd-pager pd-pager--next">
                    <span>{t.project.next}</span>
                    <span className="muted">{next.shortName}</span>
                </a>
            </div>
        </>
    )
}

export function ProjectDetail({ t, goTo, slug }) {
    const projects = localizeProjects(t)
    const index = projects.findIndex(project => project.slug === slug)
    const notFound = index === -1

    // Unknown project in the URL -> back to the project list
    useEffect(() => {
        if (notFound) window.location.hash = 'work'
    }, [notFound])

    if (notFound) return null

    const project = projects[index]
    const previous = projects[(index - 1 + projects.length) % projects.length]
    const next = projects[(index + 1) % projects.length]
    const demoLabel = project.url.replace(/^https?:\/\//, '').replace(/\/$/, '')

    return (
        <Columns
            left={<DetailFacts project={project} t={t} />}
            right={<DetailNotes project={project} previous={previous} next={next} t={t} goTo={goTo} />}
        >
            <p className="pd-tagline">{project.description}</p>

            <a href={project.url} target="_blank" rel="noopener noreferrer" className="pd-demo">
                {t.project.demoBtn} ↗
            </a>

            <div className="pd-spacer" />

            <div className="row-between pd-live">
                <span>{t.project.live}</span>
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="mono muted">
                    {demoLabel} ↗
                </a>
            </div>

            <div className="pd-gallery">
                <img src={project.cardImg} alt={project.shortName} className="pd-main" />
                {project.gallery.length > 0 && (
                    <div className="pd-grid">
                        {project.gallery.map(src => <img key={src} src={src} alt={project.shortName} loading="lazy" />)}
                    </div>
                )}
            </div>
        </Columns>
    )
}

export default ProjectCard
