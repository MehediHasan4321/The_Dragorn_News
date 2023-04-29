import React from 'react';
import Header from '../Shared/Header/Header';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import RightNav from '../Shared/RightNav/RightNav';

const NewsLayout = () => {
    return (
        <>
            <Header />
            <Container>
                <Row>
                    <Col lg={9}>
                        <Outlet />
                    </Col>
                    <Col lg={3}>
                        <RightNav />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
};

export default NewsLayout;