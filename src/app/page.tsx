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
    const events = await reader.collections.events.all();
    const formattedEvents = events.map(event => {
        const data = event.entry;
        const dateObj = new Date(data.date);
        return {
            title: data.title,
            date: dateObj.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }),
            subtitle: data.subtitle,
            description: data.description,
            image: data.image || '/images/placeholder-event.jpg',
            category: data.type,
            action: "S'inscrire", // Or customize based on event type
            slug: event.slug,
        };
    });

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
                <Events events={formattedEvents} />
                <Partners />
                <Gallery />
                <Newsletter />
                <FAQ />
            </div>

            <Footer />
        </main>
    );
}

