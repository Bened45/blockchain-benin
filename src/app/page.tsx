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
    const galleryItems = albums.flatMap(album => {
        const entry = album.entry;
        return entry.images.map(img => ({
            image: img.image,
            title: img.caption || entry.title,
            category: entry.category === 'event' ? 'Événement' :
                entry.category === 'workshop' ? 'Formation' : 'Communauté',
            size: img.size,
            date: entry.date,
        }));
    });

    // Sort by date (newest first) and take latest 8 items
    const sortedGallery = galleryItems
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
