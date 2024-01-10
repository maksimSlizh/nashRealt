import { NavLink} from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import { NEWS_ROUTE } from '../../utils/consts'

export function CardNewsSmall(props) {
  return (
    <NavLink to={`${NEWS_ROUTE}/selected/${props.id}`} style={{ textDecoration: 'none' }} >
      <Card className="mt-5" style={{ width: '18rem', height: '18rem' }}>
        <Card.Img
          variant="top"
          src={import.meta.env.VITE_REACT_APP_API_URL + props.img} style={{ height: '10rem', objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.description}
          </Card.Text>
        </Card.Body>
      </Card>
    </NavLink>
  )
}
