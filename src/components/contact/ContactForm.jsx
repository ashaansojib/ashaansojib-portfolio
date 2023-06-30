import React, { useRef } from 'react';
const ContactForm = () => {
    const sendEmail = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const mgs = form.message.value;
        const result = { name, email, mgs }
        console.log(result)
    }
    return (
        <div className='text-black'>
            <form onSubmit={sendEmail} className="card max-w-sm shadow-2xl">
                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" name='name' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <textarea name="message" placeholder='type your messages' id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;