'use client';
import Link from 'next/link';
import { FaQuran, FaHeart, FaGlobe, FaGithub, FaTwitter, FaEnvelope, FaArrowUp, FaBook, FaSearch, FaCog } from 'react-icons/fa';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white w-full overflow-hidden">
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-20 left-10 w-64 h-64 bg-[#D1AD3C] rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#D1AD3C] rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-[#D1AD3C] rounded-xl flex items-center justify-center shadow-lg transform hover:rotate-12 transition-transform duration-300">
                                <FaQuran className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold bg-gradient-to-r from-[#D1AD3C] to-[#E8C860] bg-clip-text text-transparent">
                                    Al-Quran
                                </h3>
                                <p className="text-gray-400 text-sm">The Holy Quran</p>
                            </div>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            A beautiful digital platform to read and understand the Holy Quran with translations,
                            search functionality, and personalized reading experience.
                        </p>
                        <div className="flex gap-3 pt-2">
                            <a href="#" className="w-9 h-9 bg-gray-700 hover:bg-[#D1AD3C] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                                <FaGithub className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-9 h-9 bg-gray-700 hover:bg-[#D1AD3C] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                                <FaTwitter className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-9 h-9 bg-gray-700 hover:bg-[#D1AD3C] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                                <FaEnvelope className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold flex items-center gap-2">
                            <FaBook className="text-[#D1AD3C]" />
                            Quick Links
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-gray-300 hover:text-[#D1AD3C] transition-colors duration-300 flex items-center gap-2 group">
                                    <span className="w-1 h-1 bg-[#D1AD3C] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    All Surahs
                                </Link>
                            </li>
                            <li>
                                <Link href="/search" className="text-gray-300 hover:text-[#D1AD3C] transition-colors duration-300 flex items-center gap-2 group">
                                    <span className="w-1 h-1 bg-[#D1AD3C] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    Search Verses
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-300 hover:text-[#D1AD3C] transition-colors duration-300 flex items-center gap-2 group">
                                    <span className="w-1 h-1 bg-[#D1AD3C] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-300 hover:text-[#D1AD3C] transition-colors duration-300 flex items-center gap-2 group">
                                    <span className="w-1 h-1 bg-[#D1AD3C] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold flex items-center gap-2">
                            <FaCog className="text-[#D1AD3C]" />
                            Features
                        </h4>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-gray-300">
                                <FaSearch className="w-3 h-3 text-[#D1AD3C]" />
                                <span>Advanced Search</span>
                            </li>
                            <li className="flex items-center gap-2 text-gray-300">
                                <FaGlobe className="w-3 h-3 text-[#D1AD3C]" />
                                <span>Multiple Translations</span>
                            </li>
                            <li className="flex items-center gap-2 text-gray-300">
                                <FaBook className="w-3 h-3 text-[#D1AD3C]" />
                                <span>114 Surahs</span>
                            </li>
                            <li className="flex items-center gap-2 text-gray-300">
                                <FaHeart className="w-3 h-3 text-[#D1AD3C]" />
                                <span>Bookmark Verses</span>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold flex items-center gap-2">
                            <FaEnvelope className="text-[#D1AD3C]" />
                            Stay Updated
                        </h4>
                        <p className="text-gray-300 text-sm">
                            Get updates about new features and Islamic content.
                        </p>
                        <div className="flex flex-col gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-[#D1AD3C] transition-colors duration-300"
                            />
                            <button className="bg-gradient-to-r from-[#D1AD3C] to-[#B8942E] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-8 mt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                            <FaQuran className="w-4 h-4 text-[#D1AD3C]" />
                            <span>&copy; 2024 Al-Quran App. All rights reserved.</span>
                        </div>

                        <div className="flex items-center gap-6 text-gray-400 text-sm">
                            <Link href="/privacy" className="hover:text-[#D1AD3C] transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="hover:text-[#D1AD3C] transition-colors">
                                Terms of Service
                            </Link>
                            <button
                                onClick={scrollToTop}
                                className="flex items-center gap-2 hover:text-[#D1AD3C] transition-all duration-300 group"
                            >
                                <span>Back to Top</span>
                                <FaArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-8">
                    <p className="text-gray-500 text-xs flex items-center justify-center gap-1">
                        Made with <FaHeart className="w-3 h-3 text-red-500 animate-pulse" /> for the Holy Quran
                    </p>
                </div>
            </div>
        </footer>
    );
}