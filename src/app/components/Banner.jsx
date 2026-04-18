
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Banner = () => {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
          
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src="/banner.jpg"  
                    alt="Islamic background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            <div className="absolute inset-0 bg-black/65" />

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-6"
                >
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-arabic text-white leading-tight drop-shadow-2xl">
                        بِسْمِ اللَّهِ الرَّحْمَـٰنِ الرَّحِيمِ
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    <p className="text-[#D1AD3C] text-sm sm:text-base md:text-lg uppercase tracking-[0.2em] font-semibold mb-3">
                        Know the Real
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                >
                    <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-xl">
                        Tafseer of Qur'an
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="flex justify-center items-center gap-4 mb-8"
                >
                    <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent to-[#D1AD3C]" />
                    <motion.div
                        className="text-[#D1AD3C] text-2xl md:text-3xl font-arabic"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, delay: 1, repeat: Infinity, repeatDelay: 3 }}
                    >
                        ﴿ ﴾
                    </motion.div>
                    <div className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent to-[#D1AD3C]" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                >
                    <p className="text-gray-200 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed italic">
                        "When things are too hard to handle, retreat & count your blessings instead"
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <button className="group relative px-8 py-3 md:px-10 md:py-4 bg-[#D1AD3C] text-gray-900 font-bold text-base md:text-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl shadow-lg">
                        <span className="relative z-10 flex items-center gap-2">
                            Explore Tafseer
                            <motion.svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </motion.svg>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-[#E6C456] to-[#B8922E] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>
                </motion.div>
            </div>

            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                <svg
                    className="relative block w-full h-12 md:h-16"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        fill="#ffffff"
                        opacity="0.3"
                    />
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        fill="#ffffff"
                        opacity="0.6"
                    />
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        fill="#ffffff"
                    />
                </svg>
            </div>
        </section>
    );
};

export default Banner;