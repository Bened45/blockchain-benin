"use client";

import React, { useEffect, useState, useRef } from 'react';
import Section from './ui/Section';

// Client component for animation logic
const StatsClient = ({ stats }: { stats: any[] }) => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const currentRef = sectionRef.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <Section id="stats" className="bg-white py-20">
            <div ref={sectionRef} className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`
                                relative group p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] bg-white border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2
                                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                            `}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            {/* Gradient Background on Hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 rounded-[2.5rem] transition-opacity duration-500`}></div>

                            {/* Border Gradient */}
                            <div className={`absolute inset-0 rounded-[2.5rem] border-2 border-transparent bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-100 [mask:linear-gradient(#fff_0_0)_padding-box,linear-gradient(#fff_0_0)] [-webkit-mask-composite:xor] [mask-composite:exclude] pointer-events-none transition-opacity duration-500`}></div>

                            <div className="relative z-10 text-center">
                                <div className={`text-5xl md:text-6xl font-display font-bold bg-gradient-to-br ${stat.color} bg-clip-text text-transparent mb-4`}>
                                    {isVisible ? <Counter end={stat.number} duration={2000} /> : 0}
                                    {stat.suffix}
                                </div>
                                <div className="text-gray-500 font-medium text-lg uppercase tracking-wider">
                                    {stat.label}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

// Simple Counter Component
const Counter = ({ end, duration }: { end: number, duration: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime: number;
        let animationFrame: number;

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            setCount(Math.floor(progress * end));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration]);

    return <>{count}</>;
};

export default StatsClient;
