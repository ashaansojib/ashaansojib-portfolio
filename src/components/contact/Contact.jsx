import React from 'react';

const Contact = () => {
    return (
        <div className="bg-gray-700 pb-4">
            <div className="my-container">
                <h2 className='text-2xl font-medium text-center py-4'>Contact ME</h2>
                <div className='md:flex justify-center gap-2'>
                    <div className='lg:w-[450px]'>
                    <iframe style={{ height: '100%', width: '100%'}} src="https://www.google.com/maps/embed/v1/place?q=Patgram,+Lalmonirhat,+Bangladesh&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
                    </div>
                    <div className='lg:w-[400px]'>
                        <form className="card w-full rounded-none bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Email</span>
                                    </label>
                                    <input type="text" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Name</span>
                                    </label>
                                    <input type="text" placeholder="Your Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Messages</span>
                                    </label>
                                    <textarea className="textarea textarea-bordered" placeholder="Type your messages"></textarea>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="py-2 px-4 inline-block bg-gray-950 hover:bg-slate-800">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;