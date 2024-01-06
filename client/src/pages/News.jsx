import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { CardNews } from '../components/Cards/CardNews'
import { fetchNews } from '../redux/newsSlice'

export function News() {
  const { news } = useSelector(state => state.news)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchNews())
  }, [dispatch])
  return (
    <div>
      <h1>News</h1>
      <div className='d-flex justify-content-between align-items-center flex-column'> {news.map(el => {
        return <CardNews key={el.id} {...el} />
      })} </div>

    </div>
  )
}
