import { useTranslation } from 'react-i18next'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation()

  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
  };

  return (
    <div className='locales-link'>
      <button
      className={i18n.language === 'ru' ? 'locales-link__btn-selected' : ' locales-link__btn-unselected'}
      onClick={() => changeLanguage('ru')}>RU</button>
      <button
      className={i18n.language === 'pl' ? 'locales-link__btn-selected' : 'locales-link__btn-unselected'}
      onClick={() => changeLanguage('pl')}>PL</button>
    </div>
  )
}

export default LanguageSwitcher
