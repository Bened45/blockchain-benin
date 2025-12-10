import React from 'react';
import { reader } from '@/lib/keystatic';
import StatsClient from './StatsClient';

const Stats = async () => {
    const statsData = await reader.singletons.stats.read();

    // Default values if data is missing
    const stats = [
        { number: parseInt(statsData?.members || '2000'), suffix: '+', label: 'Membres Actifs', color: 'from-primary-400 to-primary-600' },
        { number: parseInt(statsData?.events || '50'), suffix: '+', label: 'Événements', color: 'from-secondary-400 to-secondary-600' },
        { number: parseInt(statsData?.trained || '1500'), suffix: '+', label: 'Personnes Formées', color: 'from-accent-400 to-accent-600' },
        { number: parseInt(statsData?.partners || '30'), suffix: '+', label: 'Partenaires', color: 'from-primary-500 to-secondary-500' },
    ];

    return (
        <StatsClient stats={stats} />
    );
};

export default Stats;
