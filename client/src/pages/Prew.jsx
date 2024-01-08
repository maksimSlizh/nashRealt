import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchNews } from '../redux/newsSlice'
import prew from '../assets/img/prew.webp'
import { CardNewsSmall } from '../components/Cards/CardNewsSmall'
import Button from 'react-bootstrap/Button'
import { INSURENCES_ROUTE, REALTY_ROUTE } from '../utils/consts'

export function Prew() {
  const dispatch = useDispatch()
  const { news } = useSelector(state => state.news)
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchNews())
  }, [])
  return (
    <>
      <div className="container">
        <section className="mt-3">
          <img src={prew} alt="" className="img__prew" style={{ width: '100%', height: 'auto' }} />
        </section>
        <section className="mt-5  bg-body-secondary">
          <h3 className='pt-5 text-center'>Resent news</h3>
          <div className='mt-5 pb-5 d-flex justify-content-evenly'>
            {news.slice(0, 3).map(item => <CardNewsSmall key={item.id} {...item} />)}
          </div>
        </section>
        <section className="mt-5">
          <h3 className='text-center'>Insurance</h3>
          <p>Вы купили автомобиль в Польше. Предыдущий владелец обязан вам предоставить действующий страховой полис и в 14-дневный срок, а лучше в день продажи, сообщить в свою страховую компанию о продаже автомобиля. У нового владельца есть два варианта – остаться на действующей страховке или заключить новую. В первом случае вам придет перерасчет. Для иностранцев сумма будет гораздо выше, чем для граждан Польши. Поэтому мы рекомендуем воспользоваться вторым вариантом и обратиться к нам, чтобы рассчитать новую страховку в той компании, где стоимость будет дешевле. После заключения нового договора ОС необходимо сообщить в предыдущую страховую компанию о расторжении договора, но это за вас сделают наши сотрудники.</p>
          <Button
            variant="primary"
            onClick={() => navigate(INSURENCES_ROUTE)} >Read more</Button>
        </section>
        <section className="mt-5 bg-body-secondary">
          <h3 className='pt-5 text-center'>Realty</h3>
          <p>Оказываем весь спектр услуг по покупке и аренде жилья, офисных помещений
            ПОЛНОЕ СОПРОВОЖДЕНИЕ при покупке и аренде недвижимости от поиска до подписания договора и получения ключей</p>
          <Button
            variant="primary"
            className='mb-5'
            onClick={() => navigate(REALTY_ROUTE)} >Read more</Button>
        </section>
        <section className="mt-3">
          <h3>Contacts</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi expedita voluptas atque aspernatur quae sunt omnis, placeat tempora quas suscipit velit ipsam sint!</p>
          <a href="#">Read more</a>
        </section>
        <footer>
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">LinkedIn</a>
          <p>&copy; 2022. All rights reserved.</p>
        </footer>
      </div>
    </>
  )
}
