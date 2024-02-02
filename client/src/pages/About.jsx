import { useTranslation } from 'react-i18next'

export function About() {
  const { t } = useTranslation()

  return (
    <section className='mt-4'>
      <div className="container">
        <h1 className='title-page'>{t('about.title')}</h1>
        <div className='mt-5'>
          <p className='card-one__text'>
            {t('about.greeting')}<br />
            {t('about.intro')}<br />
            {t('about.licenseInfo')}<br /><br />
            {t('about.insuranceInfo')}<br />
            {t('about.officeLocation')}
          </p>
        </div>
      </div>
    </section>
  )
}
