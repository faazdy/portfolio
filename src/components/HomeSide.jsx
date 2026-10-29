import { SOCIALS, EMAIL, CV_URL, CV_FILENAME } from '../data/site'
import Photo from './Photo'
import '../styles/components/HomeSide.css'

// Side columns shared by Home, Work and Contact

export function HomeLeft({ t }) {
    return (
        <>
            <h1 className="display">
                {t.hello1}<br />
                {t.hello2} <span className="accent">Leonardo</span>
            </h1>

            <div className="mono socials-col">
                {SOCIALS.map(social => (
                    <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="accent">
                        {social.name} ↗
                    </a>
                ))}
                <a href={CV_URL} download={CV_FILENAME} className="accent">CV ↓</a>
            </div>

            <div className="push-bottom skills">
                {t.skills.map(skill => <span key={skill}>{skill}</span>)}
            </div>
        </>
    )
}

export function HomeRight({ t }) {
    return (
        <>
            <div className="row-between indent avail-row">
                <span className="avail">
                    <span className="diamond">◆</span>{t.available}
                </span>
                <Photo className="photo--right" />
            </div>

            <div className="role-lines">
                <span>{t.role}</span>
                <span>{t.based}</span>
                <span className="muted">{t.since}</span>
            </div>

            <div className="push-bottom row-between indent footer-row">
                <a href={`mailto:${EMAIL}`} className="big-line">{EMAIL}</a>
                <span className="muted">© {new Date().getFullYear()}</span>
            </div>
        </>
    )
}
