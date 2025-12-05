import type { Metadata } from "next";

import "./globals.css";



export const metadata: Metadata = {
    metadataBase: new URL('https://www.beninblockchain.com'),
    title: {
        default: "Blockchain Bénin - L'avenir de la Blockchain en Afrique",
        template: "%s | Blockchain Bénin"
    },
    description: "La référence de l'écosystème blockchain au Bénin. Formation, innovation, communauté et événements pour démocratiser le Web3 en Afrique francophone.",
    keywords: ["Blockchain", "Bénin", "Afrique", "Formation", "Web3", "Crypto", "Bitcoin", "Ethereum", "Innovation", "Technologie", "Cotonou"],
    authors: [{ name: "Blockchain Bénin Team" }],
    creator: "Blockchain Bénin",
    publisher: "Blockchain Bénin",
    openGraph: {
        type: "website",
        locale: "fr_FR",
        url: "https://www.beninblockchain.com",
        title: "Blockchain Bénin - L'avenir de la Blockchain en Afrique",
        description: "Rejoignez la plus grande communauté blockchain du Bénin. Formez-vous, innovez et construisez l'avenir décentralisé.",
        siteName: "Blockchain Bénin",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Blockchain Bénin",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Blockchain Bénin",
        description: "La référence de l'écosystème blockchain au Bénin.",
        images: ["/og-image.jpg"],
        creator: "@BlockchainBenin", // Assuming handle
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

import ScrollToTop from "@/components/ui/ScrollToTop";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <body className={`font-sans antialiased`}>
                {children}
                <ScrollToTop />
            </body>
        </html>
    );
}
