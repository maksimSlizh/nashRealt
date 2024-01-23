import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { CardNews } from '../components/Cards/CardNews'
import { fetchNews } from '../redux/newsSlice'
import { Pages } from '../components/Pages'
import { useParams } from 'react-router-dom'

export function News() {
  const { news, totalCount, limit } = useSelector((state) => state.news)
  const { page } = useParams()
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const [dynamicLimit, setDynamicLimit] = useState(8) // Default limit, adjust as needed

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth
      // Calculate dynamic limit based on the screen width
      const newLimit = screenWidth < 1400 ? 6 : 8
      setDynamicLimit(newLimit)
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    dispatch(fetchNews({ page, limit: dynamicLimit }))
  }, [dispatch, page, dynamicLimit])

  return (
    <section className="" >
      <div
      className='container mt-5 d-flex flex-column justify-content-between'
      style={{ minHeight: 'calc(100vh - 118px)' }}>
        <div>
          <h1 className='title-page'>{t('news.title')}</h1>
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
