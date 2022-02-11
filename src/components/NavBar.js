import { Navbar, Container, Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

function NavBar({ darktheme, darkmode }) {
    return (
        <Navbar className={`${darktheme ? 'bg-black':'bg-white'} drop-shadow-lg`} collapseOnSelect expand="sm" bg={darktheme ? "dark":"light"} variant={darktheme ? "dark":"light"}>
            <Container>
            <Navbar.Brand className="font-medium" href="/"><img src="images.png" width="30px" height="30px" className="d-inline-block align-top" alt="MD5"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
                <Nav.Link href="/checker" className={darktheme ? 'text-white':'text-black'}>Checker</Nav.Link>
                <Nav.Link href="/generator" className={darktheme ? 'text-white':'text-black'}>Generator</Nav.Link>
                <Nav.Link href="/contact" className={darktheme ? 'text-white':'text-black'}>Contact</Nav.Link>
                <Navbar.Text className={darktheme ? 'text-white':'text-black'}>
                <button onClick={darkmode} className="no-underline"><FontAwesomeIcon className={`ml-2 cursor-pointer ${darktheme ? 'text-white':'text-black'}`} icon={darktheme ? faSun:faMoon} id='okok'/></button>
                </Navbar.Text>
            </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;