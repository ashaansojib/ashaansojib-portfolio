import React from 'react';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <div className='bg-green-800 py-4'>
            <div className='my-container'>
            <h2 className='text-2xl font-semibold p-2 text-center border-b'>FAQs / Contact Me</h2>
                <div className='grid grid-cols-2 gap-2'>
                    <div>
                        <div className="collapse collapse-plus">
                            <input type="radio" name="my-accordion-3" checked="checked" />
                            <div className="collapse-title text-xl font-medium">
                                What is The Communications of Dairy?
                            </div>
                            <div className="collapse-content">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ullam tempore! Pariatur veniam tempore, nemo sequi doloremque cum assumenda id accusamus ducimus ex quos rem enim repellendus! Dolor, fuga totam?</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">
                                What is JavaScript UseEffect?
                            </div>
                            <div className="collapse-content">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis magnam non aperiam molestiae consequatur commodi. Tempore, eveniet deserunt. Et laboriosam quam neque quos qui rem possimus perferendis obcaecati ipsam eveniet!</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">
                                How does React Hook Form?
                            </div>
                            <div className="collapse-content">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, quaerat. Reiciendis, debitis. Odit placeat reprehenderit repellendus nesciunt illum cumque, odio ut dignissimos animi deserunt, nemo aperiam, tempore perspiciatis soluta est!</p>
                            </div>
                        </div>
                    </div>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
};

export default Contact;