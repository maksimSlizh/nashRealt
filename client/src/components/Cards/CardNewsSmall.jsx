import { NavLink } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import { useTranslation } from 'react-i18next'
import { generateTranslationKey } from '../../utils/i18nUtils'
import { NEWS_ROUTE } from '../../utils/consts'

export function CardNewsSmall(props) {
  const { t, i18n } = useTranslation();

  const titleKey = generateTranslationKey('title', i18n.language);
  const descriptionKey = generateTranslationKey('description', i18n.language);

  return (
    <NavLink
      to={`${NEWS_ROUTE}/selected/${props.id}`}
      className="card-link" >
      <Card className="custom-card">
        <Card.Img
          variant="top"
          src={import.meta.env.VITE_REACT_APP_API_URL + props.img} className='custom-card__img' />
        <Card.Body>
          <Card.Title
          className='custom-card__title'>{t(props[titleKey])}</Card.Title>
          <Card.Text
          className='custom-card__text'>
            {t(props[descriptionKey])}
          </Card.Text>
        </Card.Body>
      </Card>
    </NavLink>
  )
}
