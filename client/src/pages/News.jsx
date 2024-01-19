import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { CardNews } from '../components/Cards/CardNews'
import { fetchNews } from '../redux/newsSlice'
import { Pages } from '../components/Pages'
import { useParams } from 'react-router-dom'

export function News() {
  const { news, totalCount, limit } = useSelector(state => state.news)
  const { page } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchNews({ page }))
  }, [dispatch, page])

  useEffect(() => {
    dispatch(fetchNews({ page }))
  }, [dispatch])

  return (
    <section className="" >
      <div
      className='container mt-5 d-flex flex-column justify-content-between'
      style={{ minHeight: 'calc(100vh - 118px)' }}>
        <div>
          <h1>Новости</h1>
          <div className='mt-4 mb-5 card-grid'>
            {news.map(el => {
              return <CardNews key={el.id} {...el} />
            })}
          </div>
        </div>
        <div className='mb-3'>
          <Pages currentPage={parseInt(page || 1)} totalCount={totalCount} limit={limit} resource={'news'} />
        </div>
      </div>
    </section>
  )
}
