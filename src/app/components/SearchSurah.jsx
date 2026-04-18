
'use client';
import { useState, useEffect, useCallback } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';

export default function SearchSurah({ surahs, onSearchResults, onSearchTerm }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [isSearching, setIsSearching] = useState(false);

    const performSearch = useCallback((term) => {
        if (!term.trim()) {
            onSearchResults(null, false);
            onSearchTerm('');
            return;
        }

        const filteredSurahs = surahs.filter(surah =>
            surah.englishName.toLowerCase().includes(term) ||
            surah.englishNameTranslation.toLowerCase().includes(term) ||
            surah.name.includes(term)
        );

        if (filteredSurahs.length > 0) {
            onSearchResults(filteredSurahs, false);
            onSearchTerm(term);
        } else {
            onSearchResults([], false);
            onSearchTerm(term);
        }
    }, [surahs, onSearchResults, onSearchTerm]);


    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchTerm.trim()) {
                setIsSearching(true);
                onSearchResults(null, true);
                performSearch(searchTerm.toLowerCase().trim());
                setIsSearching(false);
            } else {
                onSearchResults(null, false);
                onSearchTerm('');
            }
        }, 400);

        return () => clearTimeout(timer);
    }, [searchTerm, performSearch, onSearchResults, onSearchTerm]);

    const clearSearch = () => {
        setSearchTerm('');
        onSearchResults(null, false);
        onSearchTerm('');
    };

    return (
        <div className="w-full max-w-2xl mx-auto mb-6">
            <div className="relative group">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search by Surah name (e.g., 'Fatihah', 'Baqarah', 'Yasin')..."
                    className="w-full pl-12 pr-12 py-3.5  rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-[#D1AD3C] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white focus:shadow-lg transition-all duration-300 border border-gray-200 bg-white"
                    autoComplete="off"
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                    <FaSearch className={`w-4 h-4 text-gray-400 transition-colors duration-300 ${searchTerm ? 'text-[#D1AD3C]' : 'group-focus-within:text-[#D1AD3C]'}`} />
                </div>
                {searchTerm && (
                    <button
                        onClick={clearSearch}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-red-500 transition-all duration-300 hover:scale-110"
                    >
                        <FaTimes className="w-4 h-4" />
                    </button>
                )}
            </div>
        </div>
    );
}