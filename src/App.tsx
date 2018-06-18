import * as React from 'react';
import './App.css';
import { CardGroup, CardImage, CardTitle, Card, CardBody, CardText, Button} from 'mdbreact';

export default (props: any) => {
    return (
        <div className="App">
            <CardGroup deck>

                <Card>
                    <CardImage src="https://mdbootstrap.com/img/Photos/Others/images/16.jpg" alt="Card image cap" top hover overlay="white-slight"/>
                    <CardBody>
                        <CardTitle tag="h5">Panel title</CardTitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button color="light-blue" size="md">read more</Button>
                    </CardBody>
                </Card>

                <Card>
                    <CardImage src="https://mdbootstrap.com/img/Photos/Others/images/14.jpg" alt="Card image cap" top hover overlay="white-slight"/>
                    <CardBody>
                        <CardTitle tag="h5">Panel title</CardTitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button color="light-blue" size="md">read more</Button>
                    </CardBody>
                </Card>

                <Card>
                    <CardImage src="https://mdbootstrap.com/img/Photos/Others/images/15.jpg" alt="Card image cap" top hover overlay="white-slight"/>
                    <CardBody>
                        <CardTitle tag="h5">Panel title</CardTitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button color="light-blue" size="md">read more</Button>
                    </CardBody>
                </Card>

            </CardGroup>
        </div>
    );
};