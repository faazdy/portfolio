// General site config: pages, contact info and project categories

export const PAGES = ['home', 'info', 'work', 'contact']

export const EMAIL = 'leorengifor.dev@gmail.com'
export const PHOTO_URL = '/assets/content/profile.jpeg'
export const CV_URL = '/assets/content/HV-Leonardo%20Rengifo%20Ramos.pdf'
export const CV_FILENAME = 'HV-Leonardo-Rengifo-Ramos.pdf'

export const SOCIALS = [
    { name: 'GitHub', href: 'https://github.com/faazdy' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/leonardo-rengifo-ramos-694022210' },
]

// Type of project shown on its card; keys of `categories` in the translations
export const CATEGORY = { APP: 1, LIBRARY: 2, WEBSITE: 3 }

// Values match the position of each label in `filters` (0 is "All")
export const SCOPE = { PROFESSIONAL: 1, PERSONAL: 2 }
