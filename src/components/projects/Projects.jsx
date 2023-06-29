import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const [project, setProject] = useState([]);
    useEffect(() => {
        fetch('/Projects.json')
            .then(res => res.json())
            .then(data => setProject(data))
    }, [])
    // console.log(project)
    return (
        <div className='bg-slate-800'>
            <div className="my-container">
                <div className='text-center lg:w-2/3 mx-auto'>
                    <h2 className='text-2xl font-semibold p-2'>My All Projects</h2>
                    <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, sequi totam esse sunt minus consectetur quas magnam ipsam, dolores, natus illo porro saepe quam consequuntur provident labore repellendus aut quod?</p>
                </div>
                <div className='grid grid-cols-3 gap-4 py-4'>
                    {
                        project.map((singleProject) => <ProjectCard key={singleProject._id} item={singleProject} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;