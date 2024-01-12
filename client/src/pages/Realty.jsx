import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { CardRealties } from '../components/Cards/CardRealties'
import { fetchRealties } from '../redux/realtySlice'
import { Pages } from '../components/Pages'
import { useParams } from 'react-router-dom'
import agensy from '../assets/img/agensy.jpg'

export function Realty() {

  const { realties, totalCount, limit } = useSelector(state => state.realty)
  const { page } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchRealties({ page }))
  }, [dispatch, page])

  useEffect(() => {
    dispatch(fetchRealties({ page }))
  }, [dispatch])
  return (
    <section className="mt-5">
      <div className='container'>
        <h3>Агентство недвижимости NashRealt в Труймясте</h3>

        <div className='d-flex'>
          <div>
            <p>Оказываем весь спектр услуг по покупке и аренде жилья, офисных помещений
              <b> ПОЛНОЕ СОПРОВОЖДЕНИЕ</b> при покупке и аренде недвижимости от поиска до подписания договора и получения ключей:</p>
            <ul>
              <li>подбираем варианты,</li>
              <li>договариваемся о встречах,</li>
              <li>ездим с Вами на просмотры,</li>
              <li>проверяем недвижимость,</li>
              <li>разъясняем условия договора,</li>
              <li>согласовываем спорные моменты и т.д.,</li>
              <li>торгуемся,</li>
              <li>помогаем иностранцам с получением кредита и разрешения на покупку недвижимости.</li>
            </ul>
            <p>ОТДЕЛЬНЫЕ УСЛУГИ:</p>
            <ul>
              <li>закажем окказиональный договор + полное сопровождение,</li>
              <li>проверяем и переводим договор аренды (при необходимости вносим в него правки)</li>
            </ul>
            <p>Лицензия N 28352</p>
          </div>
          <img src={agensy} style={{ width: '50%' }} alt="" />
        </div>
        <h4 className='mt-5'>Предложения</h4>
        <hr />
        <div className='d-flex flex-column'> {realties.map(el => {
          return <CardRealties key={el.id} {...el} />
        })} </div>
        <Pages currentPage={parseInt(page || 1)} totalCount={totalCount} limit={limit} resource={'realty'} />
      </div>
    </section>
  )
}
