import React from 'react';
import { FaReact, FaHtml5, FaCss3, FaBootstrap, FaNodeJs } from 'react-icons/fa';
import { TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";
import Parcentage from './Parcentage';
const Skill = () => {
    return (
        <div className=' bg-slate-700 py-4'>
            <div className='my-container'>
                
                <div className='grid grid-cols-4 items-center gap-3 justify-center py-4'>
                    <div className='p-2 border border-green-500 flex flex-col items-center justify-center'>
                        <FaHtml5 className='text-5xl text-red-500' />
                        <h2 className='text-xl uppercase'>HTML 5</h2>
                    </div>
                    <div className='p-2 border border-green-500 flex flex-col items-center justify-center'>
                        <FaCss3 className='text-5xl text-green-500' />
                        <h2 className='text-xl uppercase'>CSS3</h2>
                    </div>
                    <div className='p-2 border border-green-500 flex flex-col items-center justify-center'>
                        <FaReact className='text-5xl text-green-500' />
                        <h2 className='text-xl uppercase'>React JS</h2>
                    </div>
                    <div className='p-2 border border-green-500 flex flex-col items-center justify-center'>
                        <TbBrandNextjs className='text-5xl text-orange-500' />
                        <h2 className='text-xl uppercase'>Next.JS</h2>
                    </div>
                    <div className='p-2 border border-green-500 flex flex-col items-center justify-center'>
                        <FaCss3 className='text-5xl text-green-500' />
                        <h2 className='text-xl uppercase'>CSS3</h2>
                    </div>
                    <div className='p-2 border border-green-500 flex flex-col items-center justify-center'>
                        <FaBootstrap className='text-5xl text-orange-500' />
                        <h2 className='text-xl uppercase'>Bootstrap</h2>
                    </div>
                    <div className='p-2 border border-green-500 flex flex-col items-center justify-center'>
                        <TbBrandTailwind className='text-5xl text-orange-500' />
                        <h2 className='text-xl uppercase'>Tailwind Css</h2>
                    </div>
                    <div className='p-2 border border-green-500 flex flex-col items-center justify-center'>
                        <FaNodeJs className='text-5xl text-green-500' />
                        <h2 className='text-xl uppercase'>Node JS</h2>
                    </div>
                </div>
                <Parcentage />
            </div>
        </div>
    );
};

export default Skill;