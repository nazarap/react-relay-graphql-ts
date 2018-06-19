import * as React from 'react';
import './UserList.css';
import { CardGroup } from 'mdbreact';
import UserCard from "../user-card/UserCard";
import User from "../../domains/User";

export default (props: any) => {
    const users: User[] = props.users;

    return (
        <CardGroup className="users">
            <div className="d-flex flex-wrap justify-content-center no-gutters">
                {users.map(user =>
                    <UserCard user={user} key={user.id}/>
                )}
            </div>
        </CardGroup>
    );
};