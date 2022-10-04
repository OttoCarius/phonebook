import { Navbar, Container, Nav } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import authSelectors from '../../../redux/auth/authSelectors';
import { NavLink, Link } from 'react-router-dom';
import { AuthNav } from '../../UserMenu/AuthMenu';
import { UserMenu } from '../../UserMenu/UserMenu';

const Header = () => {
  const user = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Phonebook
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="navbar-collapse collapse justify-content-between"
          >
            <Nav>
              <Nav.Link active as={NavLink} to="/" end>
                Home
              </Nav.Link>
              {user && (
                <Nav.Link as={NavLink} to="/contacts">
                  Contacts
                </Nav.Link>
              )}
            </Nav>
            <Nav>{user ? <UserMenu /> : <AuthNav />}</Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
