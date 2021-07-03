import React from 'react';
import Card from 'react-bootstrap/Card';
import img3 from '../img/3.jpg'
import Button from 'react-bootstrap/Button'


function Cardd() {
    return(
    <div className="container">
        <div className="row">
            <div className="col">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img3}/>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className="col">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img3}/>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className="col">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img3}/>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    </div>
    )
}

export default Cardd;