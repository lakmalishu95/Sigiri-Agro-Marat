import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../img/logo1.png'


function Navb() {
    return (
        
        <Navbar bg="dark" expand="lg">
            <Navbar.Brand href="#home"><img src={logo} width="auto" height="60px" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto" >
                <Nav.Link href="#home" style={{color:'white'}}>HOME</Nav.Link>
                <Nav.Link href="#link" style={{color:'white'}}>ABOUT US</Nav.Link>
                <Nav.Link href="#link" style={{color:'white'}}>PROJECTS</Nav.Link>
                <Nav.Link href="#link" style={{color:'white'}}>SERVICES</Nav.Link>
                <Nav.Link href="#link" style={{color:'white'}}>CONTACT US</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
     
    );
  }

  export default Navb;