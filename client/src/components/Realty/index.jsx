import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { REALTY_ROUTE } from '../../utils/consts'
import { CardRealtySmall } from '../Cards/CardRealtySmall'

export function RealtyComponent({ data: realties }) {
  const { t } = useTranslation()

  return (
    <section className="">
      <div className="container">
        <div className='d-flex align-items-center pt-4 ps-5 pb-5'>
          <h3 className='pe-5'>{t('realty.title')}</h3>
          <NavLink to={`${REALTY_ROUTE}/1`} style={{ textDecoration: 'none' }}>{t('realty.readmore')}</NavLink>
        </div>
        <p className='ps-5'>{t('realty.prewfirst')}
          <b> {t('realty.prewmiddle')} </b> {t('realty.prewsecond')}</p>
        <div className='pt-5 pb-5  d-flex bg-white gap-4 justify-content-center'>
          {realties.slice(0, 4).map(item => <CardRealtySmall key={item.id} {...item} />)}
        </div>
      </div>
    </section>
  )
}
