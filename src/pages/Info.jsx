import { stackLanguages, experiences } from '../data/data'
import { CV_URL, CV_FILENAME } from '../data/site'
import { CERTIFICATIONS } from '../data/i18n'
import Columns from '../components/Columns'
import ContactBlock from '../components/ContactBlock'
import Photo from '../components/Photo'
import RevealText from '../components/RevealText'
import '../styles/pages/Info.css'

const testimonial = experiences.find(job => job.testimonial)?.testimonial

// Left column: title, photo and contact
function AboutColumn({ t }) {
    const shortYear = String(new Date().getFullYear()).slice(2)

    return (
        <>
            <RevealText as="h1" className="display">{t.aboutTitle}</RevealText>

            <div className="photo-wrap photo-wrap--left">
                <Photo className="photo--left" />
                <span className="muted small">© 2023–{shortYear}</span>
            </div>

            <div className="push-bottom">
                <ContactBlock />
            </div>
        </>
    )
}

// Right column: numbers and experience timeline
function ExperienceColumn({ t }) {
    return (
        <div className="indent">
            <span className="accent timeline-label">{t.timelineLabel}</span>
            {t.timeline.map(job => (
                <div key={job.title} className="tl-item">
                    <span className="tl-year">{job.period}</span>
                    <div className="tl-body">
                        <span>{job.title}</span>
                        <span className="muted">{job.org}</span>
                    </div>
                </div>
            ))}
            <br />
            <br />
            <br />
            <br />
            {t.stats.map(stat => (
                <div key={stat.label} className="stat">
                    <span className="muted accent">{stat.value}</span>
                    <span>{stat.label}</span>
                </div>
            ))}
        </div>
    )
}

// Middle column: what I achieved in each job (from the HV)
function Achievements({ t }) {
    return (
        <section className="info-section">
            <span className="accent mono label">{t.experienceLabel}</span>

            {t.experience.map(job => (
                <article key={job.role} className="exp-job">
                    <div className="exp-head">
                        <div className="exp-title">
                            <span>{job.role}</span>
                            <span className="muted">{job.company}</span>
                        </div>
                        <span className="muted exp-period">{job.period}</span>
                    </div>

                    <ul className="exp-list">
                        {job.achievements.map(item => <li key={item}>{item}</li>)}
                    </ul>
                </article>
            ))}
        </section>
    )
}

function Certifications({ t }) {
    return (
        <section className="info-section">
            <span className="accent mono label">{t.certsLabel}</span>

            <div>
                {CERTIFICATIONS.map(cert => (
                    <div key={cert.name} className="cert">
                        <div className="cert-body">
                            <span>{cert.name}</span>
                            <span className="muted">{cert.issuer}</span>
                        </div>
                        <span className="muted">{cert.year}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}

function Info({ t }) {
    return (
        <Columns left={<AboutColumn t={t} />} right={<ExperienceColumn t={t} />}>
            <p className="statement">{t.bio}</p>
            <p className="lede">{t.bio2}</p>
            <a href={CV_URL} download={CV_FILENAME} className="resume">{t.resume}</a>

            {testimonial && (
                <blockquote className="quote">
                    “{testimonial.text}”
                    <cite className="mono">{testimonial.author}</cite>
                </blockquote>
            )}

            <Achievements t={t} />
            <Certifications t={t} />

            <div className="push-bottom stack-wrap">
                <div className="stack">
                    <span className="accent mono muted label">{t.stackLabel}</span>
                    <div className="stack-list">
                        {stackLanguages.map(tech => (
                            <img
                                key={tech.id}
                                src={tech.icon}
                                alt={tech.nameTechnology}
                                title={tech.nameTechnology}
                                className="stack-icon"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Columns>
    )
}

export default Info
