import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { CardRealties } from '../components/Cards/CardRealties'
import { fetchRealties } from '../redux/realtySlice'
import { Pages } from '../components/Pages'
import { useParams } from 'react-router-dom'

export function Realty() {

  const { realties } = useSelector(state => state.realty)
  const { page } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchRealties({ page }))
  }, [dispatch, page])

  useEffect(() => {
    dispatch(fetchRealties({ page }))
  }, [dispatch])
  return (
    <div>
      <h1>Realty</h1>
      <div className='d-flex flex-column'> {realties.map(el => {
        return <CardRealties key={el.id} {...el} />
      })} </div>
      <Pages currentPage={parseInt(page || 1)} />
    </div>
  )
}
