import { createContext, useContext, useState } from 'react'

const LanguageContext = createContext({ lang: 'en', setLang: () => {} })

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en')
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  return useContext(LanguageContext)
}

/** Pick the right translation from an array.
 *  Supports both { language: 'en' } and { language_code: 'en' } / { language_id: 1 } shapes.
 */
export function pickTranslation(translations = [], lang = 'en') {
  if (!Array.isArray(translations) || translations.length === 0) return null
  const isML = lang === 'ml'
  return (
    translations.find(t =>
      t?.language === lang ||
      t?.language_code === lang ||
      (isML ? t?.language_id === 2 : t?.language_id === 1)
    ) || translations[0]
  )
}
