import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">EmployeeApp</Navbar.Brand>

        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/dashboard">Home</Nav.Link>
          <Nav.Link as={Link} to="/add">Add Employee</Nav.Link>
          <Nav.Link as={Link} to="/employees">Employee List</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
