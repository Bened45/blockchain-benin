"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from './ui/Button';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
            // Close mobile menu on scroll
            if (isOpen && window.scrollY > 50) {
                setIsOpen(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isOpen]);

    const navLinks = [
        { name: 'Accueil', href: '/' },
        { name: 'A Propos', href: '/about' },
        { name: 'Programmes', href: '/programmes' },
        { name: 'Club Blockchain', href: '/club-blockchain' },
        { name: 'Ressources', href: '/ressources' },
        { name: 'Événements', href: '/evenements' },
    ];

    const isActive = (href: string) => {
        if (href === '/') return pathname === '/';
        return pathname?.startsWith(href);
    };

    return (
        <nav
            className="fixed w-full z-50 transition-all duration-300 bg-dark-bg/80 backdrop-blur-md shadow-lg border-b border-white/10"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-12 lg:h-auto relative">
                    {/* Logo - Absolutely centered on mobile, flex on desktop */}
                    <div className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 lg:flex-shrink-0">
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="w-40 h-10 sm:w-10 sm:h-10 lg:w-28 lg:h-28 relative flex-shrink-0">
                                <Image
                                    src="/logo.png"
                                    alt="Blockchain Bénin Charity Logo"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:block">
                        <div className="ml-10 flex items-center space-x-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`
                                        relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                                        ${isActive(link.href)
                                            ? 'text-white'
                                            : 'text-gray-300 hover:text-white'
                                        }
                                        group
                                    `}
                                >
                                    {link.name}
                                    {isActive(link.href) && (
                                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
                                    )}
                                    {!isActive(link.href) && (
                                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-full group-hover:w-8 transition-all duration-300"></span>
                                    )}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* CTA Button Desktop */}
                    <div className="hidden lg:block">
                        <Button
                            href="/rejoindre"
                            variant="primary"
                            size="sm"
                            className="shadow-glow-primary"
                        >
                            Rejoindre →
                        </Button>
                    </div>

                    {/* Mobile Menu Button - Right side */}
                    <div className="lg:hidden absolute right-4">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`
                    lg:hidden overflow-hidden transition-all duration-300 ease-in-out
                    ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}
                `}
            >
                <div className="glass-dark border-t border-white/10">
                    <div className="px-4 pt-4 pb-6 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`
                                    block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300
                                    ${isActive(link.href)
                                        ? 'bg-gradient-to-r from-primary/20 to-secondary/20 text-white'
                                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                                    }
                                `}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="pt-4">
                            <Button
                                href="/rejoindre"
                                variant="primary"
                                className="w-full justify-center"
                            >
                                Rejoindre →
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
