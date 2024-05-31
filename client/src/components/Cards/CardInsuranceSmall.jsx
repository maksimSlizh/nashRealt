import { NavLink} from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import { INSURANCES_ROUTE } from '../../utils/consts'
import { useTranslation } from 'react-i18next'
import { generateTranslationKey } from '../../utils/i18nUtils'

export function CardInsuranceSmall(props) {

  const { t, i18n } = useTranslation()

  const titleKey = generateTranslationKey('title', i18n.language)
  return (
    <NavLink
    to={`${INSURANCES_ROUTE}/selected/${props._id}`}
    className="card-link">
      <Card className="custom-card__insurance" >
        <Card.Img
          variant="top"
          src={props.img}
          className='custom-card__img'
          alt='insurance img'
        />
        <Card.Body>
          <Card.Title
          className='custom-card__title'>{t(props[titleKey])}</Card.Title>
        </Card.Body>
      </Card>
    </NavLink>
  );
}
