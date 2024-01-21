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
    to={`${INSURANCES_ROUTE}/selected/${props.id}`}
    className="card-link">
      <Card className="" style={{ width: '18rem', height: '18rem'}}>
        <Card.Img
          variant="top"
          src={import.meta.env.VITE_REACT_APP_API_URL + props.img}
          style={{ height: '10rem', objectFit: 'cover' }}
          draggable="false"
        />
        <Card.Body>
          <Card.Title>{t(props[titleKey])}</Card.Title>
        </Card.Body>
      </Card>
    </NavLink>
  );
}
