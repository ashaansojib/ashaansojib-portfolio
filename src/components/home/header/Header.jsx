import React from 'react';
import Particle from '../../../animations/Particle';

const Header = () => {
    return (
        <>
        <Particle />
        <header className='p-4 bg-[#202124]'>
            <div className='my-container'>
                <div className='grid grid-cols-3 justify-between items-center'>
                    <div className='col-span-2'>
                        <h2>I'm Ashaduzzaman Sojib</h2>
                        <p>Front-end Web Developer</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus illum excepturi eveniet magni vero natus quaerat quae tempore, maiores at illo suscipit fugiat ex doloribus ducimus possimus quas voluptatem non?</p>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/w0NRg39/attractive-young-male-nutriologist-lab-coat-smiling-against-white-background-662251-2960-removebg-pr.png" alt="" />
                    </div>
                </div>
            </div>
        </header>
        </>
    );
};

export default Header;