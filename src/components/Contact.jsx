import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import ContactForm from "./ContactForm";

const Contact = () => {
    return (
        <section className="min-h-screen px-6 py-12 md:py-14 lg:py-16 bg-white dark:bg-[#0e1628] text-black dark:text-white transition-all duration-300">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-outfi text-center mb-12 text-indigo-600 dark:text-cyan-400">
                    GET IN TOUCH
                </h2>

                <div className="flex flex-col lg:flex-row gap-14">
                    {/* Left Content */}
                    <div className="lg:w-1/2 space-y-6">
                        <h3 className="text-3xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-400 inline-block text-transparent bg-clip-text">
                            Let’s Talk
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 max-w-md leading-relaxed">
                            I'm always open to collaborating on exciting projects or ideas.
                            Whether it's about frontend development, AI integration, or just
                            tech talk — feel free to reach out. Let's build something amazing together!
                        </p>

                        <div className="space-y-4 text-gray-700 dark:text-gray-300">
                            <p className="flex items-center gap-3">
                                <FaEnvelope className="text-xl text-indigo-600 dark:text-cyan-400" />
                                udaykadi45@gmail.com
                            </p>
                            <p className="flex items-center gap-3">
                                <FaMapMarkerAlt className="text-xl text-indigo-600 dark:text-cyan-400" />
                                Hyderabad, Telangana
                            </p>
                            <p className="flex items-center gap-3">
                                <FaGithub className="text-xl text-indigo-600 dark:text-cyan-400" />
                                <a
                                    href="https://github.com/kadi-uday"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline"
                                >
                                    github.com/kadi-uday
                                </a>
                            </p>
                            <p className="flex items-center gap-3">
                                <FaLinkedin className="text-xl text-indigo-600 dark:text-cyan-400" />
                                <a
                                    href="https://www.linkedin.com/in/uday-kadi-113545373/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline"
                                >
                                    linkedin.com/in/uday-kadi-113545373
                                </a>
                            </p>
                        </div>
                    </div>

                    <ContactForm />
                </div>
            </div>
            <footer className="mt-10 md:mt-14 text-center text-sm lg:text-base text-gray-600 dark:text-gray-400">
                © 2025 Kadi Uday. All rights reserved.
            </footer>
        </section>

    );
};

export default Contact;
