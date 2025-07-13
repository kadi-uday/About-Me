import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const CertificateCard = ({ title, org, date, image, desc }) => {
    return (
        <div className="flex flex-col lg:flex-row gap-6 rounded-xl p-5 bg-gradient-to-r from-cyan-50 to-indigo-50 dark:from-[#1e273f] dark:to-[#131c2d] shadow-lg">

            {/* Left Image */}
            <div className="w-full  lg:w-1/2 rounded-lg overflow-hidden transition-transform duration-500 hover:scale-105">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-auto object-cover rounded-lg "
                />
            </div>

            {/* Right Content */}
            <div className="flex flex-col p-3 md:p-5 gap-4 w-full">
                <h3 className="text-2xl md:text-3xl font-bold text-indigo-700 dark:text-cyan-400 mb-2">{title}</h3>
                <p className="md:text-base text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{desc}</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 my-2">
                    <span className="font-bold ">Issued By:</span> {org}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                    <span className="font-bold">Date:</span> {date}
                </p>
            </div>
        </div>
    );
};

export default CertificateCard;
