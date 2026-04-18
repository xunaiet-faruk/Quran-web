import { notFound } from 'next/navigation';
import { FaArrowLeft, FaBookOpen } from 'react-icons/fa';
import localSurahs from '../../data/surahs.json';

// Force static generation for all pages
export const dynamic = 'force-static';
export const dynamicParams = true;

async function getSurahData(id) {
    try {
        const [arabicRes, englishRes] = await Promise.all([
            fetch(`https://api.alquran.cloud/v1/surah/${id}`, { cache: 'force-cache' }),
            fetch(`https://api.alquran.cloud/v1/surah/${id}/en.asad`, { cache: 'force-cache' })
        ]);

        if (!arabicRes.ok || !englishRes.ok) {
            return null;
        }

        const arabicData = await arabicRes.json();
        const englishData = await englishRes.json();

        return {
            arabic: arabicData.data,
            english: englishData.data
        };
    } catch (error) {
        console.error('Error fetching surah data:', error);
        return null;
    }
}

export async function generateStaticParams() {
    // Use local surahs.json as fallback to ensure all 114 surahs are generated
    // This prevents 404 errors during Vercel deployment when API might fail
    return localSurahs.map((surah) => ({
        id: surah.id.toString(),
    }));
}

export default async function SurahPage({ params }) {
    const { id } = await params;
    const surahData = await getSurahData(id);

    if (!surahData) {
        notFound();
    }

    const arabicEdition = surahData.arabic;
    const englishEdition = surahData.english;

    if (!arabicEdition || !englishEdition) {
        return <div className="text-center py-20 text-red-500">Error loading data</div>;
    }


    const combinedAyahs = [];
    for (let i = 0; i < arabicEdition.ayahs.length; i++) {
        combinedAyahs.push({
            number: arabicEdition.ayahs[i].numberInSurah,
            arabic: arabicEdition.ayahs[i].text,
            english: englishEdition.ayahs[i]?.text || '',
        });
    }

    return (
        <div className="min-h-screen bg-black">

            <div className="bg-gradient-to-b from-gray-900 to-black py-8 border-b border-[#D1AD3C]/20">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between">
                        <a href="/" className="flex items-center gap-2 bg-[#D1AD3C] text-black px-4 py-2 rounded-lg hover:bg-[#f0c63a] transition-all duration-300 hover:scale-105 font-semibold">
                            <FaArrowLeft />
                            <span>Back to Surahs</span>
                        </a>
                        <div className="text-center flex-1">
                            <div className="flex items-center justify-center gap-3 mb-2">
                                <FaBookOpen className="text-[#D1AD3C] text-2xl animate-pulse" />
                                <h1 className="text-4xl text-[#D1AD3C] font-arabic">{arabicEdition.name}</h1>
                            </div>
                            <p className="text-xl text-gray-300">{englishEdition.name} ({englishEdition.englishName})</p>
                            <p className="text-gray-500 mt-2 text-sm">Total Verses: {arabicEdition.ayahs.length}</p>
                        </div>
                        <div className="w-24"></div>
                    </div>
                </div>
            </div>

            <main className="container mx-auto px-4 py-10 max-w-4xl ">
                <div className="space-y-4">
                    {combinedAyahs.map((ayah) => (
                        <div
                            key={ayah.number}
                            className="group bg-gray-900/50 rounded-xl hover:bg-gray-900 transition-all duration-500 hover:scale-[1.01] animate-fadeIn  border-[#D1AD3C] border-b-2 hover:border-[#D1AD3C]/30"
                        >
                            <div className="p-6">

                                <div className="flex justify-end mb-3">
                                    <span className="bg-[#D1AD3C]/10 text-[#D1AD3C] text-xs font-bold px-3 py-1 rounded-full group-hover:bg-[#D1AD3C] group-hover:text-black transition-all duration-300">
                                        Verse {ayah.number}
                                    </span>
                                </div>

                                <div className="text-right mb-4" dir="rtl">
                                    <div
                                        className="font-arabic leading-loose"
                                        style={{
                                            fontFamily: 'var(--arabic-font, "Noto Naskh Arabic")',
                                            fontSize: 'var(--arabic-font-size, 24px)',
                                            color: '#D1AD3C',
                                            lineHeight: '1.8'
                                        }}
                                    >
                                        {ayah.arabic}
                                    </div>
                                </div>


                                <div className="relative my-4">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-gray-800"></div>
                                    </div>
                                    <div className="relative flex justify-center">
                                        <span className="bg-black px-2 text-xs text-gray-600">﴿ ﴾</span>
                                    </div>
                                </div>

                                <div className="pl-0">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="inline-block w-1 h-3 bg-[#D1AD3C] rounded-full"></span>
                                        <span className="text-gray-500 text-xs uppercase tracking-wider">Translation</span>
                                    </div>
                                    <div
                                        className="text-gray-300 leading-relaxed"
                                        style={{
                                            fontSize: 'var(--translation-font-size, 16px)'
                                        }}
                                    >
                                        {ayah.english}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 pt-8 border-t border-gray-800">
                    <div className="flex justify-between items-center">
                        <a href="/" className="flex items-center gap-2 text-gray-400 hover:text-[#D1AD3C] transition-colors text-sm">
                            <FaArrowLeft className="w-4 h-4" />
                            <span>Back to All Surahs</span>
                        </a>
                        <p className="text-xs text-gray-600">
                            Surah {arabicEdition.englishName} • {arabicEdition.ayahs.length} verses
                        </p>
                        <div className="w-[140px]"></div>
                    </div>
                </div>
            </main>
        </div>
    );
}