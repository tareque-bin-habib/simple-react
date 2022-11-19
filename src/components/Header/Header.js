import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css'

function Header() {
    return (
        <Navbar bg="dark" expand="lg" className='p-3'>
            <Container>
                <Navbar.Brand className='text-white fs-4' href="#home">Simple</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto mb-2 mb-lg-0 me-1 header">
                        <Link to='/'>Home</Link>
                        <Link to='/products'>Products</Link>
                        <Link to='/orders'>Orders</Link>
                        <Link to='/about'>About</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

export default Header;