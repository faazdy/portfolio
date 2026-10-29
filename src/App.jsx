import { useEffect, useState } from 'react'
import { PAGES } from './data/site'
import { TRANSLATIONS } from './data/i18n'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Info from './pages/Info'
import Work from './pages/Work'
import Contact from './pages/Contact'
import { ProjectDetail } from './components/ProjectCard'
import './styles/style.css'

const PAGE_COMPONENTS = { home: Home, info: Info, work: Work, contact: Contact }

// The URL hash is the route: "#work" -> "work", "#work/pingym" -> "work/pingym".
// Anything unknown falls back to the home page.
function getRouteFromUrl() {
    const route = window.location.hash.slice(1)
    const page = route.split('/')[0]
    return PAGES.includes(page) ? route : 'home'
}

// Saved choice first, then the browser language
function getInitialLanguage() {
    try {
        const saved = localStorage.getItem('lang')
        if (saved === 'en' || saved === 'es') return saved
    } catch { /* storage unavailable */ }

    return navigator.language?.startsWith('es') ? 'es' : 'en'
}

function App() {
    const [route, setRoute] = useState(getRouteFromUrl)
    const [lang, setLang] = useState(getInitialLanguage)

    // `t` holds every text of the page in the current language
    const t = TRANSLATIONS[lang]

    // "work/pingym" -> page "work" + project "pingym" (opens the project detail)
    const [page, projectSlug] = route.split('/')
    const CurrentPage = projectSlug ? ProjectDetail : PAGE_COMPONENTS[page]

    // Keep the page in sync with the browser back/forward buttons
    useEffect(() => {
        const handleHashChange = () => setRoute(getRouteFromUrl())
        window.addEventListener('hashchange', handleHashChange)
        return () => window.removeEventListener('hashchange', handleHashChange)
    }, [])

    useEffect(() => {
        document.documentElement.lang = lang
        try { localStorage.setItem('lang', lang) } catch { /* storage unavailable */ }
    }, [lang])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [route])

    // Returns a click handler, e.g. onClick={goTo('work')} or onClick={goTo('work/pingym')}
    const goTo = (nextRoute) => (event) => {
        event?.preventDefault()
        if (nextRoute === route) return

        window.location.hash = nextRoute === 'home' ? '' : nextRoute
        setRoute(nextRoute)
    }

    return (
        <div className="shell">
            <Navbar page={page} lang={lang} setLang={setLang} t={t} goTo={goTo} />
            {/* key: remount on every route change so the scroll resets and the fade-in replays */}
            <CurrentPage key={route} t={t} goTo={goTo} slug={projectSlug} />
        </div>
    )
}

export default App
