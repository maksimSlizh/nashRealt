import { Carousel } from 'react-bootstrap';

export function CardOneRealty({ id, title, description, price, area, rooms, floor, realty_images }) {
  return (
    <section className='mt-5'>
      <div className="container">
        <h2>{title}</h2>
        <div className='mt-4'>
          {realty_images && realty_images.length > 0 && (
            <Carousel>
              {realty_images.map((image, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={import.meta.env.VITE_REACT_APP_API_URL + image.imageUrl}
                    alt={`Image ${index + 1}`}
                    style={{ objectFit: 'cover', maxHeight: '60vh' }}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          )}
        </div>
        <hr className='mt-2' />
        <p className='pt-2'>{description}</p>
      </div>
    </section>
  );
}
