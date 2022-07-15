import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container fluid>

                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={Link} to='/' >Home</Nav.Link>
                            <Nav.Link as={Link} to='/about' >About</Nav.Link>
                            <Nav.Link as={Link} to='/services' >Services</Nav.Link>
                            <Nav.Link as={Link} to='/checkOut' >CheckOut</Nav.Link>
                            <Nav.Link as={Link} to='/blogs' >Blogs</Nav.Link>






                        </Nav>
                        <div className='d-flex'>

                            {
                                user ?
                                    <button onClick={handleSignOut}>signOut</button>
                                    :
                                    <Nav.Link as={Link} to='/login'>login</Nav.Link>}

                            <Nav.Link as={Link} to='/register'>register</Nav.Link>

                        </div>


                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;