import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Section from './ui/Section';
import { ArrowUpRight } from 'lucide-react';
import { reader } from '@/lib/keystatic';

interface GalleryItem {
    title: string;
    category: string;
    image: string;
    size: string;
}

const Gallery = ({ items = [] }: { items?: GalleryItem[] }) => {
    const galleryItems = items.length > 0 ? items : [
        { title: "Campus Meetup Tour", category: "Événement", image: "/images/event-meetup.png", size: "large" },
        { title: "FAB Summit", category: "Conférence", image: "/images/event-conference.png", size: "small" },
        { title: "Club Blockchain", category: "Communauté", image: "/images/community-team.png", size: "tall" },
        { title: "Certification", category: "Formation", image: "/images/event-workshop.png", size: "small" },
        { title: "BB Week", category: "Festival", image: "/images/event-hackathon.png", size: "wide" },
    ];

    return (
        <Section id="gallery" className="relative bg-dark-bg text-white py-32 overflow-hidden">
            {/* Background Blobs */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-20 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[100px]"></div>

            <div className="container mx-auto px-4 mb-20 flex flex-col md:flex-row justify-between items-end relative z-10">
                <div>
                    <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
                        Moments <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">Inoubliables</span>
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl max-w-md">
                        Plongez au cœur de l&apos;action. Revivez l&apos;énergie de notre communauté.
                    </p>
                </div>
                <Link href="/gallery" className="hidden md:flex items-center gap-2 text-white border-b border-white pb-1 hover:text-primary hover:border-primary transition-colors">
                    Voir toute la galerie <ArrowUpRight size={18} />
                </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] sm:auto-rows-[250px] md:auto-rows-[300px]">
                {galleryItems.map((item, index) => (
                    <Link
                        href="/galerie"
                        key={index}
                        className={`
                            group relative rounded-3xl overflow-hidden cursor-pointer block
                            ${item.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
                            ${item.size === 'wide' ? 'md:col-span-2' : ''}
                            ${item.size === 'tall' ? 'md:row-span-2' : ''}
                        `}
                    >
                        <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        <div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <span className="text-primary-400 text-sm font-bold uppercase tracking-wider mb-2 block">{item.category}</span>
                            <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="mt-12 text-center md:hidden">
                <button className="inline-flex items-center gap-2 text-white border-b border-white pb-1">
                    Voir toute la galerie <ArrowUpRight size={18} />
                </button>
            </div>
        </Section>
    );
};

export default Gallery;
