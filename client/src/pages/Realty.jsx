import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { CardRealty } from '../components/Cards/CardRealty'
import { fetchRealties } from '../redux/realtySlice'
import { Pages } from '../components/Pages'
import { useParams } from 'react-router-dom'
import agensy from '../assets/img/realtyImg.webp'

export function Realty() {

  const { realties, totalCount, limit } = useSelector(state => state.realty)
  const { page } = useParams()
  const dispatch = useDispatch()
  const { t } = useTranslation()

  useEffect(() => {
    dispatch(fetchRealties({ page }))
  }, [dispatch, page])

  return (
    <section className="mt-5 realty">
      <div className='container'>
        <h3 className='pb-5 title-page'>{t('realty.main')}</h3>

        <div className='realty__wrapper'>
          <div className='realty__info'>
            <p className='realty__text'>{t('realty.prewfirst')}
              <b> {t('realty.prewmiddle')}</b> {t('realty.prewsecond')}:</p>
            <ul>
              <li>{t('realty.li1')}</li>
              <li>{t('realty.li2')}</li>
              <li>{t('realty.li3')}</li>
              <li>{t('realty.li4')}</li>
              <li>{t('realty.li5')}</li>
              <li>{t('realty.li6')}</li>
              <li>{t('realty.li7')}</li>
              <li>{t('realty.li8')}</li>
            </ul>
            <p>{t('realty.services')}</p>
            <ul>
              <li>{t('realty.servicesli1')}</li>
              <li>{t('realty.servicesli2')}</li>
            </ul>
            <p>{t('realty.license')} N 28352</p>
          </div>
          <img src={agensy}
            className='realty__img' alt="" />
        </div>
        <h4 className='realty__title-offer'>{t('realty.offer')}</h4>
        <hr />
        <div className='mt-4 mb-5 card-grid__realty'>
        {realties.map(el => {
          return <CardRealty key={el.id} {...el} />
        })}
        </div>
        <Pages currentPage={parseInt(page || 1)} totalCount={totalCount} limit={limit} resource={'realty'} />
      </div>
    </section>
  )
}
