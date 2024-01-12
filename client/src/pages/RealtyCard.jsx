import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchOneRealty } from '../redux/realtySlice'
import { CardOneRealty } from '../components/Cards/CardOneRealty'

export function RealtyCard() {
  const { oneRealty } = useSelector(state => state.realty)
  const { id } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchOneRealty(id))
  }, [dispatch, id])


  return (
    <CardOneRealty {...oneRealty} />
  )
}
