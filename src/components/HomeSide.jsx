import { EMAIL, CV_URL, CV_FILENAME } from '../data/site'
import Photo from './Photo'
import RevealText from './RevealText'
import SocialLinks from './SocialLinks'
import '../styles/components/HomeSide.css'

// Side columns of the Home page

export function HomeLeft({ t }) {
    return (
        <>
            <RevealText as="h1" className="display">
                {t.hello1}<br />
                {t.hello2} <span className="accent">Leonardo</span>
            </RevealText>

            <div className="mono socials-col">
                <SocialLinks />
                <a href={CV_URL} download={CV_FILENAME} className="accent">CV ↓</a>
            </div>

            <div className="skills">
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
