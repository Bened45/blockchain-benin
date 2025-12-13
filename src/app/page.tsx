import React from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MissionVision from "@/components/MissionVision";
import Stats from "@/components/Stats";
import Pillars from "@/components/Pillars";
import Events from "@/components/Events";
import Programs from "@/components/Programs";
import Partners from "@/components/Partners";
import Gallery from "@/components/Gallery";
import Newsletter from "@/components/Newsletter";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { Metadata } from 'next';
import { reader } from '@/lib/keystatic';

export const metadata: Metadata = {
    title: "Accueil", // Will be "Accueil | Blockchain Bénin"
    description: "Blockchain Bénin est la première communauté blockchain au Bénin. Nous formons, accompagnons et connectons les acteurs de l'écosystème Web3.",
};

export default async function Home() {
    // Fetch Gallery Albums
    const albums = await reader.collections.albums.all();

    // Flatten images from all albums for the homepage gallery
    const galleryItems = await Promise.all(albums.map(async (album) => {
        const entry = album.entry;
        const content = await entry.content();

        // Extract images from document content
        const images: { src: string; alt: string }[] = [];
        const extractImages = (nodes: any[]) => {
            for (const node of nodes) {
                if (node.type === 'image') {
                    images.push({ src: node.src, alt: node.alt || entry.title });
                } else if (node.children) {
                    extractImages(node.children);
                }
            }
        };
        extractImages(content);

        return images.map(img => ({
            image: img.src,
            title: img.alt,
            category: entry.category === 'event' ? 'Événement' :
                entry.category === 'workshop' ? 'Formation' : 'Communauté',
            size: 'small', // Default size since we lost manual selection
            date: entry.date,
        }));
    }));

    const flatGalleryItems = galleryItems.flat();

    // Sort by date (newest first) and take latest 8 items
    const sortedGallery = flatGalleryItems
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 8);
    return (
        <main className="min-h-screen bg-white overflow-x-hidden">
            <Navbar />
            <Hero />

            {/* Sections without spacing gaps */}
            <div>
                {/* <About /> */}
                <Programs />
                <MissionVision />
                <Stats />
                <Pillars />
                <Events />
                <Partners />
                <Gallery items={sortedGallery} />
                <Newsletter />
                <FAQ />
            </div>

            <Footer />
        </main>
    );
}
