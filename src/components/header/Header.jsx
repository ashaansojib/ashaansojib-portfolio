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
                    <div className='md:grid lg:grid-cols-3 justify-between items-center lg:h-[380px]'>
                        <div className='col-span-2 lg:space-y-2'>
                            <h2 className='text-3xl font-semibold' data-aos="fade-down" data-aos-duration="1500">I'm Ashaduzzaman <span className='text-green-500'>Sojib</span></h2>
                            <TypeAnimation
                                sequence={[
                                    'Front-end Web Developer',
                                    1000,
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

                            <p data-aos="fade-right" data-aos-duration="1500" className='text-gray-100'>As a professional web developer, i have many skills, qualities, and contributions to the field. I possess a high level of technical expertise in web development, including proficiency in programming languages, frameworks, and tools. I pay meticulous attention to every aspect of web development, </p>
                            <div className='flex items-center gap-3'>
                                <Link to="https://doc-14-7k-docs.googleusercontent.com/docs/securesc/q2ellr9o01h59p20unqsjj2rvm687k7g/riqubjvuka3ic1n8sjk4cp437oa0rvib/1688197725000/04528056402499706848/04528056402499706848/1ur9YsDz0h-fv8Kz3iZI6AKzLVt3mJymi?e=download&ax=AGtFMPXYK5UJP85paCatKNqrmQY1gPRmbH2fTWxgkJpf75UDfK5F1AyxjWLchs5hPONfRMQCZ2EW44yvtw8x8w4Qlhq8poFV5DqF_SrvHO8ZM2Wjb-HofqXBYt4l_-k5GGyEQ39-ZM3p_F56_jQTSbF649ZpovYLN3g-_3paw0snZr3Xx_wmBdy73tB9lsuybZHYf60usxa7B-MOPOd0TY-XrsXaq_rgovNa0pTBdwLOpKrnUpejmauL58wyX8xNMBwvA23_hvjqW-M8q88DG2Ml6Rl4a6lcVjKZCpG6ycL2qtdAPGdmzTsRdi6EB8F34v3brCyn8yvYMx6t9izVNjZkW-HzmcMrIik30PS9Kk70IuT532vNlnMkyAhO2-ExZFkkn6QUBBFqlQABTjIVfi_n6XnacolssbBcD-GWRJqspqrqJJRx4NouAUWu1oSDEY4vhTB6y8j_X1GKg1-PlxcuMVHu48G83x84-TrWpl8-f9aZhQXXibYbeHGC-Qbl37ZJvaV1-ZZQ9ILpicDpvZO3k1LQRq4v-1HPVD30raYdGSCkJQByZZCzOdB1_jiOKc_M0KWL-TiVNUkSvYu_gpgtAH4kiYeNYBrDyYkimvsTls3fAWZHner9LWPoMdiCUkdtVElLeE2P42k8CLCMFeAo0eoWXTDaBBq5K_9FtuwbGSdqavakyTqdL5FqNfB2SxFVYaA7oR2LrENQswVpNsCWpM84NeIxTLPxQ37O_NJP_PNW3WwinwcNd6JQDtp9_xJxs2ANSm2zXyQkhd1YnuMKPwEi_a78as9ZkgXikjhDULUeMxp5jliEXwUUXDmeylkA8Ul5EoTDIY9Z_vbqu9nFna4Sgy6zj-dS-lPr2KGhxAC9KmkRdz1hjVxRwJz1PXg&uuid=9f4d2b07-cc66-47c3-a2b5-4558a9c832ec&authuser=0&nonce=c5n42u7d46dk2&user=04528056402499706848&hash=m84hh5pbmun1f9c0e8db3oaqoesura3f"><button data-aos="fade-left" data-aos-duration="1000" className='py-2 px-4 inline bg-green-500 text-white rounded-md'>Download Resume</button></Link>                               
                                <Link to="https://github.com/ashaansojib" target='_blank' className='p-2 text-2xl inline rounded-full bg-black tooltip tooltip-top' data-tip="Go Github" data-aos="fade-up" data-aos-duration="1000"><FaGithub /></Link>
                                <Link to="https://www.facebook.com/khusbusojib/" target='_blank' className='p-2 text-2xl inline rounded-full bg-black tooltip tooltip-top' data-tip="My Facebook" data-aos="fade-up" data-aos-duration="1500"><FaFacebook /></Link>
                                <Link className='p-2 text-2xl inline rounded-full bg-black tooltip tooltip-top' data-tip="My Linkedin" data-aos="fade-up" data-aos-duration="2000"><FaLinkedinIn /></Link>
                                <Link to="https://drive.google.com/file/d/1kVxYf6NkBNxQPThhg49NtRSNDt_blHJy/view" target='_blank' className='p-2 text-2xl inline rounded-full bg-black tooltip tooltip-top' data-tip="My Cover Letter" data-aos="fade-up" data-aos-duration="2500"><FaPenFancy /></Link>
                            </div>
                        </div>
                        <div className='flex md:justify-end justify-center pt-2 lg:pt-0' data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                            <img className='w-[280px] p-2 border-t-2 bg-slate-900' src="/as.png" alt="" />
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;