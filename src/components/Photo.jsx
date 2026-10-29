import { PHOTO_URL } from '../data/site'
import '../styles/components/Photo.css'

function Photo({ className }) {
    return <img src={PHOTO_URL} alt="Leonardo Rengifo" className={`photo ${className}`} />
}

export default Photo
