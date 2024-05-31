import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { CardNewsSmall } from '../Cards/CardNewsSmall'
import { NEWS_ROUTE } from '../../utils/consts'
import {calculateItemsToDisplay } from '../../helpers'

export function NewsComponent({ data: news = [] }) {
  const { t } = useTranslation()

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  // Добавьте слушатель события изменения размера окна при монтировании компонента
  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Используйте windowWidth для определения количества элементов для отображения
  const itemsToDisplay = calculateItemsToDisplay(windowWidth)

  return (
    <section className="prew-news bg-light">
      <div className='container'>
        <div className='prew__header'>
          <h3 className='prew__title-small'>{t('prew.newstitle')}</h3>
          <NavLink
          to={`${NEWS_ROUTE}/1`}
          className='prew-link'>{t('prew.newslink')}</NavLink>
        </div>
        <div className='prew-news__list bg-white'>
        {news.slice(0, itemsToDisplay).map(item => <CardNewsSmall key={item._id} {...item} />)}
        </div>
      </div>
    </section>
  )
}
