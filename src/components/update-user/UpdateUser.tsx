import * as React from 'react';
import { Input, Button, Card, CardBody } from 'mdbreact';

export default () => {
    return(
        <Card>
            <CardBody>
                <form>
                    <p className="h4 text-center py-4">
                        <Button color="cyan" type="submit">Update</Button><br/>
                        Edit "nazar123" user</p>
                    <div className="grey-text">
                        <Input label="Your name" icon="user" group={true} type="text" validate={true} error="wrong" success="right"/>
                        <Input label="Your email" icon="envelope" group={true} type="email" validate={true} error="wrong" success="right"/>
                    </div>
                    <div className="text-center py-4 mt-3">
                        <Button color="cyan" type="submit">Update</Button>
                    </div>
                </form>
            </CardBody>
        </Card>
    );
};
