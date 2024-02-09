// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button } from 'react-bootstrap';

function AppNavbar() {  
  return (
    
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/ProductList">
        Products
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/Cart">
            🛒 Cart
          </Nav.Link>
          <Nav.Link as={Link} to="/Favorites">
            Favorites
          </Nav.Link>
        </Nav>
        <div className="ms-auto">
          <Button as={Link} to="/SignUp" variant="outline-light">
            Registration
          </Button>
          <Button as={Link} to="/Login" variant="outline-light">
            Login 📥
          </Button>
        </div>
        
      </Navbar.Collapse>
    </Navbar>
    
  );
}

export default AppNavbar;
