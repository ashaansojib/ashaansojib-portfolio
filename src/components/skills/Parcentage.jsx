import ProgressBar from "@ramonak/react-progress-bar";

const Parcentage = () => {
    return (
        <div className='grid grid-cols-2 gap-4 justify-center  h-[400px]' data-aos="fade-up">
            <div>
                <h2 className='text-3xl font-semibold'>I'm Expertise In</h2>
                <p>For Last 6 Months with all top of the SKILLS. Now I'm relatable with Full Stack Web development also Front-end and Backend. I'm expert in react js and all css framework like Tailwindcss, Bootstrap. For backend i used node js, express js, cors, JSON Web Token. I am also expert in react query, axios secure.</p>
                <br />
                <p>Recently I finished some complete web application projects. I explore all of the functionality on this projects. </p>
            </div>
            <div>
                <div className="p-2">
                    <p>HTML / HTML5</p>
                    <ProgressBar height="15px" bgColor="orange" completed={95} borderRadius="0px" animateOnRender={true} />
                </div>
                <div className="p-2">
                    <p>React JS</p>
                    <ProgressBar height="15px" bgColor="gray" completed={85} borderRadius="0px" animateOnRender={true} />
                </div>
                <div className="p-2">
                    <p>Next JS</p>
                    <ProgressBar height="15px" bgColor="orange" completed={50} borderRadius="0px" animateOnRender={true} />
                </div>
                <div className="p-2">
                    <p>Tailwind CSS</p>
                    <ProgressBar height="15px" bgColor="gray" completed={95} borderRadius="0px" animateOnRender={true} />
                </div>
                <div className="p-2">
                    <p>React Bootstrap</p>
                    <ProgressBar height="15px" bgColor="orange" completed={90} borderRadius="0px" animateOnRender={true} />
                </div>
                <div className="p-2">
                    <p>CSS / CCS3</p>
                    <ProgressBar height="15px" bgColor="gray" completed={85} borderRadius="0px" animateOnRender={true} />
                </div>
                <div className="p-2">
                    <p>Node JS / Express JS / JWT</p>
                    <ProgressBar height="15px" bgColor="orange" completed={75} borderRadius="0px" animateOnRender={true} />
                </div>
            </div>
        </div>
    );
};

export default Parcentage;