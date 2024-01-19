import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export function CardOneRealty(props) {
  const { title, price, area, rooms, floor, description, realty_images, address, deposit } = props;

  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setActiveIndex(selectedIndex);
  };

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % (realty_images.length || 1));
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + (realty_images.length || 1)) % (realty_images.length || 1));
  };

  return (
    <section className='mt-5'>
      <div className="container">
        <h2>{title}</h2>
        <div className='mt-4 d-flex justify-content-between'>
          <div className='w-50 d-flex flex-column mt-auto mb-auto'>
            <p>Адрес: {address}</p>
            <p>Цена: {price} ₽</p>
            <p>Площадь: {area} м<sup>2</sup></p>
            <p>Комнат: {rooms}</p>
            <p>Этаж: {floor}</p>
          </div>
          <div className='w-50'>
            {realty_images && realty_images.length > 0 && (
              <Carousel activeIndex={activeIndex} onSelect={handleSelect} controls={false}>
                {realty_images.map((image, index) => (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100"
                      src={import.meta.env.VITE_REACT_APP_API_URL + image.imageUrl}
                      alt={`Image ${index + 1}`}
                      style={{ objectFit: 'cover', height: '400px' }}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            )}
            {realty_images && realty_images.length > 1 && (
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
        <hr className='mt-2' />
        <p className='pt-2' style={{ whiteSpace: 'pre-line', wordWrap: 'break-word', textAlign: 'justify' }}>{description}</p>
      </div>
    </section>
  );
}
