import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className='p-4 text-center bg-slate-900'>
                <div className="my-container">
                    <p>Copyright @ 2023 - All Rights Are Reserved By <Link to="/" className='underline'>Ashaduzzaman Sojib</Link></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;