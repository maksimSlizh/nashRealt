import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { deleteNews } from '../../http/newsApi'
import { fetchNews } from '../../redux/newsSlice'
import { jwtDecode } from 'jwt-decode'
import { NEWS_ROUTE } from '../../utils/consts'
import { useTranslation } from 'react-i18next'
import { generateTranslationKey } from '../../utils/i18nUtils'

export function CardNews(props) {
  const { isAuth } = useSelector(state => state.user)
  const dispatch = useDispatch()
  const { t, i18n } = useTranslation();

  const titleKey = generateTranslationKey('title', i18n.language);
  const descriptionKey = generateTranslationKey('description', i18n.language);

  let userRole = ''
  const token = localStorage.getItem('token')

  if (token) {
    const decodedToken = jwtDecode(token)
    userRole = decodedToken.role
  }

  const handleDelete = async (id) => {
    try {
      await deleteNews(id);
      dispatch(fetchNews({ page: 1 }))
    } catch (error) {
      // Обработка ошибок
    }
  }

  return (
    <NavLink to={NEWS_ROUTE + '/selected' + '/' + props.id} className="card-link">
      <div className="card" style={{ width: '100%' }}>
        <img src={import.meta.env.VITE_REACT_APP_API_URL + props.img} className="card-img-top" alt="..." style={{ height: '10rem', objectFit: 'cover' }} />
        <div className="card-body d-flex flex-column justify-content-between">
          <h5 className="card-title">{t(props[titleKey])}</h5>
          <p className="card-text">{t(props[descriptionKey])}</p>
          <div className='mt-auto d-flex'>
            {isAuth && userRole === 'ADMIN' && ( // Проверка на аутентификацию и роль "admin"
              <button className="btn btn-danger card-link__delete" onClick={() => handleDelete(props.id)}>
                Delete
              </button>
            )}
          </div>
        </div>
      </div>
    </NavLink>
  )
}
