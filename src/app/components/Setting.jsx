'use client';
import { useState, useEffect } from 'react';
import { FaTimes, FaFont, FaTextHeight, FaPalette, FaSave } from 'react-icons/fa';

const Setting = ({ isOpen, onClose }) => {
    const [arabicFont, setArabicFont] = useState('Noto Naskh Arabic');
    const [arabicFontSize, setArabicFontSize] = useState(24);
    const [translationFontSize, setTranslationFontSize] = useState(16);

   
    useEffect(() => {
        const savedSettings = localStorage.getItem('quranSettings');
        if (savedSettings) {
            const settings = JSON.parse(savedSettings);
            setArabicFont(settings.arabicFont || 'Noto Naskh Arabic');
            setArabicFontSize(settings.arabicFontSize || 24);
            setTranslationFontSize(settings.translationFontSize || 16);
        }
    }, []);

    useEffect(() => {
       
        const fontMap = {
            'Noto Naskh Arabic': 'var(--font-noto-naskh-arabic)',
            'Amiri': 'var(--font-amiri)',
            'Scheherazade New': 'var(--font-scheherazade-new)',
            'Tajawal': 'var(--font-tajawal)',
            'Cairo': 'var(--font-cairo)'
        };
        document.documentElement.style.setProperty('--arabic-font', fontMap[arabicFont] || 'var(--font-noto-naskh-arabic)');

        document.documentElement.style.setProperty('--arabic-font-size', `${arabicFontSize}px`);

        document.documentElement.style.setProperty('--translation-font-size', `${translationFontSize}px`);

       
        const settings = {
            arabicFont,
            arabicFontSize,
            translationFontSize
        };
        localStorage.setItem('quranSettings', JSON.stringify(settings));
    }, [arabicFont, arabicFontSize, translationFontSize]);


    const arabicFonts = [
        { name: 'Noto Naskh Arabic', value: 'Noto Naskh Arabic' },
        { name: 'Amiri', value: 'Amiri' },
        { name: 'Scheherazade New', value: 'Scheherazade New' },
        { name: 'Tajawal', value: 'Tajawal' },
        { name: 'Cairo', value: 'Cairo' }
    ];

    const resetToDefault = () => {
        setArabicFont('Noto Naskh Arabic');
        setArabicFontSize(24);
        setTranslationFontSize(16);
    };

    return (
        <>
           
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/10 backdrop-blur-sm z-40 transition-opacity duration-300"
                    onClick={onClose}
                />
            )}

     
            <div
                className={`fixed top-0 right-0 h-full w-full max-w-md bg-white dark:bg-gray-900 shadow-2xl z-50 transform transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
               
                <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#D1AD3C] to-[#B8942E] rounded-xl flex items-center justify-center">
                            <FaPalette className="text-white text-xl" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Settings</h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Customize your reading experience</p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                        <FaTimes className="text-gray-500 dark:text-gray-400 text-xl" />
                    </button>
                </div>

               
                <div className="p-6 space-y-8 overflow-y-auto h-[calc(100%-80px)]">

                   
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <FaFont className="text-[#D1AD3C] text-lg" />
                            <label className="font-semibold text-gray-700 dark:text-gray-300">
                                Arabic Font
                            </label>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            {arabicFonts.map((font) => (
                                <button
                                    key={font.value}
                                    onClick={() => setArabicFont(font.value)}
                                    className={`flex-1 py-3 rounded-lg font-medium transition-all duration-300 ${arabicFont === font.value
                                        ? 'bg-[#D1AD3C] text-white shadow-md'
                                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                        }`}
                                >
                                    {font.name}
                                </button>
                            ))}
                        </div>
                  
                        <div className="mt-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg text-right">
                            <p
                                className="text-lg leading-relaxed"
                                dir="rtl"
                                style={{ fontFamily: arabicFont }}
                            >
                                بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                            </p>
                            <p className="text-xs text-gray-500 mt-1">Preview</p>
                        </div>
                    </div>

                  
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <FaTextHeight className="text-[#D1AD3C] text-lg" />
                            <label className="font-semibold text-gray-700 dark:text-gray-300">
                                Arabic Font Size
                            </label>
                        </div>
                        <div className="flex items-center gap-4">
                            <input
                                type="range"
                                min="16"
                                max="40"
                                step="1"
                                value={arabicFontSize}
                                onChange={(e) => setArabicFontSize(parseInt(e.target.value))}
                                className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#D1AD3C]"
                            />
                            <span className="text-sm font-semibold text-[#D1AD3C] min-w-[50px] text-center">
                                {arabicFontSize}px
                            </span>
                        </div>
                        <div className="text-right">
                            <p
                                className="leading-relaxed"
                                style={{
                                    fontSize: `${arabicFontSize}px`,
                                    fontFamily: arabicFont
                                }}
                            >
                                الرَّحْمَٰنِ الرَّحِيمِ
                            </p>
                        </div>
                        <div className="flex justify-between text-xs text-gray-400 px-1">
                            <span>Smaller</span>
                            <span>Larger</span>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <FaTextHeight className="text-[#D1AD3C] text-lg" />
                            <label className="font-semibold text-gray-700 dark:text-gray-300">
                                Translation Font Size
                            </label>
                        </div>
                        <div className="flex items-center gap-4">
                            <input
                                type="range"
                                min="12"
                                max="28"
                                step="1"
                                value={translationFontSize}
                                onChange={(e) => setTranslationFontSize(parseInt(e.target.value))}
                                className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#D1AD3C]"
                            />
                            <span className="text-sm font-semibold text-[#D1AD3C] min-w-[50px] text-center">
                                {translationFontSize}px
                            </span>
                        </div>
                        <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                            <p style={{ fontSize: `${translationFontSize}px` }} className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                In the name of Allah, the Most Gracious, the Most Merciful
                            </p>
                        </div>
                        <div className="flex justify-between text-xs text-gray-400 px-1">
                            <span>Smaller</span>
                            <span>Larger</span>
                        </div>
                    </div>

                    <div className="space-y-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                        <div className="bg-gradient-to-r from-[#D1AD3C]/5 to-[#B8942E]/5 rounded-lg p-4">
                            <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Current Settings:</p>
                            <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                                <p>• Arabic Font: <span className="text-[#D1AD3C] font-medium">{arabicFont}</span></p>
                                <p>• Arabic Size: <span className="text-[#D1AD3C] font-medium">{arabicFontSize}px</span></p>
                                <p>• Translation Size: <span className="text-[#D1AD3C] font-medium">{translationFontSize}px</span></p>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={resetToDefault}
                        className="w-full py-3 rounded-lg border-2 border-[#D1AD3C] text-[#D1AD3C] font-semibold hover:bg-[#D1AD3C] hover:text-white transition-all duration-300"
                    >
                        Reset to Default
                    </button>

                    <div className="pt-2 text-center">
                        <div className="flex items-center justify-center gap-2">
                            <FaSave className="text-gray-400 text-xs" />
                            <p className="text-xs text-gray-400">
                                Settings are automatically saved
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Setting;