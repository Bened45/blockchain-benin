import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
    const navigationLinks = [
        { name: 'Accueil', href: '/' },
        { name: 'À Propos', href: '/about' },
        { name: 'Programmes', href: '/programmes' },
        { name: 'Événements', href: '/evenements' },
        { name: 'Galerie', href: '/galerie' },
        { name: 'Ressources', href: '/ressources' },
    ];

    const initiativeLinks = [
        { name: 'Faire un don', href: '/don' },
        { name: 'Club Blockchain', href: '/club-blockchain' },
        { name: 'Nous soutenir', href: '/soutenir' },
        { name: 'Rejoindre', href: '/rejoindre' },
    ];

    const socialLinks = [
        { Icon: Facebook, href: 'https://facebook.com/blockchainbenin', label: 'Facebook' },
        { Icon: Twitter, href: 'https://twitter.com/blockchainbenin', label: 'Twitter' },
        { Icon: Linkedin, href: 'https://linkedin.com/company/blockchainbenin', label: 'LinkedIn' },
        { Icon: Instagram, href: 'https://instagram.com/blockchainbenin', label: 'Instagram' },
    ];

    return (
        <footer className="relative bg-dark-bg text-white pt-20 pb-12 overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-20">
                    {/* Brand */}
                    <div className="col-span-2 sm:col-span-2 md:col-span-1 lg:col-span-1 space-y-6">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="w-10 h-10 lg:w-32 lg:h-32 relative flex-shrink-0">
                                <Image
                                    src="/logo.png"
                                    alt="Blockchain Bénin Charity Logo"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </Link>
                        <p className="text-gray-300 leading-relaxed">
                            Pionniers de l&apos;éducation et de l&apos;innovation blockchain en Afrique francophone. Construisons ensemble un avenir décentralisé.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map(({ Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white hover:scale-110 transition-all duration-300"
                                >
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-display font-bold text-xl mb-6">Navigation</h4>
                        <ul className="space-y-4">
                            {navigationLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Initiatives */}
                    <div>
                        <h4 className="font-display font-bold text-xl mb-6">Initiatives</h4>
                        <ul className="space-y-4">
                            {initiativeLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-gray-300 hover:text-secondary transition-colors flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-secondary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-display font-bold text-xl mb-6">Contact</h4>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4 text-gray-300">
                                <MapPin className="text-primary flex-shrink-0" />
                                <span>Cotonou, Bénin<br />Quartier Haie Vive</span>
                            </li>
                            <li className="flex items-center gap-4 text-gray-400">
                                <Phone className="text-primary flex-shrink-0" />
                                <a href="tel:+22901664493 07" className="hover:text-primary transition-colors">
                                    +229 01 66 44 93 07
                                </a>
                            </li>
                            <li className="flex items-center gap-4 text-gray-400">
                                <Mail className="text-primary flex-shrink-0" />
                                <a href="mailto:contact@beninblockchain.com" className="hover:text-primary transition-colors">
                                    contact@beninblockchain.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Blockchain BENIN. Tous droits réservés.</p>
                    <div className="flex gap-8">
                        <Link href="/confidentialite" className="hover:text-white transition-colors">Confidentialité</Link>
                        <Link href="/conditions" className="hover:text-white transition-colors">Conditions</Link>
                        <Link href="/mentions-legales" className="hover:text-white transition-colors">Mentions Légales</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
