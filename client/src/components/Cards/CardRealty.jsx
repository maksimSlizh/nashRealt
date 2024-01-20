import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { deleteRealty } from '../../http/realtyApi'
import { fetchRealties } from '../../redux/realtySlice'
import { jwtDecode } from 'jwt-decode'
import { useTranslation } from 'react-i18next'
import { generateTranslationKey } from '../../utils/i18nUtils'
import { REALTY_ROUTE } from '../../utils/consts'
import { Card } from 'react-bootstrap'
import noImage from '../../assets/img/noImage.jpg'

export function CardRealty(props) {
  const { realty_images, price, id } = props
  const { isAuth } = useSelector(state => state.user)
  const dispatch = useDispatch()

  const { t, i18n } = useTranslation()

  const titleKey = generateTranslationKey('title', i18n.language)

  let userRole = ''
  const token = localStorage.getItem('token')

  if (token) {
    const decodedToken = jwtDecode(token)
    userRole = decodedToken.role
  }

  const handleDelete = async (id) => {
    try {
      await deleteRealty(id);
      dispatch(fetchRealties({ page: 1 }))
    } catch (error) {
      // Обработка ошибок
    }
  }

  const renderCard = () => {
    if (realty_images && realty_images.length > 0) {
      const firstImage = realty_images[0];
      return (
        <NavLink
        to={`${REALTY_ROUTE}/selected/${id}`}
        className="card-link" >
          <Card className="" style={{ width: '100%' }}>
            <Card.Img
              variant="top"
              src={import.meta.env.VITE_REACT_APP_API_URL + firstImage.imageUrl} style={{ height: '10rem', objectFit: 'cover' }} />
            <Card.Body>
              <Card.Title>{t(props[titleKey])}</Card.Title>
              <Card.Text>
                {price}
              </Card.Text>
              {isAuth && userRole === 'ADMIN' &&
              <button
              className='btn btn-danger card-link__delete'
              onClick={() => handleDelete(id)}>Удалить</button>}
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
              {isAuth && userRole === 'ADMIN' && <button className='btn btn-danger' onClick={() => handleDelete(id)}>Удалить</button>}
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
