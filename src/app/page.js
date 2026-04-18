
'use client';
import { useState, useEffect, useMemo } from 'react';
import Banner from "./components/Banner";
import SurahCard from "./components/SurahCard";
import SearchSurah from "./components/SearchSurah";

export default function Home() {
  const [surahs, setSurahs] = useState([]);
  const [searchResults, setSearchResults] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const loadSurahs = async () => {
      try {
        const res = await fetch('https://api.alquran.cloud/v1/surah', {
          cache: 'force-cache'
        });
        const data = await res.json();
        setSurahs(data.data);
      } catch (error) {
        console.error('Error loading surahs:', error);
      } finally {
        setLoading(false);
      }
    };
    loadSurahs();
  }, []);

  const handleSearchResults = (results, searching) => {
    setSearchResults(results);
    setIsSearching(searching || false);
  };

  const handleSearchTerm = (term) => {
    setSearchTerm(term);
  };

 
  const displaySurahs = useMemo(() => {
    if (isSearching) return surahs;
    return searchResults !== null ? searchResults : surahs;
  }, [searchResults, surahs, isSearching]);

  const hasSearchResults = searchResults !== null && searchResults.length > 0 && !isSearching;
  const hasNoResults = searchResults !== null && searchResults.length === 0 && searchTerm !== '' && !isSearching;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#D1AD3C] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading Holy Quran...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Banner />

      
      <section className="py-12  min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#D1AD3C] mb-2">
              القرآن الكريم
            </h2>
            <p className="text-lg text-white">
              Read and explore all 114 Surahs of the Holy Quran
            </p>
          </div>

         
          <SearchSurah
            surahs={surahs}
            onSearchResults={handleSearchResults}
            onSearchTerm={handleSearchTerm}
          />

          <div className="">
            {hasSearchResults && (
              <div className="flex justify-center items-center">
                <div className="bg-gradient-to-r from-[#D1AD3C]/10 to-[#B8942E]/10 rounded-full px-6 py-2.5 inline-flex items-center gap-2 animate-fadeIn">
                  <span className="text-gray-700 text-sm md:text-base">
                    Found <span className="font-bold text-[#D1AD3C]">{displaySurahs.length}</span>
                    {displaySurahs.length === 1 ? ' surah' : ' surahs'} matching
                  </span>
                  <span className="font-semibold text-[#D1AD3C] bg-white/50 px-2 py-0.5 rounded-full text-sm">
                    "{searchTerm}"
                  </span>
                </div>
              </div>
            )}
          </div>

      
          <div className="mb-4">
            {hasNoResults && (
              <div className="text-center py-12 animate-fadeIn ">
                <div className="inline-block bg-white rounded-xl shadow-md p-8 border-2 border-amber-400">
                  <p className="text-gray-500 text-lg mb-2">No surahs found</p>
                  <p className="text-gray-400 text-sm">
                    No surah matching "<span className="font-semibold">{searchTerm}</span>" was found.
                  </p>
                  <p className="text-gray-400 text-sm mt-2">
                    Try searching for: Fatihah, Baqarah, Yasin, Rahman, Mulk, Ikhlas
                  </p>
                </div>
              </div>
            )}
          </div>

         
          <div className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 auto-rows-fr">
              {displaySurahs.map((surah, index) => (
                <div
                  key={surah.number}
                  className="animate-fadeIn"
                  style={{ animationDelay: `${index * 0.02}s` }}
                >
                  <SurahCard surah={surah} />
                </div>
              ))}
            </div>

           
            {isSearching && (
              <div className="fixed inset-0 bg-white/50 backdrop-blur-sm z-40 flex items-center justify-center pointer-events-none">
                <div className="bg-white rounded-xl shadow-xl p-5 flex items-center gap-3 pointer-events-auto">
                  <div className="w-5 h-5 border-3 border-[#D1AD3C] border-t-transparent rounded-full animate-spin"></div>
                  <span className="text-gray-700 text-sm">Searching...</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}