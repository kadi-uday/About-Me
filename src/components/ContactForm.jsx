import React from 'react'
import OnSubmit from '../hooks/useOnSubmit';

const ContactForm = () => {
    return (
        <div className="lg:w-1/2 rounded-xl p-2 bg-gradient-to-r from-indigo-100 to-indigo-50 dark:from-[#1e273f] dark:to-[#131c2d] shadow-lg ">
            <form onSubmit={OnSubmit} className="space-y-5 p-5">
                <div>
                    <label htmlFor="name" className="block text-sm mb-1 font-medium">
                        Your Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="Enter your name"
                        className="w-full px-4 py-2 rounded bg-gray-100 dark:bg-[#1c2b3a] border dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-cyan-400"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm mb-1 font-medium">
                        Your Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 rounded bg-gray-100 dark:bg-[#1c2b3a] border dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-cyan-400"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm mb-1 font-medium">
                        Write your message here
                    </label>
                    <textarea
                        id="message"
                        rows="5"
                        name="message"
                        required
                        placeholder="Enter your message"
                        className="w-full px-4 py-2 rounded bg-gray-100 dark:bg-[#1c2b3a] border dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-cyan-400"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="bg-indigo-600 hover:bg-indigo-700 dark:bg-cyan-500 dark:hover:bg-cyan-600 text-white px-6 py-2 rounded font-medium transition transform hover:scale-105"
                >
                    Submit Now
                </button>
            </form>
        </div>
    )
}

export default ContactForm;