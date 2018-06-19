import * as React from 'react';
import './Active.css';
import { Badge } from 'mdbreact';
import types from './types';

export default (props: any) => {
    const { active } = props;
    const badgeProps = types[active ? 'active': 'nonactive'];
    return (
        <Badge className={badgeProps.color + " without-shadow"}>{badgeProps.text}</Badge>
    );
};