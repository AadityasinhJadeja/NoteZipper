import {
  Nav,
  Navbar,
  NavDropdown,
  Container,
  Form,
  FormControl,
} from "react-bootstrap";
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg="primary" expand="lg" varient="dark" >
      <Container>
        <Navbar.Brand>
        <Link to="/" style={{color: 'black'}}>Note Zipper</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Form className="d-flex justify-content-right">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
          </Nav>
          <Nav>
            <Nav.Link href="/mynotes">
            <Link to="/mynotes" style={{color: 'black'}}>My Notes</Link>
            </Nav.Link>

            <NavDropdown title="Aadityasinh Jadeja" id="basic-nav-dropdown" style={{color: 'black'}}>
              <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
