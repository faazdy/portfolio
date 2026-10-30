import { useEffect, useState } from 'react'
import { PAGES } from '../data/site'
import '../styles/components/Navbar.css'

// e.g. "28 oct, 8:20 p. m."
function formatClock(date, lang) {
    const locale = lang === 'es' ? 'es-CO' : 'en-US'
    const day = date.toLocaleDateString(locale, { day: 'numeric', month: 'short' })
    const time = date.toLocaleTimeString(locale, { hour: 'numeric', minute: '2-digit' })
    return `${day}, ${time}`
}

function NavLinks({ page, t, goTo }) {
    return PAGES.map((name, index) => {
        const isLast = index === PAGES.length - 1

        return (
            <a
                key={name}
                href={name === 'home' ? '#' : `#${name}`}
                onClick={goTo(name)}
                className={page === name ? 'link is-active' : 'link'}
            >
                {t.nav[name]}{isLast ? '' : ','}
            </a>
        )
    })
}

function LanguageSwitch({ lang, setLang }) {
    return (
        <div className="lang">
            <button type="button" className={lang === 'en' ? 'is-active' : ''} onClick={() => setLang('en')}>
                EN
            </button>
            <span className="sep">/</span>
            <button type="button" className={lang === 'es' ? 'is-active' : ''} onClick={() => setLang('es')}>
                ES
            </button>
        </div>
    )
}

function Navbar({ page, lang, setLang, t, goTo }) {
    const [now, setNow] = useState(new Date())

    // Clock lives here so only the header re-renders every second
    useEffect(() => {
        const timer = setInterval(() => setNow(new Date()), 1000)
        return () => clearInterval(timer)
    }, [])

    return (
        <>
            <header className="site-header">
                <a href="#" onClick={goTo('home')} className="brand">
                    <span className="brand-mark">◆</span>Leonardo
                </a>

                <nav className="nav nav--wide">
                    <NavLinks page={page} t={t} goTo={goTo} />
                </nav>

                <div className="header-right">
                    <span className="muted clock">{formatClock(now, lang)}</span>
                    <LanguageSwitch lang={lang} setLang={setLang} />
                    <a href="#contact" onClick={goTo('contact')} className="cta">{t.cta}</a>
                </div>
            </header>

            {/* Mobile: links go in their own row under the header */}
            <nav className="nav nav--narrow">
                <NavLinks page={page} t={t} goTo={goTo} />
            </nav>
        </>
    )
}

export default Navbar
