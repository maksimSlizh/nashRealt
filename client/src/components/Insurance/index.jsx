import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { CardInsuranceSmall } from '../Cards/CardInsuranceSmall'
import { INSURANCES_ROUTE } from '../../utils/consts'
import Carousel from 'react-bootstrap/Carousel'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { calculateItemsToDisplayInsurance } from "../../helpers"

export function InsuranceComponent({ data: insurance = [] }) {
  const { t } = useTranslation()
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const cardsPerSlide = calculateItemsToDisplayInsurance(windowWidth)
  const carouselRef = React.createRef()

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


  // Разбиваем массив карточек на группы
  const groupedInsurance = [];
  for (let i = 0; i < insurance.length; i += cardsPerSlide) {
    groupedInsurance.push(insurance.slice(i, i + cardsPerSlide))
  }

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.prev()
    }
  }

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next()
    }
  }

  const useBootstrapCarousel = windowWidth < 600

  return (
    <section className="bg-light prew-insurance">
      <div className="container">
        <div className="prew__header">
          <h3 className="prew__title-small">{t('insurance.title')}</h3>
          <NavLink
            className="prew-link"
            to={INSURANCES_ROUTE}>
            {t('insurance.readall')}
          </NavLink>
        </div>
        <p className='prew-realty__text'>{t('insurance.text')}<br />{t('insurance.text2')}</p>

        <div className="bg-white prew-insurance__body">
          {useBootstrapCarousel ? (
            // Используем стандартную карусель Bootstrap
            <div className='d-flex flex-column ms-auto me-auto'>
              <div className=''>
                <Carousel
                  style={{ width: '12rem' }}
                  ref={carouselRef}
                  interval={null}
                  indicators={false}
                  controls={false}>
                  {insurance.map((item) => (
                    <Carousel.Item key={item._id} className="mt-5">
                      <div className="slider__container">
                        <CardInsuranceSmall {...item} />
                      </div>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
              <div className='prew-insurance__buttons'>
                <div className='ms-5 d-flex align-items-center pe-4'>
                  <button
                    className='slider__button'
                    onClick={handlePrev}>
                    <IoIosArrowBack
                      className='slider__icon'
                    />
                  </button>
                </div>
                <div className='d-flex align-items-center pe-5'>
                  <button
                    className='slider__button'
                    onClick={handleNext}
                  >
                    <IoIosArrowForward className='slider__icon' />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className='prew-insurance__buttons'>
                <div className='ms-5 d-flex align-items-center pe-4'>
                  <button
                    className='slider__button'
                    onClick={handlePrev}>
                    <IoIosArrowBack
                      className='slider__icon'
                    />
                  </button>
                </div>
                <div className='d-flex align-items-center pe-5'>
                  <button
                    className='slider__button'
                    onClick={handleNext}
                  >
                    <IoIosArrowForward className='slider__icon' />
                  </button>
                </div>
              </div>
              <div className='prew-insurance__list'>
                <Carousel
                  interval={null}
                  indicators={false}
                  className='ps-2 pe-2'
                  controls={false}
                  ref={carouselRef}>
                  {groupedInsurance.map((group, index) => (
                    <Carousel.Item key={index} className='mt-5'>
                      <div className="slider__container" >
                        {group.map((item) => (
                          <CardInsuranceSmall key={item._id} {...item} />
                        ))}
                      </div>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
            </>)}
        </div>
      </div>
    </section>
  )
}
