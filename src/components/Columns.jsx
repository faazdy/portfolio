import { motion } from 'framer-motion'
import '../styles/components/Columns.css'

function Fade({ children }) {
    return (
        <motion.div
            className="fade"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
        >
            {children}
        </motion.div>
    )
}

// Side column; without content it stays as an empty slot so the middle keeps its place
function Aside({ side, children }) {
    if (!children) return <aside className={`col col--${side} col--empty`} />

    return <aside className={`col col--${side}`}><Fade>{children}</Fade></aside>
}

// Three-column page layout: left aside, scrollable middle, right aside
function Columns({ left, right, children }) {
    // Pages with only the middle column get their own responsive rules
    const className = left || right ? 'columns' : 'columns columns--single'

    return (
        <div className={className}>
            <Aside side="left">{left}</Aside>
            <main className="col col--mid"><Fade>{children}</Fade></main>
            <Aside side="right">{right}</Aside>
        </div>
    )
}

export default Columns
