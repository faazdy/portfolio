import { EMAIL, SOCIALS } from '../data/site'
import '../styles/components/ContactBlock.css'

function ContactBlock() {
    return (
        <div className="contact-block">
            <a href={`mailto:${EMAIL}`} className="big-line">{EMAIL}</a>

            <div className="mono socials-row">
                {SOCIALS.map(social => (
                    <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer">
                        {social.short}
                    </a>
                ))}
            </div>
        </div>
    )
}

export default ContactBlock
