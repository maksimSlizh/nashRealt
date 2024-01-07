import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { CardNews } from '../components/Cards/CardNews'
import { fetchNews } from '../redux/newsSlice'
import { Pages } from '../components/Pages'
import { useParams } from 'react-router-dom'

export function News() {
  const { news } = useSelector(state => state.news)
  const { page } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchNews({ page }))
  }, [dispatch, page])

  useEffect(() => {
    dispatch(fetchNews({ page }))
  }, [dispatch])

  return (
    <div>
      <h1>News</h1>
      <div className='d-flex justify-content-between align-items-center flex-column'> {news.map(el => {
        return <CardNews key={el.id} {...el} />
      })} </div>
      <Pages currentPage={parseInt(page || 1)} />
    </div>
  )
}
