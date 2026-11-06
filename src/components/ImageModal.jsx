import { useEffect, useRef } from 'react'
import '../styles/components/ImageModal.css'

// Enlarged view of an image. The native <dialog> handles Esc, focus and stacking.
function ImageModal({ src, alt, closeLabel, onClose }) {
    const dialogRef = useRef(null)

    useEffect(() => {
        const dialog = dialogRef.current
        if (!dialog.open) dialog.showModal()

        document.body.style.overflow = 'hidden'
        return () => { document.body.style.overflow = '' }
    }, [])

    // Closing the dialog itself returns focus to the image that opened it
    const close = () => dialogRef.current.close()

    // The dialog fills the screen, so a click on it is a click outside the image
    const closeOnBackdrop = (event) => {
        if (event.target === event.currentTarget) close()
    }

    return (
        <dialog ref={dialogRef} className="image-modal" onClose={onClose} onClick={closeOnBackdrop}>
            <button type="button" className="image-modal-close" aria-label={closeLabel} onClick={close}>✕</button>
            <img src={src} alt={alt} />
        </dialog>
    )
}

export default ImageModal
