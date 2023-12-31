import {Container, Navbar, Nav} from 'react-bootstrap';
import { HashLink} from 'react-router-hash-link';

import resume from '../../resume.pdf'

export default function NavMenu(){

    const handleButtonClick = () => {
        window.open(resume, '_blank') 
        // Perform the desired action here
        // For example, open the resume in a new tab

    };

    return(
        <Navbar bg="dark" sticky="top" variant="dark" expand="md">
        <Container fluid>
          <Navbar.Brand as={HashLink} to="/">Alliette Dortelus</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={HashLink} to="#threethings">Trifecta</Nav.Link>
              <Nav.Link as={HashLink} to="#portfolio">Portfolio</Nav.Link>
              <Nav.Link as={HashLink} to="#skills">Skills</Nav.Link>
              <Nav.Link as={HashLink} to="#about">About</Nav.Link>
              <Nav.Link as={HashLink} to="#contact">Contact</Nav.Link>
              <button class="cti" onClick={handleButtonClick} > <div class="CTI">Resumé</div> </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
        </Navbar>

    )
}