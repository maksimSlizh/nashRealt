import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { deleteNews } from '../../http/newsApi'
import { fetchNews } from '../../redux/newsSlice'
import { jwtDecode } from 'jwt-decode'
import { NEWS_ROUTE } from '../../utils/consts'

export function CardNews(props) {
  const { isAuth } = useSelector(state => state.user)
  const dispatch = useDispatch()

  const token = localStorage.getItem('token')
  const decodedToken = jwtDecode(token)
  const userRole = decodedToken.role

  const handleDelete = async (id) => {
    try {
      await deleteNews(id);
      dispatch(fetchNews({ page: 1 }))
    } catch (error) {
      // Обработка ошибок
    }
  }

  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={import.meta.env.VITE_REACT_APP_API_URL + props.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <NavLink to={NEWS_ROUTE + '/selected' + '/' + props.id} className="btn btn-primary">Go somewhere</NavLink>
        {isAuth && userRole === 'ADMIN' && ( // Проверка на аутентификацию и роль "admin"
          <button className="btn btn-danger" onClick={() => handleDelete(props.id)}>
            Delete
          </button>
        )}
      </div>
    </div>
  )
}
