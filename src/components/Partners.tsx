import React from 'react';
import Image from 'next/image';
import Section from './ui/Section';
import { reader } from '@/lib/keystatic';

const Partners = async () => {
    const partners = await reader.collections.partners.all();

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
                                src={partner.entry.logo}
                                alt={partner.entry.name}
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
