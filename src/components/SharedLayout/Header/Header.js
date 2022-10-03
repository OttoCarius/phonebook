import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import { AuthNav } from '../../UserMenu/AuthMenu';
import { UserMenu } from '../../UserMenu/UserMenu';

export default function Header() {
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

              <Nav.Link as={NavLink} to="/contacts">
                Contacts
              </Nav.Link>
            </Nav>
            <Nav>
              <UserMenu /> <AuthNav />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
