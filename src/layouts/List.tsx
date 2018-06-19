import * as React from 'react';
import { UserList } from "../components";
import User from './../domains/User';
import {
    Container
    , Row
    , Col
    , Button
} from 'mdbreact';

export default () => {
    const users: User[] = [
        new User('Nazar', 'nazahs23', true, 1),
        new User('Nazar1', 'nazahs232', true, 2),
        new User('Nazar2', 'nazahs234', false, 3),
        new User('Nazar3', 'nazahs236', true, 4),
        new User('Nazar4', 'nazahs238', false, 5),
    ];
    return (
        <Container>
            <h2 className="h1-responsive font-weight-bold text-center my-5">
                <Row>
                    <Col lg="6" md="6" className="mb-lg-0 6">User list</Col>
                    <Col lg="6" md="6" className="mb-lg-0 6">
                        <Button className="without-shadow" color="info">Filter</Button>
                        <Button className="without-shadow">Create user</Button>
                    </Col>
                </Row>
            </h2>
            <Row>
                <Col lg="12" md="12" className="mb-lg-0 mb-12">
                    <UserList users={users}/>
                </Col>
            </Row>
        </Container>
    );
};