import { NavLink } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import { REALTY_ROUTE } from '../../utils/consts'
import noImage from '../../assets/img/noImage.jpg'

export function CardRealtySmall({ realty_images, title, price, id }) {

  const renderCard = () => {
    if (realty_images && realty_images.length > 0) {
      const firstImage = realty_images[0];
      return (
        <NavLink to={`${REALTY_ROUTE}/selected/${id}`} style={{ textDecoration: 'none' }} >
          <Card className="mt-5" style={{ width: '18rem', height: '18rem' }}>
            <Card.Img
              variant="top"
              src={import.meta.env.VITE_REACT_APP_API_URL + firstImage.imageUrl} style={{ height: '10rem', objectFit: 'cover' }} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                {price}
              </Card.Text>
            </Card.Body>
          </Card>
        </NavLink>
      )
    }
    else {
      return (
        <NavLink to={`${REALTY_ROUTE}/selected/${id}`} style={{ textDecoration: 'none' }} >
          <Card className="mt-5" style={{ width: '18rem', height: '18rem' }}>
            <Card.Img
              variant="top"
              src={noImage} style={{ height: '10rem', objectFit: 'cover' }} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                {price}
              </Card.Text>
            </Card.Body>
          </Card>
        </NavLink>
      )
    }
  }

  return (
    renderCard()
  )
}
