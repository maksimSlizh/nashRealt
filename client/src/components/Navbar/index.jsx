import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'
import { setIsAuth, setUser } from '../../redux/userSlice'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from '../LanguageSwitcher'
import logo from '../../assets/img/logo.webp'
import {
  CONTACTS_ROUTE,
  INSURANCES_ROUTE,
  NEWS_ROUTE,
  PREW_ROUTE,
  REALTY_ROUTE,
  ADMIN_ROUTE,
  LOGIN_ROUTE,
  ABOUT_ROUTE
} from '../../utils/consts'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { usePaginationClick } from '../../hooks/usePaginationClick'
import Cookies from 'js-cookie'

export function NavbarComponent() {
  const { isAuth, user } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const [showOffcanvas, setShowOffcanvas] = useState(false)
  const { t } = useTranslation()
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 576)
  const { isPaginationItemClicked, setPaginationItemClicked } = usePaginationClick()

  useEffect(() => {
    const token = Cookies.get('token')
    if (token) {
      try {
        const decodedToken = jwtDecode(token)
        dispatch(setUser(decodedToken))
        dispatch(setIsAuth(true))
      } catch (error) {
        console.error('Invalid token', error)
        // Обработка ошибки или выход пользователя
      }
    }
  }, [dispatch])

  const closeOffcanvas = () => {
    setShowOffcanvas(false);
  }

  const handleOutsideClick = (event) => {
    if (showOffcanvas && !event.target.closest('.navbar')) {
      setShowOffcanvas(false)
    }
  };

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth < 576)
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick)
    window.addEventListener('resize', handleResize)

    return () => {
      document.removeEventListener('click', handleOutsideClick)
      window.removeEventListener('resize', handleResize)
    };
  }, [showOffcanvas])

  useEffect(() => {
    const handlePaginationItemClick = (event) => {
      const isPaginationItem = event.target.closest('.page-link')

      if (isPaginationItem) {
        setPaginationItemClicked(true)
      }
    }

    document.addEventListener('click', handlePaginationItemClick)

    return () => {
      document.removeEventListener('click', handlePaginationItemClick)
    }
  }, [setPaginationItemClicked])

  useEffect(() => {
    if (!isPaginationItemClicked) {
      window.scrollTo(0, 0)
    }
  }, [isPaginationItemClicked, location.pathname])

  function logOut() {
    Cookies.remove('token')
    dispatch(setUser({}))
    dispatch(setIsAuth(false))
    navigate(PREW_ROUTE)
    closeOffcanvas()
  }

  return (
    <Navbar expand="lg" fixed="top" className="mb-5 custom-navbar">
      <Container>
        <Navbar.Brand as={NavLink} to={PREW_ROUTE}>
          <img src={logo} alt="logo" style={{ width: '50px', height: 'auto' }} />
        </Navbar.Brand>
        {!isSmallScreen && <LanguageSwitcher />}
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setShowOffcanvas(!showOffcanvas)} />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" in={showOffcanvas}>
          <Nav className="ml-auto">
            {isSmallScreen && <LanguageSwitcher />}
            <Nav.Link as={NavLink} to={PREW_ROUTE} className="nav-link custom-navbar__link" onClick={closeOffcanvas}>
              {t('navbar.home')}
            </Nav.Link>
            <Nav.Link as={NavLink} to={ABOUT_ROUTE} className="nav-link custom-navbar__link" onClick={closeOffcanvas}>
              {t('navbar.about')}
            </Nav.Link>
            <Nav.Link as={NavLink} to={`${NEWS_ROUTE}/1`} className="nav-link custom-navbar__link" onClick={closeOffcanvas}>
              {t('navbar.news')}
            </Nav.Link>
            <Nav.Link as={NavLink} to={INSURANCES_ROUTE} className="nav-link custom-navbar__link" onClick={closeOffcanvas}>
              {t('navbar.insurance')}
            </Nav.Link>
            <Nav.Link as={NavLink} to={`${REALTY_ROUTE}/1`} className="nav-link custom-navbar__link" onClick={closeOffcanvas}>
              {t('navbar.realty')}
            </Nav.Link>
            <Nav.Link as={NavLink} to={CONTACTS_ROUTE} className="nav-link custom-navbar__link" onClick={closeOffcanvas}>
              {t('navbar.contacts')}
            </Nav.Link>
            {isAuth && user.role === 'ADMIN' && (
              <Nav.Link as={NavLink} to={ADMIN_ROUTE} className=" nav-link custom-navbar__link" onClick={closeOffcanvas}>
                Admin
              </Nav.Link>
            )}
            {isAuth ? (
              <Button variant="outline-success ms-1" onClick={logOut} className="custom-button">
                {t('navbar.logout')}
              </Button>
            ) : (
              <Button
                variant="outline-success ms-1"
                as={NavLink}
                to={LOGIN_ROUTE}
                onClick={closeOffcanvas}
                className="custom-button"
              >
                {t('navbar.login')}
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
