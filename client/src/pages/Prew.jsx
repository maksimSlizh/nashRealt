import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchNews } from '../redux/newsSlice'
import { fetchRealties } from '../redux/realtySlice'
import prew from '../assets/img/prew.webp'
import { NewsComponent } from '../components/News'
import { InsuranceComponent } from '../components/Insurance'
import {RealtyComponent} from '../components/Realty'

export function Prew() {
  const dispatch = useDispatch()
  const { news } = useSelector(state => state.news)
  const { realties } = useSelector(state => state.realty)

  useEffect(() => {
    dispatch(fetchNews())
    dispatch(fetchRealties())
  }, [])
  return (
    <>
        <section className="mt-3">
        <div className='container'>
          <img src={prew} alt="" className="img__prew" style={{ width: '100%', height: 'auto' }} />
        </div>
        </section>
        <NewsComponent data={news} />
        <InsuranceComponent />
        <RealtyComponent data={realties} />
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

    </>
  )
}
