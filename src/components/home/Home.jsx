import React from 'react';
import Nav from '../header/Nav';
import Header from '../header/Header';
import Skill from '../skills/Skill';

const Home = () => {
    return (
        <div className='text-white'>
            <Nav />
            <Header />
            <Skill />
        </div>
    );
};

export default Home;