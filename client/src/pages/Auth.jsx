import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { setUser, setIsAuth } from '../redux/userSlice'
import { PREW_ROUTE, REGISTRATION_ROUTE, LOGIN_ROUTE } from '../utils/consts'
import { login, registration } from '../http/userApi'


export function Auth() {
  const dispatch = useDispatch()
  const location = useLocation()
  const navigate = useNavigate()
  const isLogin = location.pathname === LOGIN_ROUTE
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { t } = useTranslation()

  const click = async (e) => {
    e.preventDefault()
    try {
      let data
      if (isLogin) {
        data = await login(email, password)
      } else {
        data = await registration(email, password)
      }

      dispatch(setUser(data))
      dispatch(setIsAuth(true))
      navigate(PREW_ROUTE)
    } catch (e) {
      alert(e.response.data.message)
    }


  }
  return (
    <section className='mt-4'>
      <div className="container">
        <NavLink
        to={PREW_ROUTE}
        style={{ textDecoration: 'none'}}
        >{t('auth.link')}</NavLink>
        <h2 className='mt-5 mb-3'>{isLogin ? `${t('auth.login')}` : `${t('auth.register')}`}</h2>
        <form className='auth-form' >
          <div className="mb-3">
            <label className="form-label">{t('auth.email')}</label>
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              value={email}
              onChange={e => setEmail(e.target.value)} />
            <div id="emailHelp" className="form-text">{t('auth.emailinfo')}</div>
          </div>
          <div className="mb-3">
            <label className="form-label">{t('auth.password')}</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={e => setPassword(e.target.value)} />
          </div>
          {isLogin ?
            <p>{t('auth.ifnoaccount')}  <NavLink
              to={REGISTRATION_ROUTE}
              className='hover-effect' >{t('auth.registerlink')}</NavLink>
            </p> :
            <p>
              {t('auth.ifhasaccount')} <NavLink
                to={LOGIN_ROUTE}
                className='hover-effect' >{t('auth.loginlink')}</NavLink>
            </p>}

          <button
            type="submit"
            className="btn btn-primary align-self-end"
            onClick={click}
          >{isLogin ? `${t('auth.login')}` : `${t('auth.send')}`}</button>

        </form>
      </div>
    </section>
  )
}
