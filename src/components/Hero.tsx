"use client";

import React, { useEffect, useRef, useState } from 'react';
import Button from './ui/Button';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-dark-bg">
            {/* Background Blobs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse-slow"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] animate-pulse-slow animation-delay-2000"></div>

            {/* Interactive Network Background */}
            <NetworkBackground />

            {/* Gradient Overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-bg/50 to-dark-bg pointer-events-none"></div>

            {/* Content */}
            <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="max-w-5xl mx-auto space-y-8">
                    {/* Badge */}
                    <div className="animate-fade-in flex justify-center">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-premium text-white text-sm font-medium border border-white/10 backdrop-blur-md hover:scale-105 transition-transform duration-300 cursor-default">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                            </span>
                            Construisons l&apos;avenir ensemble
                        </span>
                    </div>

                    {/* Title with Scramble Effect */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight">
                        <ScrambleText text="Révolutionnez l'Afrique" className="block mb-2" />
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-white to-secondary-400 animate-gradient bg-300%">
                            avec la Blockchain
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-slide-up animation-delay-200">
                        Rejoignez le mouvement qui transforme l&apos;Afrique francophone. Apprenez, innovez et construisez l&apos;avenir décentralisé.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up animation-delay-400">
                        <Button
                            href="/rejoindre"
                            variant="primary"
                            size="lg"
                            rightIcon={<ArrowRight size={20} />}
                            className="w-full sm:w-auto group relative overflow-hidden"
                        >
                            <span className="relative z-10">Rejoindre l&apos;association</span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </Button>
                        <Button
                            href="/soutenir"
                            variant="outline"
                            size="lg"
                            className="w-full sm:w-auto border-white/20 text-white hover:bg-white/5 backdrop-blur-sm"
                        >
                            Nous soutenir
                        </Button>
                    </div>

                    {/* Stats with Glassmorphism */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mt-12 md:mt-16 animate-fade-in animation-delay-600">
                        {[
                            { value: '1000+', label: 'Membres Actifs' },
                            { value: '50+', label: 'Événements' },
                            { value: '300+', label: 'Experts Formés' },
                            { value: '20+', label: 'Partenaires' },
                        ].map((stat, index) => (
                            <AnimatedStat
                                key={index}
                                value={stat.value}
                                label={stat.label}
                                delay={index * 100}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- Sub-components ---

const ScrambleText = ({ text, className }: { text: string, className?: string }) => {
    const [displayText, setDisplayText] = useState(text);
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

    useEffect(() => {
        let iteration = 0;
        const maxIterations = 10; // How many times to scramble before settling

        const interval = setInterval(() => {
            setDisplayText(
                text
                    .split("")
                    .map((char, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join("")
            );

            if (iteration >= text.length) {
                clearInterval(interval);
            }

            iteration += 1 / 3; // Speed of decoding
        }, 30);

        return () => clearInterval(interval);
    }, [text]);

    return <span className={className}>{displayText}</span>;
};

const NetworkBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const particles: Particle[] = [];
        const particleCount = Math.min(Math.floor(width * height / 15000), 100); // Responsive count
        const connectionDistance = 150;
        const mouseDistance = 200;

        let mouse = { x: 0, y: 0 };

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;
            color: string;

            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 2 + 1;
                // Blockchain colors: Blue, Green, White
                const colors = ['rgba(0, 102, 204, 0.5)', 'rgba(76, 175, 80, 0.5)', 'rgba(255, 255, 255, 0.3)'];
                this.color = colors[Math.floor(Math.random() * colors.length)];
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                // Bounce off edges
                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;

                // Mouse interaction
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < mouseDistance) {
                    const forceDirectionX = dx / distance;
                    const forceDirectionY = dy / distance;
                    const force = (mouseDistance - distance) / mouseDistance;
                    const directionX = forceDirectionX * force * 0.5; // Push away slightly or pull? Let's pull gently
                    const directionY = forceDirectionY * force * 0.5;

                    // Gentle attraction to mouse
                    this.vx += directionX * 0.05;
                    this.vy += directionY * 0.05;
                }
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
            }
        }

        // Initialize particles
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // Update and draw particles
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            // Draw connections
            particles.forEach((a, index) => {
                for (let j = index + 1; j < particles.length; j++) {
                    const b = particles[j];
                    const dx = a.x - b.x;
                    const dy = a.y - b.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / connectionDistance * 0.8})`; // Fade out
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.stroke();
                    }
                }

                // Connect to mouse if close
                const dx = a.x - mouse.x;
                const dy = a.y - mouse.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < connectionDistance) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(0, 102, 204, ${1 - distance / connectionDistance})`;
                    ctx.lineWidth = 0.8;
                    ctx.moveTo(a.x, a.y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.stroke();
                }
            });

            requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        const handleMouseMove = (e: MouseEvent) => {
            // Adjust for canvas position relative to viewport if needed, 
            // but since it's fixed/absolute inset-0, clientX/Y is fine usually.
            // However, if the canvas is inside a relative container that is scrolled...
            // For a hero section at the top, clientX/Y is usually correct relative to viewport.
            // But let's use getBoundingClientRect to be safe.
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full bg-gradient-to-br from-dark-bg via-[#0B1D2E] to-[#1a103c]"
        />
    );
};

// Animated Stat Component
const AnimatedStat = ({ value, label, delay }: { value: string; label: string; delay: number }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    // Extract number from value string (e.g., "1000+" -> 1000)
    const targetNumber = parseInt(value.replace(/\D/g, ''));
    const suffix = value.replace(/[\d]/g, '');

    useEffect(() => {
        const currentRef = ref.current;
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

    useEffect(() => {
        if (isVisible) {
            const duration = 2000; // 2 seconds
            const steps = 60;
            const increment = targetNumber / steps;
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= targetNumber) {
                    setCount(targetNumber);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(current));
                }
            }, duration / steps);

            return () => clearInterval(timer);
        }
    }, [isVisible, targetNumber]);

    return (
        <div
            ref={ref}
            className="glass-premium rounded-2xl p-6 backdrop-blur-xl hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 cursor-pointer group"
            style={{
                animationDelay: `${delay}ms`,
            }}
        >
            <div className="text-3xl md:text-4xl font-display font-bold text-white mb-1 group-hover:text-primary transition-colors duration-300">
                {isVisible ? `${count}${suffix}` : '0'}
            </div>
            <div className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                {label}
            </div>
        </div>
    );
};

export default Hero;
