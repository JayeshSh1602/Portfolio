"use client"
import React from 'react'
import Image from 'next/image'; // Add this line

const Hero = () => {
    const openPdf = () => {
        window.open("/resume.pdf", "_blank"); // opens in new tab
    };
    return (
        <>
            <h1 className="absolute top-4 left-6 z-20 text-black text-xl md:text-2xl font-bold">
                &lt;Jayesh Sharma/&gt;
            </h1>

            <div className="relative w-full h-screen flex items-center bg-[#E5E5E5]">
                <div className="absolute inset-0 bg-black hidden md:block"></div>
                <div className="absolute inset-0 bg-[#E5E5E5] clip-left hidden md:block"></div>

                <div className="relative z-10 flex flex-col md:flex-row w-full justify-center md:justify-between items-center px-[5vw] md:px-10">
                    <div className="flex flex-col gap-3 text-black text-center md:text-left max-w-2xl mt-20 md:mt-0">
                        <p className="text-gray-700 font-bold text-lg md:text-xl">Hi, I am</p>
                        <p className="text-black font-bold text-5xl md:text-7xl">Jayesh Sharma.</p>
                        <p className="text-gray-700 font-medium text-3xl md:text-5xl">I build things for the web.</p>

                        <div className="flex flex-row gap-4 mt-6 justify-center md:justify-start">
                            {/* Email / At sign */}
                            <button onClick={openPdf} className="p-3 rounded-lg border border-gray-400 bg-gray-300 text-gray-700 hover:bg-gray-500 hover:text-white transition">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-user-icon lucide-file-user"><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M15 18a3 3 0 1 0-6 0" /><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" /><circle cx="12" cy="13" r="2" /></svg>
                            </button>

                            {/* GitHub */}
                            <a
                                href="https://github.com/JayeshSh1602"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-lg border border-gray-400 bg-gray-300 text-gray-700 hover:bg-gray-500 hover:text-white transition inline-block"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github">
                                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                    <path d="M9 18c-4.51 2-5-2-7-2" />
                                </svg>
                            </a>

                            {/* LinkedIn */}
                            <a
                                href="https://github.com/JayeshSh1602"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-lg border border-gray-400 bg-gray-300 text-gray-700 hover:bg-gray-500 hover:text-white transition inline-block"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                    <rect width="4" height="12" x="2" y="9" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="flex justify-center items-center mt-8 md:mt-0">
                        <Image // Changed <img> to <Image>
                            src="/peacemaker.png"
                            alt="Profile"
                            width={200} // Added width
                            height={200} // Added height (adjust as needed for proper ratio)
                            className="w-[200px] h-auto md:w-[350px] rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;