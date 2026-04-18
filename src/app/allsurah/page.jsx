
import Link from 'next/link';
import SurahCard from './components/SurahCard';

async function getSurahs() {
    const res = await fetch('https://api.alquran.cloud/v1/surah', { cache: 'force-cache' });
    const data = await res.json();
    return data.data;
}

export default async function HomePage() {
    const surahs = await getSurahs();

    return (
        <div className="min-h-screen ">
           
            <header className="bg-white shadow-md sticky top-0 z-10">
                <div className="container mx-auto px-4 py-6">
                    <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                        All Quran
                    </h1>
                    <p className="text-center text-gray-500 mt-2">
                        Holy Quran | {surahs.length} Surahs
                    </p>
                </div>
            </header>

            <main className="container mx-auto px-4 py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {surahs.map((surah) => (
                        <SurahCard key={surah.number} surah={surah} />
                    ))}
                </div>
            </main>

            <footer className="bg-white border-t mt-10 py-6">
                <p className="text-center text-gray-500 text-sm">
                    Quran | Al-Quran Cloud API
                </p>
            </footer>
        </div>
    );
}