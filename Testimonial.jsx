import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Testimonial = () => {
    return ( 
        <>
            <div className="container">
                <h3 style={{textAlign:'center'}}>Testimonial</h3>
                <Carousel
                    showArrows={true}
                    infiniteLoop={true}
                    showThumbs={false}
                    showStatus={false}
                    autoPlay={true}
                    interval={6100}
                >
                    <div>
                    <img src=".././images/sh.png" />
                    <div className="myCarousel">
                        <h3>Shirley Fultz</h3>
                        <h4>Designer</h4>
                        <p>
                        The books here are quite cheap
                        </p>
                    </div>
                    </div>

                    <div>
                    <img src=".././images/da.png"  />
                    <div className="myCarousel">
                        <h3>Daniel Keystone</h3>
                        <h4>Designer</h4>
                        <p>
                            I love purchasing books here
                        </p>
                    </div>
                    </div>

                    <div>
                    <img src=".././images/th.png" />
                    <div className="myCarousel">
                        <h3>Theo Sorel</h3>
                        <h4>Designer</h4>
                        <p>
                        Top quality books are here
                        </p>
                    </div>
                    </div>
                </Carousel>
            </div>
        </>
     );
}
 
export default Testimonial;