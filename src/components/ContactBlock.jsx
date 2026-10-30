import { EMAIL } from '../data/site'
import SocialLinks from './SocialLinks'
import '../styles/components/ContactBlock.css'

function ContactBlock() {
    return (
        <div className="contact-block">
            <a href={`mailto:${EMAIL}`} className="big-line">{EMAIL}</a>

            <div className="socials-row">
                <SocialLinks />
            </div>
        </div>
    )
}

export default ContactBlock
