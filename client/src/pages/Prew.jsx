import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchRealties } from '../redux/realtySlice'
import { PrewComponent } from '../components/Prew'
import { NewsComponent } from '../components/News'
import { InsuranceComponent } from '../components/Insurance'
import { RealtyComponent } from '../components/Realty'
import { ContactsComponent } from '../components/Contacts'

export function Prew() {
  const dispatch = useDispatch()
  const { news } = useSelector(state => state.news)
  const { insurance } = useSelector(state => state.insurance)
  const { realties } = useSelector(state => state.realty)

  useEffect(() => {
    dispatch(fetchRealties())
  }, [])
  return (
    <>
      <PrewComponent />
      <NewsComponent data={news} />
      <InsuranceComponent data={insurance} />
      <RealtyComponent data={realties} />
      <ContactsComponent />
      <footer className='mt-2 ms-3'>
        <div className='container text-center'>
          <p>&copy; 2024. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
