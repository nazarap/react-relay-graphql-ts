import * as React from 'react';
import UpdateUser from "../components/update-user/UpdateUser";
import { Container, Row, Col } from 'mdbreact';

export default () => {
    return(
        <Container>
            <Row>
                <Col md="6">
                    <UpdateUser />
                </Col>
            </Row>
        </Container>
    );
};
