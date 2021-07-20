import React from 'react';
import '../App.css';

function About() {
    return(
        <div className="container">
        <div className="ll">
            <h6>LET KNOW ABOUT US</h6>
            <h2 style={{textAlign:'center'}}>ABOUT SIGIRI AGRO MARAT</h2><hr />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, sapiente cum reiciendis vel quia eos veniam quidem consectetur dignissimos, vitae id beatae? Non iusto minus optio amet excepturi laborum debitis!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod in eligendi aliquam sit. Repellendus sed eius consequatur omnis. Atque nesciunt nam numquam quaerat illo tenetur totam voluptates id vel magnam!
            </p><br />
            <div class="embed-responsive embed-responsive-16by9">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/eYGsM9c9ll8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
            
        </div>
        </div>
    )
}

export default About;