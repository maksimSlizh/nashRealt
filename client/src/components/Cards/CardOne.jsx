import { Image } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { generateTranslationKey } from '../../utils/i18nUtils'

export function CardOne(props) {
  const { t, i18n } = useTranslation()

  const titleKey = generateTranslationKey('title', i18n.language)
  const textKey = generateTranslationKey('text', i18n.language)

  return (

    <>
      <section className='bg-light card-one'>
        <div className="container bg-white">
          <h2 className='card-one__title'>{t(props[titleKey])}</h2>
          <div className='card-one__image-container'
            style={{ width: '60%', }}>
            <Image
              src={import.meta.env.VITE_REACT_APP_API_URL + props.img}
              alt="Card image"
              className='card-one__image'
            />
          </div>
        </div>
      </section>
      <section className='bg-light'>
        <div className='container bg-white'>
          <div className='pt-4 '>
            <p className='card-one__text'>{t(props[textKey])}</p>
          </div>
        </div>
      </section>
    </>
  )
}
