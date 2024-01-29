import { NavLink } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import { useTranslation } from 'react-i18next'
import { generateTranslationKey } from '../../utils/i18nUtils'
import { REALTY_ROUTE } from '../../utils/consts'
import noImage from '../../assets/img/noImage.webp'

export function CardRealtySmall(props) {
  const { realty_images, price, id } = props
  const { t, i18n } = useTranslation()

  const titleKey = generateTranslationKey('title', i18n.language)

  const renderCard = () => {
    if (realty_images && realty_images.length > 0) {
      const firstImage = realty_images[0];
      return (
        <NavLink
        to={`${REALTY_ROUTE}/selected/${id}`}
        className="card-link" >
          <Card className="custom-card">
            <Card.Img
              variant="top"
              src={import.meta.env.VITE_REACT_APP_API_URL + firstImage.imageUrl}
              alt="Картинка недвижимости маленькая"
              className='custom-card__img' />
            <Card.Body>
              <Card.Title
              className='custom-card__title'>{t(props[titleKey])}</Card.Title>
              <Card.Text
              className='custom-card__text'>
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
              <Card.Title>{t(props[titleKey])}</Card.Title>
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
