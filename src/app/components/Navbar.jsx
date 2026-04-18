
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaQuran, FaSearch, FaCog, FaBars, FaTimes } from 'react-icons/fa';
import Setting from './Setting';


const Navbar = () => {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    const navLinks = [
        { name: 'Home', path: '/', icon: FaQuran },
    ];

    const openSettings = () => {
        setIsSettingsOpen(true);
    };

    const isActive = (path) => pathname === path;

    return (
        <>
            <div className="h-16 md:h-20 " />

            <nav
                className={`fixed  top-0 left-0 w-full z-50 transition-all  duration-300 ${scrolled
                        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg'
                        : 'bg-white dark:bg-gray-900 shadow-md'
                    }`}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16 md:h-20">
                      
                        <Link
                            href="/"
                            className="flex items-center gap-2 group transition-transform duration-300 hover:scale-105"
                        >
                            <div className="relative">
                                <FaQuran className="text-2xl md:text-3xl text-[#D1AD3C] transition-all duration-300 group-hover:rotate-6" />
                                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#D1AD3C] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                            </div>
                            <span className="font-bold text-xl md:text-2xl bg-gradient-to-r from-[#D1AD3C] to-[#E6C456] bg-clip-text text-transparent">
                                Quranly
                            </span>
                        </Link>

                        <div className="hidden md:flex items-center gap-1 lg:gap-2">
                            {navLinks.map((link) => {
                                const Icon = link.icon;
                                const active = isActive(link.path);
                                return (
                                    <Link
                                        key={link.path}
                                        href={link.path}
                                        className={`relative px-4 lg:px-6 py-2 rounded-lg font-medium transition-all duration-300 group flex items-center gap-2 ${active
                                                ? 'text-[#D1AD3C]'
                                                : 'text-gray-700 dark:text-gray-200 hover:text-[#D1AD3C]'
                                            }`}
                                    >
                                        <Icon className="text-lg transition-transform group-hover:scale-110" />
                                        <span>{link.name}</span>
                                        <span
                                            className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#D1AD3C] transition-all duration-300 ease-out ${active
                                                    ? 'scale-x-100'
                                                    : 'scale-x-0 group-hover:scale-x-100'
                                                }`}
                                        />
                                    </Link>
                                );
                            })}

                      
                            <button
                                onClick={openSettings}
                                className="relative cursor-pointer px-4 lg:px-6 py-2 rounded-lg font-medium transition-all duration-300 group flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-[#D1AD3C]"
                            >
                                <FaCog className="text-lg transition-transform group-hover:scale-110 group-hover:rotate-90" />
                                <span>Settings</span>
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#D1AD3C] scale-x-0 group-hover:scale-x-100 transition-all duration-300" />
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-[#D1AD3C]"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                >
                    <div className="px-4 pt-2 pb-4 space-y-1 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
                        {navLinks.map((link) => {
                            const Icon = link.icon;
                            const active = isActive(link.path);
                            return (
                                <Link
                                    key={link.path}
                                    href={link.path}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-200 relative overflow-hidden group ${active
                                            ? 'text-[#D1AD3C] bg-[#D1AD3C]/10'
                                            : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800'
                                        }`}
                                >
                                    <Icon className="text-lg" />
                                    <span>{link.name}</span>
                                    {active && (
                                        <span className="absolute left-0 top-0 bottom-0 w-1 bg-[#D1AD3C]" />
                                    )}
                                </Link>
                            );
                        })}

                        {/* Mobile Settings Button */}
                        <button
                            onClick={openSettings}
                            className="flex items-center gap-3 w-full px-4 py-3 rounded-lg font-medium transition-all duration-200 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"
                        >
                            <FaCog className="text-lg" />
                            <span>Settings</span>
                        </button>
                    </div>
                </div>
            </nav>

            <Setting
                isOpen={isSettingsOpen}
                onClose={() => setIsSettingsOpen(false)}
            />
        </>
    );
};

export default Navbar;