import React from 'react';
import Banner from '../Components/Banner';
import About from './About';
import Projects from './Projects';

const Home = () => {
    return (
        <div className="animate__animated animate__fadeIn">
            <Banner />
            <Projects />
            <About />
        </div>
    )
}

export default Home;