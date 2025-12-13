import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { reader } from '@/lib/keystatic';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, MapPin } from 'lucide-react';
import { Metadata } from 'next';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const album = await reader.collections.albums.read(slug);

    if (!album) {
        return { title: 'Album non trouvé' };
    }

    return {
        title: `${album.title} | Galerie Blockchain Bénin`,
        description: `Photos de l'album ${album.title}`,
    };
}

export async function generateStaticParams() {
    const albums = await reader.collections.albums.all();
    return albums.map((album) => ({
        slug: album.slug,
    }));
}

export default async function AlbumPage({ params }: PageProps) {
    const { slug } = await params;
    const album = await reader.collections.albums.read(slug);

    if (!album) {
        notFound();
    }

    const content = await album.content();
    const images: { src: string; alt: string }[] = [];
    const extractImages = (nodes: any[]) => {
        for (const node of nodes) {
            if (node.type === 'image') {
                images.push({ src: node.src, alt: node.alt || album.title });
            } else if (node.children) {
                extractImages(node.children);
            }
        }
    };
    extractImages(content);

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <div className="pt-24 lg:pt-44 pb-12">
                {/* Header */}
                <div className="container mx-auto px-4 mb-12">
                    <Link href="/galerie" className="inline-flex items-center gap-2 text-gray-500 hover:text-primary-600 mb-6 transition-colors">
                        <ArrowLeft size={20} />
                        Retour à la galerie
                    </Link>

                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                        {album.title}
                    </h1>

                    <div className="flex items-center gap-4 text-gray-500">
                        <div className="flex items-center gap-2">
                            <Calendar size={18} />
                            <span>{new Date(album.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                        </div>
                        <div className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                            {images.length} photos
                        </div>
                    </div>
                </div>

                {/* Photos Grid */}
                <div className="container mx-auto px-4">
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
                        {images.map((img, index) => (
                            <div key={index} className="break-inside-avoid relative group rounded-2xl overflow-hidden">
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    width={800}
                                    height={600}
                                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                {img.alt && img.alt !== album.title && (
                                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <p className="text-white text-sm font-medium">{img.alt}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
