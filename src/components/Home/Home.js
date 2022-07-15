import React from 'react';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';


const Home = () => {
    return (
        <div>
            <h1 className='mt-3 mb-3'>Justice for everybody</h1>
            <Slider></Slider>
            <br /> <br />
            <Services></Services>
            <br />



        </div>
    );
};

export default Home;