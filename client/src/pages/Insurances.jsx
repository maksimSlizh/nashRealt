import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Image } from 'react-bootstrap'
import { deleteInsurance } from '../http/insuranceApi'
import { fetchInsurance } from '../redux/insuranceSlice'
import { useTranslation } from 'react-i18next'
import { generateTranslationKey } from '../utils/i18nUtils'
import logo from '../assets/img/logo.webp'
import unilink from '../assets/img/unilnk.webp'
import { INSURANCES_ROUTE } from '../utils/consts'


export function Insurances() {
  const { insurance = [] } = useSelector((state) => state.insurance)
  const { isAuth, user } = useSelector(state => state.user)
  const dispatch = useDispatch()
  const { t, i18n } = useTranslation()

  const titleKey = generateTranslationKey('title', i18n.language)

  const handleDelete = async (id) => {
    try {
      await deleteInsurance(id)
      dispatch(fetchInsurance({ page: 1 }))
    } catch (error) {
      // Обработка ошибок
    }
  }

  function renderInsurance() {
    return insurance.map((item, index) => {
      return (
        <NavLink to={`${INSURANCES_ROUTE}/selected/${item._id}`} key={index} className='insurance__link'>
          <div className='insurance__item' key={index}>
            <h5 className='insurance__text'>{t(item[titleKey])}
            </h5>
            <div className='mt-auto pe-3 pb-3'>
              <Image
                src={item.icon}
                width={100}
                className='insurance__img'
                alt="Нет Картинки" />
            </div>
          </div>
          {isAuth && user.role === 'ADMIN' && (
            <button key={`f${(+new Date).toString(16)} + ${Math.random()}`} className='btn btn-danger mt-5 card-link__delete' onClick={() => handleDelete(item._id)}>X</button>
          )}
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
              <img src={logo} className='prew__logo' alt="" />
              <h1 className='prew__title'>
                {t('insurance.title')}
              </h1>
            </div>
            <Image src={unilink} className='prew__partner' alt="" />
          </div>
        </div>
      </section>
      <section className='mt-5 pb-5'>
        <div className='container'>
          <h2 className='mb-5 title-page '>{t('insurance.offer')}</h2>
          <div className='insurance'>
            {renderInsurance()}
          </div>
        </div>
      </section>
    </>
  )
}
