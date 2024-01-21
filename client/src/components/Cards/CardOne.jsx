import { Image } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { generateTranslationKey } from '../../utils/i18nUtils'

export function CardOne(props) {
  const { t, i18n } = useTranslation()

  const titleKey = generateTranslationKey('title', i18n.language)
  const textKey = generateTranslationKey('text', i18n.language)

  return (

    <>
      <section className='bg-light'>
        <div className="container bg-white">
          <h2 className='pt-5 text-center'>{t(props[titleKey])}</h2>
          <div className='mt-5 d-flex justify-content-center ms-auto me-auto'
            style={{ width: '60%', }}>
            <Image
              src={import.meta.env.VITE_REACT_APP_API_URL + props.img}
              alt=""
              style={{ objectFit: 'cover', maxHeight: '60vh', boxShadow: '0 0 10px rgba(0,0,0,0.7)', borderRadius: '10px'}}
            />
          </div>
        </div>
      </section>
      <section className='bg-light'>
        <div className='container bg-white'>
          <div className='pt-4 '>
            <p className='p-4' style={{ whiteSpace: 'pre-line', wordWrap: 'break-word', textAlign: 'justify' }}>{t(props[textKey])}</p>
          </div>
        </div>
      </section>
    </>
  )
}
