import React from 'react';
import { NavLink } from 'react-router-dom';
import { CardInsuranceSmall } from '../Cards/CardInsuranceSmall';
import { INSURANCES_ROUTE } from '../../utils/consts';
import Carousel from 'react-bootstrap/Carousel';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export function InsuranceComponent({ data: insurance }) {
  const cardsPerSlide = 3;

  // Разбиваем массив карточек на группы по 3
  const groupedInsurance = [];
  for (let i = 0; i < insurance.length; i += cardsPerSlide) {
    groupedInsurance.push(insurance.slice(i, i + cardsPerSlide));
  }

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  const carouselRef = React.createRef();

  return (
    <section className="bg-light pb-5">
      <div className="container">
        <div className="d-flex align-items-center pt-4 ps-5 pb-4">
          <h3 className="text-center pe-5">Страхование</h3>
          <NavLink to={INSURANCES_ROUTE} style={{ textDecoration: 'none' }}>
            Читать все
          </NavLink>
        </div>

        <div className="mt-4 pb-5 d-flex bg-white">
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
          <div className='d-flex'>
            <Carousel
              interval={null}
              indicators={false}
              className='ps-2 pe-2'
              controls={false}
              ref={carouselRef}>
              {groupedInsurance.map((group, index) => (
                <Carousel.Item key={index} className='mt-5'>
                  <div className="d-flex gap-5 slider__countainer">
                    {group.map((item) => (
                      <CardInsuranceSmall key={item.id} {...item} />
                    ))}
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
