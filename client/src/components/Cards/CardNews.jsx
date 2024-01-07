import { NavLink } from 'react-router-dom'
import { NEWS_ROUTE } from '../../utils/consts'

export function CardNews(props) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={import.meta.env.VITE_REACT_APP_API_URL + props.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <NavLink to={NEWS_ROUTE + '/selected' + '/' + props.id} className="btn btn-primary">Go somewhere</NavLink>
        </div>
    </div>
  )
}
