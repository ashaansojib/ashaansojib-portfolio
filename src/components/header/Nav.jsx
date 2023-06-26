import React from 'react';

const Nav = () => {
    // # nav bg
    return (
        <nav className='p-2 bg-[#263238]'>
            <div className='my-container'>
                <div className='flex justify-between items-center gap-2 py-2'>
                    <div>
                        <h2 className='text-2xl font-semibold'>Welcome Here !</h2>
                    </div>
                    <div className='grow'>
                        <ul className='flex justify-end gap-2'>
                            <li className=''><a href="">Home</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Resume</a></li>
                        </ul>
                    </div>
                    <div className='text-end'>
                        <button className='py-2 px-4 inline bg-green-500 text-white font-medium hover:bg-black transition'>Download Resume</button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;