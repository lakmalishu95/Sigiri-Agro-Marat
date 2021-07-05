import React from 'react';
import '../App.css';

function About() {
    return(
        <div className="container">
        <div className="ll">
            <h2>ABOUT US</h2><hr /><br />
            <div class="embed-responsive embed-responsive-16by9">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/eYGsM9c9ll8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div><br /><br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta vitae, dolorem vel officiis expedita sunt porro aspernatur natus.
                 Laborum voluptatibus ducimus at dolores architecto nostrum, inventore eos cum dolor placeat.
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eum quidem vitae sed sunt reprehenderit ullam deleniti ut quasi nulla! Architecto nemo exercitationem ratione,
                  vel minima corporis eligendi illum cupiditate.</p>
        </div>
        </div>
    )
}

export default About;