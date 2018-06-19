import * as React from 'react';
import './UserCard.css';
import User from './../../domains/User';
import {
    Card
    , CardImage
    , CardBody
    , CardTitle
    , CardText
    , Button
} from 'mdbreact';
import Active from "../active/Active";

export default (props: any) => {
    const user: User = props.user;
    return (
        <Card className="users__card col col-md-3">
            <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/16.jpg" alt={user.name} waves={true}/>
            <CardBody>
                <CardTitle tag="h5">{user.name} <Active active={user.active}/></CardTitle>
                <CardText>{user.email}</CardText>
                <Button outline={true} className="users__card col col-md-7 without-shadow">Edit</Button>
                <Button outline={true} className="users__card col col-md-7 without-shadow" color="danger">Delete</Button>
            </CardBody>
        </Card>
    );
};