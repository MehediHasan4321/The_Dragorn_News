import React from 'react';
import SubHeader from '../../Shared/SubHeader/SubHeader';
import { Button, Container, Form } from 'react-bootstrap';
import { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Regeister = () => {
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const { createUserWithEmail } = useContext(AuthContext)

    setTimeout(() => { 
        setSuccess('')
        setError('')
    }, 7000)

    const handleLogRegister = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value
        const email = form.email.value;
        const password = form.password.value
        createUserWithEmail(email, password)
            .then(() => {
                setSuccess('User Create Successfully')
            })
            .catch(err => {
                setError(err.message)
                console.log(err)
            })
    }
    return (
        <>
            <SubHeader />
            <Container className='w-25 mx-auto mt-4'>
                <h2 className='text-center'>Plz Register For First Time</h2>
                <Form onSubmit={handleLogRegister}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Enter Your Full Name" />
                    </Form.Group>
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
                    <small>Already have an account ? <Link to={'/login'}>Login</Link></small>
                    <div>
                        {
                            success && <small className='text-warning' >{success}</small>
                        }
                        {
                            error && <small className='text-danger'>{error}</small>
                        }
                    </div>
                </Form>
            </Container>
        </>
    );
};

export default Regeister;