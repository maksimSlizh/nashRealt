import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchNews } from '../redux/newsSlice'
import { fetchRealties } from '../redux/realtySlice'
import prew from '../assets/img/prew.webp'
import { NewsComponent } from '../components/News'
import { InsuranceComponent } from '../components/Insurance'
import { RealtyComponent } from '../components/Realty'
import { ContactsComponent } from '../components/Contacts'

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
      <ContactsComponent />
      <footer className='text-center mt-2'>
        <p>&copy; 2024. All rights reserved.</p>
      </footer>
    </>
  )
}
