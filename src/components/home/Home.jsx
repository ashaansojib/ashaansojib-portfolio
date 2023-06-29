import React from 'react';
import Nav from '../header/Nav';
import Header from '../header/Header';
import Skill from '../skills/Skill';
import Projects from '../projects/Projects';
import Contact from '../contact/Contact';

const Home = () => {
    return (
        <div className='text-white'>
            <Nav />
            <Header />
            <Skill />
            <Projects />
            <Contact />
        </div>
    );
};

export default Home;