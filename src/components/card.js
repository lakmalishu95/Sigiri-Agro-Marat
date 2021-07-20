import React from 'react';
import Card from 'react-bootstrap/Card';
import img3 from '../img/3.jpg';
import Button from 'react-bootstrap/Button';
import '../App.css';



function Cardd() {
    return(
    <div className="container">
        <h6>OUR SERVICES</h6>
        <h2 style={{textAlign:'center'}}>SERVICES</h2><hr />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, sapiente cum reiciendis vel quia eos veniam quidem consectetur dignissimos, vitae id beatae? Non iusto minus optio amet excepturi laborum debitis!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod in eligendi aliquam sit. Repellendus sed eius consequatur omnis. Atque nesciunt nam numquam quaerat illo tenetur totam voluptates id vel magnam!
            </p><br />
        
        <div className="row" style={{color:'Black'}}>
            
            <div className="col" >
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
        </div><br /><br />
        <div className="row" style={{color:'Black'}}>           
            <div className="col" >
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
        </div><br /><br />
        

        
    </div>
    )
}

export default Cardd;