import { NavLink, useLocation } from 'react-router-dom'
import { PREW_ROUTE, REGISTRATION_ROUTE, LOGIN_ROUTE } from '../utils/consts'

export function Auth() {
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE
  console.log(location)
  return (
    <>
      <div className="container">
        <NavLink to={PREW_ROUTE}>Back to home</NavLink>
        <h2>{isLogin ? 'Login' : 'Registration'}</h2>
        <form className='d-flex flex-column ms-auto me-auto p-4 border border-black ' style={{ width: '500px' }}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" />
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

            <button type="submit" className="btn btn-primary align-self-end">{isLogin ? 'Login' : 'Registration'}</button>

        </form>
      </div>
    </>
  )
}
