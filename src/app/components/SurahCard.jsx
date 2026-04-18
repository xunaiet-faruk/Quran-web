'use client';
import Link from 'next/link';
import { FaQuran, FaStar } from 'react-icons/fa';

export default function SurahCard({ surah }) {
    return (
        <Link href={`/surah/${surah.number}`}>
            <div className="group relative  rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-200 hover:border-[#D1AD3C] hover:scale-[1.02] transform overflow-hidden h-full flex flex-col">

               
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-700 pointer-events-none">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#D1AD3C] rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#D1AD3C] rounded-full blur-2xl"></div>
                </div>

              
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D1AD3C] via-[#E8C860] to-[#D1AD3C] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                <div className="p-5 relative z-10 flex flex-col h-full">
                    
                    <div className="flex justify-between items-start mb-4 flex-shrink-0">
                        <div className="relative flex-shrink-0">
                            <div className="absolute inset-0 bg-[#D1AD3C] rounded-full blur-sm opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                            <span className="relative bg-gradient-to-br from-[#D1AD3C] to-[#B8942E] text-white text-sm font-bold px-3 py-1.5 rounded-full shadow-md group-hover:scale-110 transition-transform duration-300 flex items-center gap-1 min-w-[48px] justify-center">
                                <FaStar className="w-3 h-3" />
                                {surah.number}
                            </span>
                        </div>
                        <div className="flex items-center gap-1.5 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900  group-hover:bg-[#D1AD3C]/10 px-3 py-1.5 rounded-full transition-all duration-300 flex-shrink-0">
                            <FaQuran className="w-3 h-3 text-[#D1AD3C] flex-shrink-0" />
                            <span className="text-gray-400 group-hover:text-[#D1AD3C] text-xs font-medium transition-colors duration-300 whitespace-nowrap">
                                {surah.numberOfAyahs} verses
                            </span>
                        </div>
                    </div>


                    <div className="flex-grow flex items-center justify-center min-h-[100px]">
                        <div className="text-center w-full">
                            <div className="relative inline-block w-full">
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                    <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#D1AD3C] to-transparent"></div>
                                </div>
                                <div className="font-arabic text-right leading-relaxed text-white group-hover:text-[#D1AD3C] transition-colors duration-300 break-words" dir="rtl" style={{
                                    fontFamily: 'var(--arabic-font, "Noto Naskh Arabic")',
                                    fontSize: 'var(--arabic-font-size, 24px)'
                                }}>
                                    {surah.name}
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="border-t border-gray-100 pt-3 mt-3 flex-shrink-0">
                        <div className="font-semibold text-white text-sm text-center group-hover:text-gray-200 transition-colors duration-300 line-clamp-1">
                            {surah.englishName}
                        </div>
                        <div className="text-gray-400 text-xs text-center mt-1 italic line-clamp-2 min-h-[32px]">
                            {surah.englishNameTranslation}
                        </div>
                    </div>


                    <div className="flex justify-center gap-1 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex-shrink-0">
                        <div className="w-1 h-1 rounded-full bg-[#D1AD3C]/40"></div>
                        <div className="w-1 h-1 rounded-full bg-[#D1AD3C]/60"></div>
                        <div className="w-1 h-1 rounded-full bg-[#D1AD3C]/80"></div>
                        <div className="w-1 h-1 rounded-full bg-[#D1AD3C]"></div>
                        <div className="w-1 h-1 rounded-full bg-[#D1AD3C]/80"></div>
                        <div className="w-1 h-1 rounded-full bg-[#D1AD3C]/60"></div>
                        <div className="w-1 h-1 rounded-full bg-[#D1AD3C]/40"></div>
                    </div>
                </div>
            </div>
        </Link>
    );
}