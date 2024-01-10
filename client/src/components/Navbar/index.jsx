import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { setIsAuth, setUser } from '../../redux/userSlice';
import logo from '../../assets/img/logo.jpg';
import {
  CONTACTS_ROUTE,
  INSURANCES_ROUTE,
  NEWS_ROUTE,
  PREW_ROUTE,
  REALTY_ROUTE,
  ADMIN_ROUTE,
  LOGIN_ROUTE,
} from '../../utils/consts';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export function NavbarComponent() {
  const { isAuth } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const token = localStorage.getItem('token');
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

  function logOut() {
    localStorage.removeItem('token');
    dispatch(setUser({}));
    dispatch(setIsAuth(false));
    navigate(PREW_ROUTE);
    closeOffcanvas();
  }

  return (
    <Navbar expand="lg" bg="dark" variant="dark" fixed="top" className="mb-5">
      <Container>
        <Navbar.Brand as={NavLink} to={PREW_ROUTE}>
          <img src={logo} alt="logo" style={{ width: '50px', height: 'auto' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setShowOffcanvas(!showOffcanvas)} />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" in={showOffcanvas}>
          <Nav>
            <Nav.Link as={NavLink} to={PREW_ROUTE} className="nav-link" onClick={closeOffcanvas}>
              Main
            </Nav.Link>
            <Nav.Link as={NavLink} to={`${NEWS_ROUTE}/1`} className="nav-link" onClick={closeOffcanvas}>
              News
            </Nav.Link>
            <Nav.Link as={NavLink} to={INSURANCES_ROUTE} className="nav-link" onClick={closeOffcanvas}>
              Insurance
            </Nav.Link>
            <Nav.Link as={NavLink} to={`${REALTY_ROUTE}/1`} className="nav-link" onClick={closeOffcanvas}>
              Realty
            </Nav.Link>
            <Nav.Link as={NavLink} to={CONTACTS_ROUTE} className="nav-link" onClick={closeOffcanvas}>
              Contacts
            </Nav.Link>
            {isAuth && userRole === 'ADMIN' && (
              <Nav.Link as={NavLink} to={ADMIN_ROUTE} className="nav-link" onClick={closeOffcanvas}>
                Admin
              </Nav.Link>
            )}
            {isAuth ? (
              <Button variant="outline-success" onClick={logOut} >
                Sign out
              </Button>
            ) : (
              <Button variant="outline-success" as={NavLink} to={LOGIN_ROUTE} onClick={closeOffcanvas}>
                Sign in
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
