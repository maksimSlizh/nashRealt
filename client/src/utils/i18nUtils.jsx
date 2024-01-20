export const generateTranslationKey = (baseKey, language) => `${baseKey}_${language === 'pl' ? 'pl' : 'ru'}`
