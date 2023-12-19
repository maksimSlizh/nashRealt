import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/img/logo.jpg'
import { CONTACTS_ROUTE, INSURENCES_ROUTE, NEWS_ROUTE, PREW_ROUTE, REALTY_ROUTE } from '../../utils/consts'

export function Navbar() {
  const { isAuth, user } = useSelector(state => state.user)
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid d-flex ">
          <NavLink to={PREW_ROUTE}>
            <img src={logo} alt="logo" style={{ width: '50px', height: 'auto' }} />
          </NavLink>
          <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavDropdown">
            {isAuth ?
              <>
              <ul className="navbar-nav ">
              <li className="nav-item">
                <NavLink className="nav-link active" to={PREW_ROUTE}>Main</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={NEWS_ROUTE}>News</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={INSURENCES_ROUTE}>
                  Insurance</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to={REALTY_ROUTE} >Realty</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to={CONTACTS_ROUTE} >Contacts</NavLink>
              </li>
            </ul>
            <button className="btn btn-outline-success" type="submit">Admin</button>
            <button className="btn btn-outline-success" type="submit">Sign up</button>
            </>
            :
            <>
            <ul className="navbar-nav ">
              <li className="nav-item">
                <NavLink className="nav-link active" to={PREW_ROUTE}>Main</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={NEWS_ROUTE}>News</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={INSURENCES_ROUTE}>
                  Insurance</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to={REALTY_ROUTE} >Realty</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to={CONTACTS_ROUTE} >Contacts</NavLink>
              </li>
            </ul>
            <button className="btn btn-outline-success" type="submit">Sign in</button>
            </>
            }
          </div>
        </div>
      </nav>
    </header>
  )
}