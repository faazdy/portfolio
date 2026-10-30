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

// Three-column page layout: left aside, scrollable middle, right aside
function Columns({ left, right, children }) {
    return (
        <div className="columns">
            <aside className="col col--left"><Fade>{left}</Fade></aside>
            <main className="col col--mid"><Fade>{children}</Fade></main>
            <aside className="col col--right"><Fade>{right}</Fade></aside>
        </div>
    )
}

export default Columns
