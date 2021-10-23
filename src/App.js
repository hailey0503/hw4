import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//The line above imports all the necessary css files similar to the way done in html.
//Imports in React are neccessary whenever you want to reference an outside file or library.
import Feed from './Components/Feed'
import { Navbar , Nav, NavDropdown, } from 'react-bootstrap';
// Import Bootstrap Navigation Bar HERE 
// Remember that it should be used as a React Component



function App() {
  return (
    <div className="App">
      {/* Your Navigation Bar that you imported as component should be here, look at 
      how the Feed Component is imported as a reference point.
      Remember that React Components must start with a capital letter.*/}
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">MySocialMedia</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <h1>Blockstagram</h1>
      <Feed></Feed>
    </div>
  );
}

export default App;
