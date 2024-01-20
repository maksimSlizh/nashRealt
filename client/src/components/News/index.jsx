import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { CardNewsSmall } from '../Cards/CardNewsSmall'
import { NEWS_ROUTE } from '../../utils/consts'

export function NewsComponent({ data: news }) {
  const { t } = useTranslation()

  return (
    <section className="pt-5 pb-5 bg-light">
      <div className='container'>
        <div className='d-flex align-items-center pt-4 ps-5'>
          <h3 className='pe-5'>{t('prew.newstitle')}</h3>
          <NavLink to={`${NEWS_ROUTE}/1`} style={{ textDecoration: 'none' }}>{t('prew.newslink')}</NavLink>
        </div>
        <div className='pt-5 pb-5  d-flex bg-white gap-4 justify-content-center'>
          {news.slice(0, 4).map(item => <CardNewsSmall key={item.id} {...item} />)}
        </div>
      </div>
    </section>
  )
}
