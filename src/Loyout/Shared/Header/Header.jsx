import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment/moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';
import { FaUser, FaUserCircle } from 'react-icons/fa';
import SubHeader from '../SubHeader/SubHeader';
const Header = () => {
    return (
        <Container>
            <div className='text-center mt-4'>
                <img src={logo} alt="" />
                <p className='text-secondary mt-3'>Journalism Without Fear or Favour</p>
                <p className='text-secondary mt-3'>{moment().format("dddd, MMMM D, YYYY,")}</p>
            </div>
            <div className='mb-4 d-flex align-items-center bg-light'>
                <Button variant='danger'>Latest</Button>
                <Marquee className='text-danger' speed={50}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni modi et perspiciatis? Ducimus consequuntur perferendis beatae, hic pariatur incidunt consectetur voluptates dolore tenetur deleniti, aperiam quam est aliquam et eligendi a debitis consequatur distinctio delectus vero ea excepturi. </p>
                </Marquee>
            </div>
            <SubHeader/>
        </Container>
    );
};

export default Header;