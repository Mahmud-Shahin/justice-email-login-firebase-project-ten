import React from 'react';
import { Carousel } from 'react-bootstrap';
import img from './lawyear (1).jpg'
import img1 from './lawyear (2).jpg'
import img2 from './lawyear (3).jpg'

const Slider = () => {
    return (
        <div>

            <div className='container '>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 "
                            src={img}
                            alt="First slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 "
                            src={img1}
                            alt="Second slide"
                        />


                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 "
                            src={img2}
                            alt="Third slide"
                        />


                    </Carousel.Item>
                </Carousel>
            </div>

        </div>
    );
};

export default Slider;