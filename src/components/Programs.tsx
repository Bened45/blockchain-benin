"use client";

import React from 'react';
import Section from './ui/Section';
import { ArrowRight, Code, Users, Trophy, GraduationCap, Sparkles } from 'lucide-react';

const Programs = () => {
    const programs = [
        {
            title: 'Formations',
            description: 'Cours structurés pour maîtriser la blockchain, des bases aux concepts avancés.',
            icon: <GraduationCap size={48} />,
            action: 'Découvrir',
            gradient: 'from-primary-600 via-primary-500 to-primary-400',
            bgGradient: 'bg-gradient-to-br from-primary-600 via-primary-500 to-primary-400',
            size: 'large',
            stats: '300+ apprenants'
        },
        {
            title: 'Club Blockchain',
            description: 'Découvre la blockchain, apprends, protège-toi et lance tes projets concrets.',
            icon: <Users size={40} />,
            action: 'En savoir plus',
            gradient: 'from-secondary-600 via-secondary-500 to-secondary-400',
            bgGradient: 'bg-gradient-to-br from-secondary-600 via-secondary-500 to-secondary-400',
            size: 'small',
            stats: '100+ membres'
        },
        {
            title: 'Bootcamp',
            description: 'Programmes intensifs pour devenir développeur blockchain en quelques semaines.',
            icon: <Code size={40} />,
            action: 'Rejoindre',
            gradient: 'from-accent-600 via-accent-500 to-accent-400',
            bgGradient: 'bg-gradient-to-br from-accent-600 via-accent-500 to-accent-400',
            size: 'small',
            stats: '12 semaines'
        },
        {
            title: 'Hackathons',
            description: 'Relevez des défis, développez des projets concrets et gagnez des prix.',
            icon: <Trophy size={48} />,
            action: 'Participer',
            gradient: 'from-primary-600 via-primary-500 to-secondary-400',
            bgGradient: 'bg-gradient-to-br from-primary-600 via-primary-500 to-secondary-400',
            size: 'large',
            stats: '5000 FCFA de prix'
        }
    ];

    return (
        <Section id="programs" className="relative bg-gradient-to-b from-white via-gray-50 to-white py-32 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse animation-delay-400"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 mb-6 animate-fade-in">
                        <Sparkles className="text-primary" size={20} />
                        <span className="text-primary font-bold uppercase tracking-wider text-sm">Excellence & Innovation</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-dark-bg mb-8 tracking-tight animate-slide-up">
                        Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient">Programmes</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-slide-up animation-delay-200">
                        Des parcours qui transforment la curiosité en expertise, du premier contact à la maîtrise totale.
                    </p>
                </div>

                {/* Programs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 auto-rows-auto sm:auto-rows-[400px] md:auto-rows-[450px]">
                    {programs.map((program, index) => (
                        <div
                            key={index}
                            className={`
                                group relative rounded-[3rem] overflow-hidden transition-all duration-700 hover:scale-105 cursor-pointer min-h-[350px]
                                ${program.size === 'large' ? 'sm:col-span-2 lg:col-span-2' : 'sm:col-span-1 lg:col-span-1'}
                                animate-scale-in
                            `}
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Vibrant Gradient Background */}
                            <div className={`absolute inset-0 ${program.bgGradient} opacity-100`}></div>

                            {/* Animated Glow Effect */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${program.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-700`}></div>

                            {/* Floating Shapes */}
                            <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-1000"></div>
                            <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-1000 animation-delay-200"></div>

                            {/* Content */}
                            <div className="relative h-full p-6 sm:p-8 md:p-10 flex flex-col justify-between z-10 text-white">
                                <div>
                                    {/* Stats Badge */}
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 mb-6 text-sm font-bold">
                                        {program.stats}
                                    </div>

                                    {/* Icon */}
                                    <div className="w-20 h-20 rounded-3xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                                        {program.icon}
                                    </div>

                                    {/* Title */}
                                    <h3 className={`font-display font-black mb-4 leading-tight ${program.size === 'large' ? 'text-3xl sm:text-4xl md:text-5xl' : 'text-2xl sm:text-3xl md:text-4xl'}`}>
                                        {program.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-lg text-white/90 leading-relaxed">
                                        {program.description}
                                    </p>
                                </div>

                                {/* CTA */}
                                <div className="pt-8">
                                    <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-dark-bg font-bold text-lg hover:bg-white/90 transition-all group-hover:gap-5 group-hover:px-10">
                                        {program.action}
                                        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </div>

                            {/* Shine Effect */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Programs;
