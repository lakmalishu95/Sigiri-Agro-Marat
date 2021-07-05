import React from 'react';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Sigiri from '../img/sigiriya-3.jpg';
function Contact() {
    return(
        <div className="container">
        <h2>CONTACT US</h2><hr /><br />
            <div className="row">
            
                <div className="col">
                    
                    <Form>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Phone </Form.Label>
                            <Form.Control type="mumber" as="textarea" rows={1} />
                        </Form.Group>
                        <button type="submit"> Send</button>
                    </Form>
                </div>
                <div className="col">
                <Image src={Sigiri} fluid />

                </div>
            </div>
        </div>
        
    )
}

export default Contact;