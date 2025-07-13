import React from "react";
import CertificateCard from "./CertificateCard";
import certificatesData from "../utils/certificatesData";

const Certificates = () => {
    return (
        <section className="min-h-screen px-6 py-12 md:py-14 lg:py-16 bg-white dark:bg-[#0e1628] text-black dark:text-white transition-all duration-300">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-outfi text-center mb-10 text-indigo-600 dark:text-cyan-400">
                    CERTIFICATES
                </h2>

                <div className="flex flex-col gap-10">
                    {certificatesData.map((cert, index) => (
                        <CertificateCard key={index} {...cert} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
