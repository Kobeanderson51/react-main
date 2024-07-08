import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm: React.FC = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stateMessage, setStateMessage] = useState<string | null>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs.sendForm('kobeanderson_51', 'template_glyugbj', e.currentTarget, 'IOeAL8QFE56ShkkC1')
            .then(() => {
                setStateMessage('Message sent!');
                setIsSubmitting(false);
                setTimeout(() => {
                    setStateMessage(null);
                }, 5000); // hide message after 5 seconds
            })
            .catch((error) => {
                console.error('EmailJS Error:', error);
                setStateMessage('Something went wrong, please try again later');
                setIsSubmitting(false);
                setTimeout(() => {
                    setStateMessage(null);
                }, 5000); // hide message after 5 seconds
            });

        // Clears the form after sending the email
        e.currentTarget.reset();
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Contact Me</h1>
            <form className="flex flex-col items-center space-y-4" onSubmit={sendEmail}>
                <div className="w-full">
                    <label className="block text-gray-700 mb-1" htmlFor="name">Name</label>
                    <input className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" id="name" name="user_name" required />
                </div>
                <div className="w-full">
                    <label className="block text-gray-700 mb-1" htmlFor="email">Email</label>
                    <input className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" type="email" id="email" name="user_email" required />
                </div>
                <div className="w-full">
                    <label className="block text-gray-700 mb-1" htmlFor="message">Message</label>
                    <textarea className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" id="message" name="message" required></textarea>
                </div>
                <button className="bg-blue-500 text-white rounded-lg px-6 py-2 font-semibold hover:bg-blue-600 transition duration-300" type="submit" disabled={isSubmitting}>Send</button>
                {stateMessage && <p className="mt-4 text-center">{stateMessage}</p>}
            </form>
        </div>
    );
};

export default ContactForm;
