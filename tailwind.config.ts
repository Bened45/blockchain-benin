import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: {
                    50: '#E6F2FF',
                    100: '#CCE5FF',
                    200: '#99CBFF',
                    300: '#66B0FF',
                    400: '#3396FF',
                    500: '#0066CC',
                    600: '#0052A3',
                    700: '#003D7A',
                    800: '#002952',
                    900: '#001429',
                    DEFAULT: '#0066CC',
                },
                secondary: {
                    50: '#E8F5E9',
                    100: '#C8E6C9',
                    200: '#A5D6A7',
                    300: '#81C784',
                    400: '#66BB6A',
                    500: '#4CAF50',
                    600: '#43A047',
                    700: '#388E3C',
                    800: '#2E7D32',
                    900: '#1B5E20',
                    DEFAULT: '#4CAF50',
                },
                accent: {
                    50: '#FFFBEA',
                    100: '#FFF3C4',
                    200: '#FCE588',
                    300: '#FCD34D',
                    400: '#FBB040',
                    500: '#F59E0B',
                    600: '#D97706',
                    700: '#B45309',
                    800: '#92400E',
                    900: '#78350F',
                    DEFAULT: '#FCD34D',
                },
                dark: {
                    bg: '#0A1628',
                    surface: '#0B1D2E',
                    border: '#1E3A5F',
                },
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
                display: ['var(--font-poppins)', 'Poppins', 'system-ui', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-out forwards',
                'slide-up': 'slideUp 0.6s ease-out forwards',
                'slide-down': 'slideDown 0.6s ease-out forwards',
                'slide-left': 'slideLeft 0.6s ease-out forwards',
                'slide-right': 'slideRight 0.6s ease-out forwards',
                'scale-in': 'scaleIn 0.4s ease-out forwards',
                'float': 'float 3s ease-in-out infinite',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'shimmer': 'shimmer 2s linear infinite',
                'gradient': 'gradient 8s linear infinite',
                'spin-slow': 'spin 3s linear infinite',
                'marquee': 'marquee 25s linear infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideDown: {
                    '0%': { opacity: '0', transform: 'translateY(-30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideLeft: {
                    '0%': { opacity: '0', transform: 'translateX(30px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                slideRight: {
                    '0%': { opacity: '0', transform: 'translateX(-30px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                scaleIn: {
                    '0%': { opacity: '0', transform: 'scale(0.9)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-1000px 0' },
                    '100%': { backgroundPosition: '1000px 0' },
                },
                gradient: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'gradient-primary': 'linear-gradient(135deg, #0066CC 0%, #0052A3 100%)',
                'gradient-secondary': 'linear-gradient(135deg, #4CAF50 0%, #388E3C 100%)',
                'gradient-accent': 'linear-gradient(135deg, #FCD34D 0%, #F59E0B 100%)',
                'gradient-hero': 'linear-gradient(135deg, #0066CC 0%, #4A148C 100%)',
            },
            backdropBlur: {
                xs: '2px',
            },
            boxShadow: {
                'glow-primary': '0 0 20px rgba(0, 102, 204, 0.5)',
                'glow-secondary': '0 0 20px rgba(76, 175, 80, 0.5)',
                'glow-accent': '0 0 20px rgba(252, 211, 77, 0.5)',
            },
            backgroundSize: {
                '300%': '300%',
            },
        },
    },
    plugins: [],
} satisfies Config;
