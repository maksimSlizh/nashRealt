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
    <section className="mt-5">
      <div className='container'>
        <h1>News</h1>
        <div className='d-flex mt-4 mb-5'>
          {news.map(el => {
            return <CardNews key={el.id} {...el} />
          })} </div>
        <Pages currentPage={parseInt(page || 1)} />
      </div>
    </section>
  )
}
