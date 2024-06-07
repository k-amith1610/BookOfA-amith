import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import WebsiteName from './WebsiteName';

const Contact = () => {
    const [state, handleSubmit] = useForm("mjvdrjlp");
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    useEffect(() => {
        if (state.succeeded) {
            setFormData({ name: '', email: '', message: '' });
            setShowSuccessMessage(true);
            const timer = setTimeout(() => {
                setShowSuccessMessage(false);
            }, 5000);
            return () => clearTimeout(timer); 
        }
    }, [state.succeeded]);

    return (
        <div className="min-h-screen    flex justify-center items-center dark:bg-slate-900 dark:text-black bg-cover bg-center" style={{ backgroundImage: 'url(https://wallpapers.com/images/featured/red-and-black-eaiivsm48tbupy96.jpg)' }}>
            <div className="max-w-lg w-[80%] mx-auto bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8">
                <div className="flex justify-center items-center pb-3 font-bold text-xl">
                    <WebsiteName />
                </div>
                <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-8">Contact Us</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-600 dark:text-gray-300 mb-1">Name</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
                            placeholder="Your name"
                        />
                        <ValidationError
                            prefix="Name"
                            field="name"
                            errors={state.errors}
                            className="text-red-500 text-sm"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-600 dark:text-gray-300 mb-1">Email Address</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
                            placeholder="Your email address"
                        />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                            className="text-red-500 text-sm"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-gray-600 dark:text-gray-300 mb-1">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="4"
                            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
                            placeholder="Your message"
                        ></textarea>
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                            className="text-red-500 text-sm"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={state.submitting}
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-blue-500 transition duration-300"
                    >
                        {state.submitting ? 'Submitting...' : 'Submit'}
                    </button>
                </form>
                {showSuccessMessage && <p className="mt-4 text-green-600 text-center">Thanks for reaching out!</p>}
            </div>
        </div>
    );
};

export default Contact;
