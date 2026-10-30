import { useEffect, useRef, useState } from 'react'
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

// "+" that turns into an "×" when the menu is open
function MenuButton({ open, onClick, t }) {
    return (
        <button
            type="button"
            className="burger"
            onClick={onClick}
            aria-label={t.menu}
            aria-expanded={open}
            aria-controls="mobile-menu"
        >
            <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 3v14M3 10h14" /></svg>
        </button>
    )
}

function Navbar({ page, lang, setLang, t, goTo }) {
    const [now, setNow] = useState(new Date())
    const [menuOpen, setMenuOpen] = useState(false)
    const headerRef = useRef(null)

    // Clock lives here so only the header re-renders every second
    useEffect(() => {
        const timer = setInterval(() => setNow(new Date()), 1000)
        return () => clearInterval(timer)
    }, [])

    // The open menu closes with Escape or a tap outside the header
    useEffect(() => {
        if (!menuOpen) return

        const closeOnEscape = (event) => { if (event.key === 'Escape') setMenuOpen(false) }
        const closeOnOutside = (event) => { if (!headerRef.current.contains(event.target)) setMenuOpen(false) }

        document.addEventListener('keydown', closeOnEscape)
        document.addEventListener('pointerdown', closeOnOutside)
        return () => {
            document.removeEventListener('keydown', closeOnEscape)
            document.removeEventListener('pointerdown', closeOnOutside)
        }
    }, [menuOpen])

    // Menu links also close the menu
    const goToAndClose = (name) => (event) => {
        setMenuOpen(false)
        goTo(name)(event)
    }

    return (
        <>
            <header className="site-header" ref={headerRef}>
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

                {/* Mobile: everything but the brand goes in a panel under the header */}
                <MenuButton open={menuOpen} onClick={() => setMenuOpen(open => !open)} t={t} />

                <div id="mobile-menu" className={menuOpen ? 'mobile-menu is-open' : 'mobile-menu'}>
                    <nav className="nav">
                        <NavLinks page={page} t={t} goTo={goToAndClose} />
                    </nav>
                    <a href="#contact" onClick={goToAndClose('contact')} className="cta">{t.cta}</a>
                    <div className="mobile-menu-foot">
                        <span className="muted">{formatClock(now, lang)}</span>
                        <LanguageSwitch lang={lang} setLang={setLang} />
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar
