import { NavLink} from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import { INSURANCES_ROUTE } from '../../utils/consts'

export function CardInsuranceSmall(props) {
  return (
    <NavLink
    to={`${INSURANCES_ROUTE}/selected/${props.id}`}
    className="card-link">
      <Card className="" style={{ width: '18rem', height: '18rem' }}>
        <Card.Img
          variant="top"
          src={import.meta.env.VITE_REACT_APP_API_URL + props.img}
          style={{ height: '10rem', objectFit: 'cover' }}
          draggable="false"
        />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
        </Card.Body>
      </Card>
    </NavLink>
  );
}
