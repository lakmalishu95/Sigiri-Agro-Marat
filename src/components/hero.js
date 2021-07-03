import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../img/1.jpg'
import img2 from '../img/2.jpg'
import img3 from '../img/3.jpg'

function Hero(){
    return (

        <div className="container-fluid">
            <div><h2 style={{textAlign:'center'}}>Sigiri Agro Marat</h2></div><br />
            <div className="row">
                <div className="col">
                    
                </div>
                <div className= "col">
                
                </div> 
            </div>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src = {img2}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img3}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img1}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="row">
                <div className="col"></div>
                <div className="col"></div>
                <div className="col"></div>

            </div>        
        </div>

    )
}

export default Hero;