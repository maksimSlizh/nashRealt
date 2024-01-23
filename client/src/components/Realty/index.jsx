import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { REALTY_ROUTE } from '../../utils/consts'
import { CardRealtySmall } from '../Cards/CardRealtySmall'
import {calculateItemsToDisplay } from '../../helpers'

export function RealtyComponent({ data: realties }) {
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
    <section className="prew-realty">
      <div className="container">
        <div className='prew__header'>
          <h3 className='prew__title-small'>{t('realty.title')}</h3>
          <NavLink to={`${REALTY_ROUTE}/1`}
          className='prew-link'>{t('realty.readmore')}</NavLink>
        </div>
        <p className='prew-realty__text'>{t('realty.prewfirst')}
          <b> {t('realty.prewmiddle')} </b> {t('realty.prewsecond')}</p>
        <div className='prew-news__list'>
          {realties.slice(0, itemsToDisplay).map(item => <CardRealtySmall key={item.id} {...item} />)}
        </div>
      </div>
    </section>
  )
}
