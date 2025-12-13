import { reader } from '@/lib/keystatic';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Galerie",
    description: "Revivez les moments forts de la communauté Blockchain Bénin en images. Hackathons, conférences et rencontres.",
};

const getColorForCategory = (category: string) => {
    switch (category) {
        case 'event': return 'bg-primary-500';
        case 'workshop': return 'bg-secondary-500';
        case 'community': return 'bg-accent-500';
        default: return 'bg-primary-500';
    }
};

const getLabelForCategory = (category: string) => {
    switch (category) {
        case 'event': return 'Événement';
        case 'workshop': return 'Formation';
        case 'community': return 'Communauté';
        default: return 'Événement';
    }
};

const GalleryPage = async () => {
    const albums = await reader.collections.albums.all();

    const albumsWithCounts = await Promise.all(albums.map(async (album) => {
        const entry = album.entry;
        const content = await entry.content();
        let imageCount = 0;
        const countImages = (nodes: any[]) => {
            for (const node of nodes) {
                if (node.type === 'image') imageCount++;
                else if (node.children) countImages(node.children);
            }
        };
        countImages(content);
        return { ...album, imageCount };
    }));

    const sortedAlbums = albumsWithCounts.sort((a, b) =>
        new Date(b.entry.date).getTime() - new Date(a.entry.date).getTime()
    );

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <div className="pt-24 lg:pt-44 pb-12">
                {/* Header Section */}
                <div className="container mx-auto px-4 mb-16 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary-600 mb-4">
                        Notre Galerie
                    </h1>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                        Revivez nos meilleurs moments en images : événements, formations, rencontres et célébrations de notre communauté blockchain
                    </p>
                </div>

                {/* Events Grid */}
                <div className="container mx-auto px-4 max-w-6xl mb-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {sortedAlbums.map((album) => {
                            const entry = album.entry;
                            const colorClass = getColorForCategory(entry.category);

                            return (
                                <Link
                                    href={`/galerie/${album.slug}`}
                                    key={album.slug}
                                    className={`${colorClass} rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer group block`}
                                >
                                    {/* Image Placeholder */}
                                    <div className="aspect-video bg-black/10 relative">
                                        {entry.cover && (
                                            <Image
                                                src={entry.cover}
                                                alt={entry.title}
                                                fill
                                                className="object-cover"
                                            />
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                        <div className="absolute bottom-4 left-4 text-white font-bold text-lg drop-shadow-md">
                                            {new Date(entry.date).toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                                                {getLabelForCategory(entry.category)}
                                            </span>
                                        </div>
                                        <h3 className="text-white font-bold text-2xl mb-4 drop-shadow-md line-clamp-2">
                                            {entry.title}
                                        </h3>

                                        {/* Event Info */}
                                        <div className="space-y-2 mb-6">
                                            <div className="flex items-center gap-2 text-white/80 text-sm">
                                                <Users size={16} />
                                                <span>{album.imageCount} photos</span>
                                            </div>
                                        </div>

                                        {/* View Button */}
                                        <div className="w-full bg-white/20 hover:bg-white/30 text-white py-3 px-6 rounded-full font-medium transition-colors backdrop-blur-sm text-center">
                                            Voir l'album →
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>

                {/* Stats Section */}
                <div className="container mx-auto px-4 max-w-4xl mb-16">
                    <div className="bg-gradient-to-r from-[#4CAF50] to-[#7AD04F] rounded-3xl p-12 text-center text-white">
                        <h2 className="text-3xl font-bold mb-8">
                            En chiffres
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div>
                                <div className="text-5xl font-bold mb-2">30+</div>
                                <div className="text-white/90">Événements organisés</div>
                            </div>
                            <div>
                                <div className="text-5xl font-bold mb-2">2000+</div>
                                <div className="text-white/90">Participants</div>
                            </div>
                            <div>
                                <div className="text-5xl font-bold mb-2">500+</div>
                                <div className="text-white/90">Photos partagées</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="bg-[#0066CC] rounded-3xl p-12 text-center text-white">
                        <h2 className="text-3xl font-bold mb-4">
                            Rejoignez nos prochains événements
                        </h2>
                        <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                            Ne manquez pas nos prochaines rencontres, formations et célébrations. Inscrivez-vous pour être informé !
                        </p>
                        <button className="px-8 py-4 bg-white text-[#0066CC] rounded-full font-bold hover:bg-gray-100 transition-colors">
                            Voir le calendrier d&apos;événements
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
};

export default GalleryPage;
