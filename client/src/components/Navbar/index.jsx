import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { setIsAuth, setUser } from '../../redux/userSlice';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../LanguageSwitcher';
import logo from '../../assets/img/logo.jpg';
import {
  CONTACTS_ROUTE,
  INSURANCES_ROUTE,
  NEWS_ROUTE,
  PREW_ROUTE,
  REALTY_ROUTE,
  ADMIN_ROUTE,
  LOGIN_ROUTE,
  ABOUT_ROUTE
} from '../../utils/consts';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export function NavbarComponent() {
  const { isAuth } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const token = localStorage.getItem('token');
  const { t, i18n } = useTranslation();
  let userRole = '';

  if (token) {
    const decodedToken = jwtDecode(token);
    userRole = decodedToken.role;
  }

  const closeOffcanvas = () => {
    setShowOffcanvas(false);
  };

  const handleOutsideClick = (event) => {
    if (showOffcanvas && !event.target.closest('.navbar')) {
      setShowOffcanvas(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [showOffcanvas]);

  useEffect(() => {
    window.scrollTo(0, 0); // Прокрутка вверх при изменении маршрута
  }, [location.pathname]);

  function logOut() {
    localStorage.removeItem('token');
    dispatch(setUser({}));
    dispatch(setIsAuth(false));
    navigate(PREW_ROUTE);
    closeOffcanvas();
  }


  return (
    <Navbar expand="lg" fixed="top" className="mb-5 custom-navbar">
      <Container>
        <Navbar.Brand as={NavLink} to={PREW_ROUTE}>
          <img src={logo} alt="logo" style={{ width: '50px', height: 'auto' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setShowOffcanvas(!showOffcanvas)} />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" in={showOffcanvas}>
          <Nav>
            <Nav.Link
            as={NavLink}
            to={PREW_ROUTE}
            className="nav-link custom-navbar__link"
            onClick={closeOffcanvas}>
              {t('navbar.home')}
            </Nav.Link>
            <Nav.Link
            as={NavLink}
            to={ABOUT_ROUTE}
            className="nav-link custom-navbar__link"
            onClick={closeOffcanvas}>
              {t('navbar.about')}
            </Nav.Link>
            <Nav.Link
            as={NavLink}
            to={`${NEWS_ROUTE}/1`}
            className="nav-link custom-navbar__link"
            onClick={closeOffcanvas}>
              {t('navbar.news')}
            </Nav.Link>
            <Nav.Link
            as={NavLink}
            to={INSURANCES_ROUTE}
            className="nav-link custom-navbar__link"
            onClick={closeOffcanvas}>
              {t('navbar.insurance')}
            </Nav.Link>
            <Nav.Link
            as={NavLink}
            to={`${REALTY_ROUTE}/1`}
            className="nav-link custom-navbar__link"
            onClick={closeOffcanvas}>
              {t('navbar.realty')}
            </Nav.Link>
            <Nav.Link
            as={NavLink}
            to={CONTACTS_ROUTE}
            className="nav-link custom-navbar__link"
            onClick={closeOffcanvas}>
              {t('navbar.contacts')}
            </Nav.Link>
            <LanguageSwitcher />
            {isAuth && userRole === 'ADMIN' && (
              <Nav.Link
              as={NavLink}
              to={ADMIN_ROUTE}
              className=" nav-link custom-navbar__link"
              onClick={closeOffcanvas}>
                Admin
              </Nav.Link>
            )}
            {isAuth ? (
              <Button variant="outline-success ms-1" onClick={logOut} >
                {t('navbar.logout')}
              </Button>
            ) : (
              <Button variant="outline-success ms-1" as={NavLink} to={LOGIN_ROUTE} onClick={closeOffcanvas}>
                {t('navbar.login')}
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
