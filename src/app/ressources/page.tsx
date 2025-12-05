"use client";

import React, { useState, useMemo } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, Video, FileText, Wrench, HelpCircle, Download, Search, X } from 'lucide-react';

interface Resource {
    title: string;
    type: string;
    difficulty: string;
}

interface Category {
    id: string;
    icon: React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>;
    title: string;
    description: string;
    color: string;
    resources: Resource[];
}

const categories: Category[] = [
    {
        id: 'documentation',
        icon: BookOpen,
        title: 'Documentation',
        description: 'Guides techniques, whitepapers et documentation officielle',
        color: '#0066CC',
        resources: [
            { title: 'Guide Débutant Blockchain', type: 'PDF', difficulty: 'Débutant' },
            { title: 'Ethereum Documentation', type: 'Web', difficulty: 'Intermédiaire' },
            { title: 'Solidity by Example', type: 'Web', difficulty: 'Avancé' }
        ]
    },
    {
        id: 'videos',
        icon: Video,
        title: 'Tutoriels Vidéo',
        description: 'Cours vidéo, webinars et conférences enregistrées',
        color: '#4CAF50',
        resources: [
            { title: 'Introduction à la Blockchain', type: 'Vidéo', difficulty: 'Débutant' },
            { title: 'Smart Contracts avec Solidity', type: 'Vidéo', difficulty: 'Intermédiaire' },
            { title: 'Architecture DeFi Avancée', type: 'Vidéo', difficulty: 'Avancé' }
        ]
    },
    {
        id: 'articles',
        icon: FileText,
        title: 'Articles & Blog',
        description: 'Articles de fond, actualités et analyses blockchain',
        color: '#FCD34D',
        resources: [
            { title: "L'avenir de la DeFi en Afrique", type: 'Article', difficulty: 'Tout niveau' },
            { title: 'NFT et propriété numérique', type: 'Article', difficulty: 'Débutant' },
            { title: 'Scalabilité blockchain', type: 'Article', difficulty: 'Avancé' }
        ]
    },
    {
        id: 'tools',
        icon: Wrench,
        title: 'Outils & Liens',
        description: 'Outils de développement, explorateurs et wallets',
        color: '#9C27B0',
        resources: [
            { title: 'Remix IDE', type: 'Outil', difficulty: 'Développeur' },
            { title: 'Etherscan Explorer', type: 'Outil', difficulty: 'Tout niveau' },
            { title: 'MetaMask Wallet', type: 'Outil', difficulty: 'Débutant' }
        ]
    },
    {
        id: 'faq',
        icon: HelpCircle,
        title: 'FAQ',
        description: 'Questions fréquentes sur la blockchain et nos programmes',
        color: '#FF5722',
        resources: [
            { title: "Qu'est-ce que la blockchain ?", type: 'FAQ', difficulty: 'Débutant' },
            { title: 'Comment commencer à apprendre ?', type: 'FAQ', difficulty: 'Débutant' },
            { title: 'Quelle est la différence entre Bitcoin et Ethereum ?', type: 'FAQ', difficulty: 'Débutant' }
        ]
    }
];

const featuredResources = [
    {
        title: 'Guide Complet : Introduction à la Blockchain',
        category: 'Documentation',
        categoryColor: '#0066CC',
        difficulty: 'Débutant',
        description: 'Un guide complet pour comprendre les bases de la blockchain, la cryptographie et les applications décentralisées.',
        type: 'PDF',
        size: '2.5 MB'
    },
    {
        title: 'Série Vidéo : Développement Smart Contracts',
        category: 'Tutoriels Vidéo',
        categoryColor: '#4CAF50',
        difficulty: 'Intermédiaire',
        description: 'Apprenez à créer vos premiers smart contracts avec Solidity à travers cette série de 10 vidéos.',
        type: 'Vidéo',
        size: '5h 30min'
    },
    {
        title: 'La Révolution DeFi en Afrique',
        category: 'Articles & Blog',
        categoryColor: '#FCD34D',
        difficulty: 'Tout niveau',
        description: "Analyse approfondie de l'impact de la finance décentralisée sur le continent africain.",
        type: 'Article',
        size: '15 min'
    },
    {
        title: 'Kit de Développement Blockchain',
        category: 'Outils & Liens',
        categoryColor: '#9C27B0',
        difficulty: 'Développeur',
        description: "Collection d'outils essentiels pour démarrer le développement blockchain : IDE, frameworks, librairies.",
        type: 'Collection',
        size: '12 outils'
    }
];

const ResourcesPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    // Filter categories based on search
    const filteredCategories = useMemo(() => {
        if (!searchQuery.trim()) return categories;

        const query = searchQuery.toLowerCase();
        return categories.filter(cat =>
            cat.title.toLowerCase().includes(query) ||
            cat.description.toLowerCase().includes(query) ||
            cat.resources.some(r => r.title.toLowerCase().includes(query))
        );
    }, [searchQuery]);

    // Filter featured resources based on search
    const filteredFeatured = useMemo(() => {
        if (!searchQuery.trim()) return featuredResources;

        const query = searchQuery.toLowerCase();
        return featuredResources.filter(r =>
            r.title.toLowerCase().includes(query) ||
            r.description.toLowerCase().includes(query) ||
            r.category.toLowerCase().includes(query)
        );
    }, [searchQuery]);

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <div className="pt-24 lg:pt-44 pb-12">
                {/* Header Section */}
                <div className="container mx-auto px-4 mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#0066CC] mb-4">
                        Ressources Blockchain
                    </h1>
                    <p className="text-gray-600 max-w-3xl mx-auto mb-8">
                        Explorez notre bibliothèque de ressources pour apprendre et maîtriser la blockchain
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-2xl mx-auto relative">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Rechercher une ressource..."
                            className="w-full pl-12 pr-12 py-4 rounded-full border-2 border-gray-200 focus:border-[#0066CC] outline-none transition-colors"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery('')}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                <X size={20} />
                            </button>
                        )}
                    </div>

                    {/* Search Results Count */}
                    {searchQuery && (
                        <p className="mt-4 text-sm text-gray-500">
                            {filteredCategories.length} catégorie(s) et {filteredFeatured.length} ressource(s) trouvée(s)
                        </p>
                    )}
                </div>

                {/* Categories Grid */}
                <div className="container mx-auto px-4 max-w-6xl mb-16">
                    {filteredCategories.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                            {filteredCategories.map((category) => {
                                const Icon = category.icon;
                                return (
                                    <div
                                        key={category.id}
                                        onClick={() => setActiveCategory(activeCategory === category.id ? null : category.id)}
                                        className={`bg-white border-2 rounded-3xl p-6 hover:shadow-xl transition-all cursor-pointer group ${activeCategory === category.id ? 'border-[#0066CC] shadow-lg' : 'border-gray-100'
                                            }`}
                                    >
                                        <div
                                            className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                                            style={{ backgroundColor: category.color }}
                                        >
                                            <Icon size={32} className="text-white" strokeWidth={2} />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                                            {category.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-4">
                                            {category.description}
                                        </p>
                                        <div className="text-sm font-medium" style={{ color: category.color }}>
                                            {category.resources.length} ressources →
                                        </div>

                                        {/* Expanded Resources */}
                                        {activeCategory === category.id && (
                                            <div className="mt-4 pt-4 border-t border-gray-100 space-y-2">
                                                {category.resources.map((resource, idx) => (
                                                    <div key={idx} className="flex items-center justify-between text-sm py-2 px-3 bg-gray-50 rounded-lg">
                                                        <span className="text-gray-700">{resource.title}</span>
                                                        <span className="text-xs px-2 py-1 bg-gray-200 rounded-full">{resource.difficulty}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <p className="text-gray-500 text-lg">Aucune catégorie ne correspond à votre recherche.</p>
                        </div>
                    )}
                </div>

                {/* Featured Resources Section */}
                {filteredFeatured.length > 0 && (
                    <div className="container mx-auto px-4 max-w-6xl mb-16">
                        <h2 className="text-3xl font-bold text-[#4CAF50] text-center mb-8">
                            Ressources Recommandées
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {filteredFeatured.map((resource, index) => (
                                <div
                                    key={index}
                                    className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-shadow"
                                >
                                    <div className="flex items-start justify-between mb-3">
                                        <span
                                            className="px-3 py-1 rounded-full text-xs font-bold text-white"
                                            style={{ backgroundColor: resource.categoryColor }}
                                        >
                                            {resource.category}
                                        </span>
                                        <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                                            {resource.difficulty}
                                        </span>
                                    </div>

                                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                                        {resource.title}
                                    </h3>

                                    <p className="text-gray-600 text-sm mb-4">
                                        {resource.description}
                                    </p>

                                    <div className="flex items-center justify-between">
                                        <div className="text-xs text-gray-500">
                                            {resource.type} • {resource.size}
                                        </div>
                                        <button className="flex items-center gap-2 text-[#0066CC] hover:text-[#0052A3] font-medium text-sm transition-colors">
                                            <Download size={16} />
                                            Télécharger
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* CTA Section */}
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="bg-gradient-to-r from-[#0066CC] to-[#4CAF50] rounded-3xl p-12 text-center text-white">
                        <h2 className="text-3xl font-bold mb-4">
                            Vous ne trouvez pas ce que vous cherchez ?
                        </h2>
                        <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                            Contactez-nous pour suggérer de nouvelles ressources ou poser vos questions à notre équipe.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/soutenir#form" className="px-8 py-4 bg-white text-[#0066CC] rounded-full font-bold hover:bg-gray-100 transition-colors">
                                Nous contacter
                            </a>
                            <a href="/rejoindre" className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white/10 transition-colors">
                                Rejoindre la communauté
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
};

export default ResourcesPage;
