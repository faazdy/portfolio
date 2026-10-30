import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'
import '../styles/components/RevealText.css'

gsap.registerPlugin(SplitText)

// Masked line reveal (GSAP SplitText): the text is split into lines, each line
// sits inside a clipping mask and slides up into view, one after another.
//
// SplitText rewrites the element's HTML, so React must not update the text
// afterwards: when the content changes (e.g. the language), remount it with a
// new `key` (App does this for the whole page).
function RevealText({ as: Tag = 'div', className = '', delay = 0, children }) {
    const ref = useRef(null)

    useLayoutEffect(() => {
        const element = ref.current

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            gsap.set(element, { opacity: 1 })
            return
        }

        let split
        let cancelled = false

        // Lines depend on the font, so wait for it before splitting
        document.fonts.ready.then(() => {
            if (cancelled) return

            gsap.set(element, { opacity: 1 })
            split = SplitText.create(element, {
                type: 'words,lines',
                mask: 'lines',
                autoSplit: true, // re-split when the width changes
                onSplit: (self) => gsap.from(self.lines, {
                    duration: 0.8,
                    yPercent: 100,
                    opacity: 0,
                    stagger: 0.1,
                    ease: 'expo.out',
                    delay,
                }),
            })
        })

        return () => {
            cancelled = true
            split?.revert()
        }
    }, [delay])

    return <Tag ref={ref} className={`reveal ${className}`}>{children}</Tag>
}

export default RevealText
