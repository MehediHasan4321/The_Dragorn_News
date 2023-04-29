import React, { useContext } from 'react';
import { Button, Container, Nav, NavLink, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import  { AuthContext } from '../../../AuthProvider/AuthProvider';

const SubHeader = () => {
    const {user,logOut} = useContext(AuthContext)

    const handleLogOut = ()=>{
        logOut()
    }

    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto d-flex gap-3 ">
                        <Link className={'text-decoration-none text-muted'} to={'/catagory/0'}>Home</Link>
                        <Link className={'text-decoration-none text-muted'} to={'/'}>About</Link>
                        <Link className={'text-decoration-none text-muted'} to={'/'}>Career</Link>
                    </Nav>
                    <Nav className='d-flex align-items-center gap-2 '>
                        {/* {user && <span style={{fontSize:'2rem'}}><FaUserCircle/></span>}
                        <Link to={'/login'}><Button variant='secondary'>Log In</Button></Link> */}
                        {
                            user ? <><span style={{fontSize:'2rem'}}><FaUserCircle/></span> <button onClick={handleLogOut}>LogOut</button></> : <Link to={'/login'}><Button variant='secondary'>Log In</Button></Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default SubHeader;