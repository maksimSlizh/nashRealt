import { useState } from 'react'
import { Carousel } from 'react-bootstrap'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { useTranslation } from 'react-i18next'
import { generateTranslationKey } from '../../utils/i18nUtils'

export function CardOneRealty(props) {
  const {  realty = [] } = props
  const { t, i18n } = useTranslation()

  const titleKey = generateTranslationKey('title', i18n.language)
  const descriptionKey = generateTranslationKey('description', i18n.language)
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex)
  }

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % (realty.images.length || 1))
  }

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + (realty.images.length || 1)) % (realty.images.length || 1))
  };

  return (
    <section className='one-realty'>
      <div className="container">
        <h2 className='one-realty__title'>{t(realty[titleKey])}</h2>
        <div className='one-realty__content'>
          <div className='one-realty__item'>
            <p>{t('realty.addres')} {realty.address}</p>
            <p>{t('realty.price')} {realty.price} zł</p>
            <p>{t('realty.area')} {realty.area} м<sup>2</sup></p>
            <p>{t('realty.rooms')} {realty.rooms}</p>
            <p>{t('realty.floor')} {realty.floor}</p>
          </div>
          <div className='one-realty__item'>
            {realty.images && realty.images.length > 0 && (
              <Carousel activeIndex={activeIndex} onSelect={handleSelect} controls={false}>
                {realty.images.map((image, index) => (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100 one-realty__image"
                      src={image}
                      alt={`Image ${index + 1}`}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            )}
            {realty.images && realty.images.length > 1 && (
              <div className="d-flex mt-2 gap-4 justify-content-center">
                <button onClick={prevSlide} className='slider__button'>
                <IoIosArrowBack className='slider__icon' />
                </button>
                <button onClick={nextSlide} className='slider__button'>
                <IoIosArrowForward className='slider__icon' />
                </button>
              </div>
            )}
          </div>
        </div>
        <hr className='pt-2' />
        <p className='card-one__text pt-2' >{t(realty[descriptionKey])}</p>
      </div>
    </section>
  )
}
