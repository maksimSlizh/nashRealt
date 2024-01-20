import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Image } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { generateTranslationKey } from '../utils/i18nUtils'
import logo from '../assets/img/logo.jpg'
import unilink from '../assets/img/unilnk.jpg'
import { INSURANCES_ROUTE } from '../utils/consts'


export function Insurances() {
  const { insurance } = useSelector((state) => state.insurance)
  const { t, i18n } = useTranslation()

  const titleKey = generateTranslationKey('title', i18n.language)

  function renderInsurance() {
    return insurance.map((item, index) => {
      return (
        <NavLink to={`${INSURANCES_ROUTE}/selected/${item.id}`} key={index} className='insurance__link'>
          <div className='insurance__item' key={index}>
            <h5 className='insurance__text'>{t(item[titleKey])}</h5>
            <div className='mt-auto pe-3 pb-3'>
              <Image src={import.meta.env.VITE_REACT_APP_API_URL + item.icon} width={100} alt="Нет Картинки" />
            </div>
          </div>
        </NavLink>
      )
    })
  }

  return (
    <>
      <section className='prew'>
        <div className='container'>
          <div className='d-flex justify-content-between'>
            <div className='d-flex'>
              <img src={logo} style={{ width: '40%', objectFit: 'contain' }} alt="" />
              <h1 className='m-auto'>
                {t('insurance.title')}
              </h1>
            </div>
            <Image src={unilink} style={{ width: '35%' }} alt="" />
          </div>
        </div>
      </section>
      <section className='mt-5 pb-5'>
        <div className='container'>
          <h2 className='mb-5'>{t('insurance.offer')}</h2>
          <div className='insurance'>
            {renderInsurance()}
          </div>
        </div>
      </section>
    </>
  )
}
