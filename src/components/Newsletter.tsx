"use client";

import React, { useState } from 'react';
import Section from './ui/Section';
import { Send, Check, Loader2 } from 'lucide-react';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus('loading');

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Simulate success (in reality, you'd call your newsletter API here)
        setStatus('success');
        setEmail('');

        // Reset after 3 seconds
        setTimeout(() => setStatus('idle'), 3000);
    };

    return (
        <Section id="newsletter" className="bg-primary relative overflow-hidden py-20 md:py-32">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <h2 className="text-4xl md:text-6xl lg:text-8xl font-display font-bold text-black mb-8 tracking-tight">
                    Restez Connecté
                </h2>
                <p className="text-xl text-black max-w-2xl mx-auto mb-12 font-light">
                    Rejoignez notre communauté de plus de 2000 passionnés. Recevez les dernières nouvelles, opportunités et événements directement dans votre boîte mail.
                </p>

                <form onSubmit={handleSubmit} className="max-w-xl mx-auto relative group">
                    <div className="absolute inset-0 bg-white/20 rounded-full blur-xl group-hover:bg-white/30 transition-colors duration-500"></div>
                    <div className="relative flex items-center glass-premium rounded-full p-2 shadow-2xl">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="votre@email.com"
                            className="flex-1 px-6 py-4 bg-transparent text-white placeholder-gray-300 focus:outline-none text-lg"
                            required
                            disabled={status === 'loading' || status === 'success'}
                        />
                        <button
                            type="submit"
                            disabled={status === 'loading' || status === 'success'}
                            className={`p-4 rounded-full text-white transition-all duration-300 shadow-lg ${status === 'success'
                                ? 'bg-secondary'
                                : 'bg-dark-bg hover:bg-primary hover:scale-105'
                                } disabled:cursor-not-allowed`}
                        >
                            {status === 'loading' ? (
                                <Loader2 size={24} className="animate-spin" />
                            ) : status === 'success' ? (
                                <Check size={24} />
                            ) : (
                                <Send size={24} />
                            )}
                        </button>
                    </div>
                </form>

                {/* Status Messages */}
                <div className="mt-6 h-6">
                    {status === 'success' && (
                        <p className="text-sm text-secondary-100 font-medium animate-fade-in">
                            ✓ Merci ! Vous êtes maintenant inscrit à notre newsletter.
                        </p>
                    )}
                    {status === 'idle' && (
                        <p className="text-sm text-blue-400 opacity-80">
                            Pas de spam, promis. Désabonnement à tout moment.
                        </p>
                    )}
                </div>
            </div>
        </Section>
    );
};

export default Newsletter;

