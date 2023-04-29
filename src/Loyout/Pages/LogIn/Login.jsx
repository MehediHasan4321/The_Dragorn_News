import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import SubHeader from '../../Shared/SubHeader/SubHeader';
import { Container } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Login = () => {
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const location = useLocation()
    const from = location.state?.from?.pathname || '/catagory/0'

    const { logInWithGoogle, logInWithEmail } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogIn = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        logInWithEmail(email, password)
            .then(() => {
                setSuccess('Login Successful')
                navigate(from, { replace: true })
            })
            .catch(err => {
                setError(err.message)
            })
    }

    return (
        <>
            <SubHeader />
            <Container className='w-25 mx-auto mt-4'>
                <h2 className='text-center'>Plz Login</h2>
                <Form onSubmit={handleLogIn}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Enter Your Password" />
                    </Form.Group>

                    <Button className='w-100' variant="primary" type="submit">
                        Submit
                    </Button>
                    <small>Don't have account ? <Link to={'/register'}>Register</Link></small>
                    {
                        success && <small className='text-warning'>{success}</small>
                    }
                    {
                        error && <small className='text-danger'>{error}</small>
                    }
                </Form>
            </Container>
        </>
    );
};

export default Login;