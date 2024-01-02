import { useSelector } from 'react-redux'
import { useState } from 'react'
import { CardNews } from '../components/Cards/CardNews'

export function News() {
  const { news } = useSelector(state => state.news)
  return (
    <div>
      <h1>News</h1>
      <div className='d-flex justify-content-between align-items-center'> {news.map(el => {
        return <CardNews key={el.id} {...el} />
      })} </div>

    </div>
  )
}
