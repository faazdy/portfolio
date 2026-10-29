import { useState } from 'react'
import Columns from '../components/Columns'
import ContactBlock from '../components/ContactBlock'
import { HomeLeft, HomeRight } from '../components/HomeSide'
import '../styles/pages/Contact.css'

const FORMSPREE_URL = 'https://formspree.io/f/mjkalzry'

async function sendMessage(form) {
    const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
    })
    if (!response.ok) throw new Error(response.statusText)
}

function Contact({ t }) {
    const [status, setStatus] = useState('idle') // idle | sending | sent | error

    const handleSubmit = async (event) => {
        event.preventDefault()
        const form = event.target

        setStatus('sending')
        try {
            await sendMessage(form)
            form.reset()
            setStatus('sent')
        } catch {
            setStatus('error')
        }
    }

    return (
        <Columns left={<HomeLeft t={t} />} right={<HomeRight t={t} />}>
            <h1 className="display">{t.contactTitle}</h1>
            <p className="lede lede--narrow">{t.contactIntro}</p>

            <div className="contact-top">
                <ContactBlock />
            </div>

            {status === 'sent' ? (
                <p className="thanks">{t.form.thanks}</p>
            ) : (
                <form className="form" onSubmit={handleSubmit}>
                    <label>
                        {t.form.name}*
                        <input name="name" required placeholder={t.form.namePh} />
                    </label>

                    <label>
                        Email*
                        <input name="email" type="email" required placeholder="contacto@gmail.com" />
                    </label>

                    <label>
                        {t.form.phone}
                        <input name="phone" type="tel" placeholder="+57 300 000 0000" />
                    </label>

                    <label>
                        {t.form.msg}*
                        <textarea name="message" required rows="4" placeholder={t.form.msgPh} />
                    </label>

                    {status === 'error' && <p className="form-error">{t.form.error}</p>}

                    <button type="submit" disabled={status === 'sending'}>
                        {status === 'sending' ? t.form.sending : t.form.send}
                    </button>
                </form>
            )}
        </Columns>
    )
}

export default Contact
