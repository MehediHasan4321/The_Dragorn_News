import React, { useContext } from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import Qzone from '../Qzone/Qzone';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
const RightNav = () => {
    const {logInWithGoogle} = useContext(AuthContext)
    const googleLogIn = ()=>{
        logInWithGoogle()
    }
    return (
        <>
            <div className='mt-4'>
                <h4>Login With</h4>
                <Button onClick={googleLogIn} className='mt-2' variant="outline-primary"><FaGoogle /> Login with Google</Button>
                <Button className='mt-2' variant="outline-secondary"><FaGithub /> Login with Github</Button>
            </div>
            <div className='mt-4'>
                <h4>Find On Us</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook/> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter/> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram/> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <Qzone/>
        </>
    );
};

export default RightNav;