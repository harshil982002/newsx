
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Navbar, Nav, Container } from 'react-bootstrap';
import Particle from "./Components/Particle"
import {
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import {Business} from './Components/Business'
import {Science} from './Components/Science'
import {Sports} from './Components/Sports'
import {Entertainment} from './Components/Entertainment'
import {Homepage} from './Components/Homepage'


function App() {
  return (
    <BrowserRouter>
    <div className="App" >
      <><Particle/>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand className="nav-link active" aria-current="page" as={Link} to="/">News-X</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/sports">Sports</Nav.Link>
      <Nav.Link as={Link} to="/business">Business</Nav.Link>
      <Nav.Link as={Link} to="/science">Science</Nav.Link> 
      <Nav.Link as={Link} to="/entertainment">Entertainment</Nav.Link> 
    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>

</>
     <div>
       <Routes>
       <Route path="/sports" element={<Sports/>}/>
         <Route path="/business" element={<Business/>}/>
         <Route path="/science" element={<Science/>}/>
         <Route path="/entertainment" element={<Entertainment />}/>
         <Route path="/" element={<Homepage />}/>
       </Routes>
     </div> 
  
    </div>
    </BrowserRouter>
    
  );
  
}

export default App;
