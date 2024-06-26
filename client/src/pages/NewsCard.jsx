import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchOneNews } from '../redux/newsSlice'
import { CardOne } from '../components/Cards/CardOne'

export function NewsCard() {
  const { oneNews } = useSelector(state => state.news)
  const { id } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchOneNews(id))
  }, [dispatch, id])


  return (
    <CardOne {...oneNews} />
  )
}
