"use client";

import React from 'react';
import Image from 'next/image';
import Section from './ui/Section';

const Partners = () => {
    const partners = [
        { name: "Partner 1", src: "/Partenaires/580fc55a-0c25-465b-8f44-341e2144e593.jpg" },
        { name: "Partner 2", src: "/Partenaires/IMG_3985.PNG" },
        { name: "Partner 3", src: "/Partenaires/IMG_3986.PNG" },
        { name: "Partner 4", src: "/Partenaires/IMG_3987.PNG" },
        { name: "Partner 5", src: "/Partenaires/IMG_3988.PNG" },
        { name: "Partner 6", src: "/Partenaires/IMG_3989.PNG" },
        { name: "Partner 7", src: "/Partenaires/IMG_3990.JPG" },
        { name: "Partner 8", src: "/Partenaires/IMG_4602.jpg" },
        { name: "Partner 9", src: "/Partenaires/IMG_7730.jpg" },
        { name: "Partner 10", src: "/Partenaires/JWTf2Qz7_400x400.jpg" },
        { name: "Partner 11", src: "/Partenaires/LOGO NOIR SANS SLOGAN.png" },
        { name: "Gate Charity", src: "/Partenaires/Logo Gate Charity.png" },
        { name: "Partner 13", src: "/Partenaires/a450913d-c95c-423f-a997-3a2891c46e1d.jpg" },
        { name: "ASC", src: "/Partenaires/logo asc.jpg" },
        { name: "Mouvment", src: "/Partenaires/mouvment_-_v2_-logo.png" },
        { name: "Partner 16", src: "/Partenaires/photo_2025-03-12_13-50-47.jpg" },
    ];

    return (
        <Section id="partners" className="bg-white py-20 overflow-hidden">
            <div className="text-center mb-12">
                <h2 className="text-2xl font-bold text-gray-700 uppercase tracking-widest">
                    Ils nous font confiance
                </h2>
            </div>

            <div className="relative flex overflow-x-hidden group">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

                {/* Marquee Content - Duplicated for seamless loop */}
                <div className="animate-marquee flex gap-16 items-center whitespace-nowrap py-4">
                    {[...partners, ...partners].map((partner, index) => (
                        <div
                            key={index}
                            className="relative w-32 h-20 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 hover:scale-110"
                        >
                            <Image
                                src={partner.src}
                                alt={partner.name}
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Partners;
