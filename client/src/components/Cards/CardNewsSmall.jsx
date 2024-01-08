import {useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import {NEWS_ROUTE} from '../../utils/consts'

export function CardNewsSmall (props) {
  const navigate = useNavigate()
  return (
    <Card style={{ width: '12rem' }}>
      <Card.Img
      variant="top"
      src={import.meta.env.VITE_REACT_APP_API_URL + props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Button
        variant="primary"
        onClick={() => navigate(NEWS_ROUTE + '/selected' + '/' + props.id)} >Read more</Button>
      </Card.Body>
    </Card>
  )
}
