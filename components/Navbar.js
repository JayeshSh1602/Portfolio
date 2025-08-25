"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link'; // Import the Link component

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const hero = document.getElementById('hero');

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const heroBottom = hero?.getBoundingClientRect().bottom || 0;

            if (heroBottom > 0) {
                setShowNavbar(true);
            } else {
                if (currentScrollY < lastScrollY) {
                    setShowNavbar(true);
                } else {
                    setShowNavbar(false);
                }
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <>
            <nav
                className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${showNavbar ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
            >
                <ul className="w-full max-w-[500px] flex items-center justify-center space-x-5 px-5 py-3 rounded-xl shadow-lg backdrop-blur-md bg-black/60 border border-white/20 text-white text-sm font-medium transition-all duration-300">
                    <Link href="#about"><li className="cursor-pointer hover:text-green-400 hover:scale-105 transition-transform">About me</li></Link>
                    <Link href="#education"><li className="cursor-pointer hover:text-green-400 hover:scale-105 transition-transform">Education</li></Link>
                    <Link href="#skills"><li className="cursor-pointer hover:text-green-400 hover:scale-105 transition-transform">Skills</li></Link>
                    <Link href="#projects"><li className="cursor-pointer hover:text-green-400 hover:scale-105 transition-transform">Projects</li></Link>
                    <Link href="#blog"><li className="cursor-pointer hover:text-green-400 hover:scale-105 transition-transform">Blog</li></Link>
                    <Link href="#contact"><li className="cursor-pointer hover:text-green-400 hover:scale-105 transition-transform">Contact</li></Link>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;