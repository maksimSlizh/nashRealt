import { NavLink } from 'react-router-dom'
import { REALTY_ROUTE } from '../../utils/consts'
import { CardRealtySmall } from '../Cards/CardRealtySmall'

export function RealtyComponent({ data: realties }) {

  return (
    <section className="">
      <div className="container">
        <div className='d-flex align-items-center pt-4 ps-5 pb-5'>
          <h3 className='pe-5'>Недвижимость</h3>
          <NavLink to={`${REALTY_ROUTE}/1`} style={{ textDecoration: 'none' }}>Все предложения</NavLink>
        </div>
        <p className='ps-5'>Оказываем весь спектр услуг по покупке и аренде жилья, офисных помещений
          <b> ПОЛНОЕ СОПРОВОЖДЕНИЕ </b> при покупке и аренде недвижимости от поиска до подписания договора и получения ключей</p>
        <div className='mt-3 pb-5 ps-5 d-flex gap-5 justify-content-center'>
          {realties.slice(0, 4).map(item => <CardRealtySmall key={item.id} {...item} />)}
        </div>
      </div>
    </section>
  )
}
