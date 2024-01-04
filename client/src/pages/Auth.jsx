import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setUser, setIsAuth } from '../redux/userSlice'
import { PREW_ROUTE, REGISTRATION_ROUTE, LOGIN_ROUTE } from '../utils/consts'
import { login, registration } from '../http/userApi'


export function Auth() {
  const { user } = useSelector(state => state.user)
  const dispatch = useDispatch()
  const location = useLocation()
  const navigate = useNavigate()
  const isLogin = location.pathname === LOGIN_ROUTE
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

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
    <>
      <div className="container">
        <NavLink to={PREW_ROUTE}>Back to home</NavLink>
        <h2>{isLogin ? 'Login' : 'Registration'}</h2>
        <form className='d-flex flex-column ms-auto me-auto p-4 border border-black ' style={{ width: '500px' }}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              value={email}
              onChange={e => setEmail(e.target.value)} />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={e => setPassword(e.target.value)} />
          </div>
          {isLogin ?
            <p>If you dont have account, you can <NavLink
              to={REGISTRATION_ROUTE}
              className='hover-effect' >sign up</NavLink>
            </p> :
            <p>
              If you already have account, you can <NavLink
                to={LOGIN_ROUTE}
                className='hover-effect' >sign in</NavLink>
            </p>}

          <button
            type="submit"
            className="btn btn-primary align-self-end"
            onClick={click}
          >{isLogin ? 'Login' : 'Registration'}</button>

        </form>
      </div>
    </>
  )
}
