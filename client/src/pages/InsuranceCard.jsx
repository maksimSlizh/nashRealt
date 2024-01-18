import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import {fetchOneInsurance} from '../redux/insuranceSlice'
import { CardOne } from '../components/Cards/CardOne'

export function InsuranceCard() {
  const { oneInsurance } = useSelector(state => state.insurance)
  const { id } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchOneInsurance(id))
  }, [dispatch, id])


  return (
    <CardOne {...oneInsurance} />
  )
}
