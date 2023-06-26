import React, { useEffect } from 'react';
import Particle from '../../animations/Particle';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaFacebook, FaLinkedinIn, FaPenFancy } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <>
            {/* <Particle /> */}
            <header className='p-4 bg-[#202124]'>
                <div className='my-container'>
                    <div className='grid grid-cols-3 justify-between items-center h-[400px]'>
                        <div className='col-span-2 lg:space-y-2'>
                            <h2 className='text-3xl font-semibold' data-aos="fade-down" data-aos-duration="1500">I'm Ashaduzzaman <span className='text-green-500'>Sojib</span></h2>
                            <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'Front-end Web Developer',
                                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                                    'JavaScript Developer',
                                    1000,
                                    'React JS Developer',
                                    1000,
                                    'Backend Developer',
                                    1000
                                ]}
                                wrapper="span"
                                speed={50}
                                style={{ fontSize: '2em', display: 'inline-block' }}
                                repeat={Infinity}
                            />

                            <p data-aos="fade-right" data-aos-duration="1500" className='text-gray-100'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus illum excepturi eveniet magni vero natus quaerat quae tempore, maiores at illo suscipit fugiat ex doloribus ducimus possimus quas voluptatem non?</p>
                            <div className='flex items-center gap-3'>
                                <button data-aos="fade-left" data-aos-duration="1000" className='py-2 px-4 inline bg-green-500 text-white rounded-md'>Download Resume</button>
                                <Link className='p-2 text-2xl inline rounded-full bg-black tooltip tooltip-top' data-tip="Go Github" data-aos="fade-up" data-aos-duration="1000"><FaGithub /></Link>
                                <Link className='p-2 text-2xl inline rounded-full bg-black tooltip tooltip-top' data-tip="My Facebook" data-aos="fade-up" data-aos-duration="1500"><FaFacebook /></Link>
                                <Link className='p-2 text-2xl inline rounded-full bg-black tooltip tooltip-top' data-tip="My Linkedin" data-aos="fade-up" data-aos-duration="2000"><FaLinkedinIn /></Link>
                                <Link className='p-2 text-2xl inline rounded-full bg-black tooltip tooltip-top' data-tip="My Cover Letter" data-aos="fade-up" data-aos-duration="2500"><FaPenFancy /></Link>
                            </div>
                        </div>
                        <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                            <img src="https://i.ibb.co/w0NRg39/attractive-young-male-nutriologist-lab-coat-smiling-against-white-background-662251-2960-removebg-pr.png" alt="" />
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;