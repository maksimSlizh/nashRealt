import { NavLink } from 'react-router-dom'
import { CardNewsSmall } from '../Cards/CardNewsSmall'
import { NEWS_ROUTE } from '../../utils/consts'

export function NewsComponent({ data: news }) {
  return (
    <section className="mt-5 pb-5 bg-light">
      <div className='container'>
        <div className='d-flex align-items-center pt-4 ps-5'>
          <h3 className='pe-5'>Новости</h3>
          <NavLink to={`${NEWS_ROUTE}/1`} style={{ textDecoration: 'none' }}>Все новости</NavLink>
        </div>
        <div className='mt-4 pb-5 ps-5 d-flex bg-white'>
          {news.slice(0, 3).map(item => <CardNewsSmall key={item.id} {...item} />)}
        </div>
      </div>
    </section>
  )
}
