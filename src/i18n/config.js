import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import es from './locales/es.json'
import en from './locales/en.json'

const supported = ['es', 'en']
const saved = localStorage.getItem('lang')
const browser = navigator.language.slice(0, 2)
const lng = saved || (supported.includes(browser) ? browser : 'es')

i18n.use(initReactI18next).init({
  resources: {
    es: { translation: es },
    en: { translation: en },
  },
  lng,
  fallbackLng: 'es',
  interpolation: { escapeValue: false },
})

export { default } from 'i18next'
