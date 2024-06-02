import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { deleteRealty } from '../../http/realtyApi'
import { fetchRealties } from '../../redux/realtySlice'
import { useTranslation } from 'react-i18next'
import { generateTranslationKey } from '../../utils/i18nUtils'
import { REALTY_ROUTE } from '../../utils/consts'
import { Card } from 'react-bootstrap'
import noImage from '../../assets/img/noImage.webp'

export function CardRealty(props = []) {
  const { isAuth, user } = useSelector(state => state.user)
  const dispatch = useDispatch()

  const { t, i18n } = useTranslation()

  const titleKey = generateTranslationKey('title', i18n.language)

  const handleDelete = async (id) => {
    try {
      await deleteRealty(id);
      dispatch(fetchRealties({ page: 1 }))
    } catch (error) {
      // Обработка ошибок
    }
  }

  const renderCard = () => {
    if (props.images && props.images.length > 0) {
      const firstImage = props.images[0];
      return (
        <NavLink
        to={`${REALTY_ROUTE}/selected/${props._id}`}
        className="card-link wide-card" >
          <Card className="custom-card__big">
            <Card.Img
              variant="top"
              src={firstImage}
              alt="Картинка недвижимости"
              className='realty__img-card' />
            <Card.Body>
              <Card.Title className="custom-card__title">{t(props[titleKey])}</Card.Title>
              <Card.Text className="custom-card__text">
                {props.price}
              </Card.Text>
              {isAuth && user.role === 'ADMIN' &&
              <button
              className='btn btn-danger card-link__delete'
              onClick={() => handleDelete(props._id)}>Удалить</button>}
            </Card.Body>
          </Card>
        </NavLink>
      )
    }
    else {
      return (
        <NavLink to={`${REALTY_ROUTE}/selected/${props._id}`} style={{ textDecoration: 'none' }} >
          <Card className="mt-5" style={{ width: '18rem', height: '18rem' }}>
            <Card.Img
              variant="top"
              src={noImage} style={{ height: '10rem', objectFit: 'cover' }} />
            <Card.Body>
              <Card.Title>{t(props[titleKey])}</Card.Title>
              <Card.Text>
                {props.price}
              </Card.Text>
              {isAuth && userRole === 'ADMIN' && <button className='btn btn-danger' onClick={() => handleDelete(props._id)}>Удалить</button>}
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
