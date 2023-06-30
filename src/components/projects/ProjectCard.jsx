import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProjectCard = ({item}) => {
    const {pName, imgLink, pLink} = item;
    // console.log(pName)
    return (
        <Link to={pLink}>
            <div className='border border-gray-900 rounded-t-md bg-slate-950 hover:text-green-500 tooltip' data-tip="Click To Open">
                <img className='p-2 w-full h-full' src={imgLink} alt="" />
                <div className='p-2 flex justify-between items-center'>
                    <h2 className='text-xl '>{pName}</h2>
                    <FaDownload />
                </div>
            </div>
        </Link>
    );
};

export default ProjectCard;