'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Container from './Container';
import { cn } from '@/lib/utils';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                isScrolled
                    ? "bg-white/70 backdrop-blur-lg border-b border-white/20 py-3 shadow-sm"
                    : "bg-transparent py-5"
            )}
        >
            <Container>
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <span className={cn(
                            "text-2xl font-black tracking-tighter transition-colors",
                            isScrolled ? "text-blue-900" : "text-white"
                        )}>
                            KORIA
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-10">
                        {[
                            { name: '홈', href: '/' },
                            { name: '서비스', href: '/business-intro' },
                            { name: '포트폴리오', href: '/business-strategy' },
                        ].map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "text-sm font-bold transition-all hover:opacity-70",
                                    isScrolled ? "text-slate-600" : "text-white"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Action Button */}
                    <div className="flex items-center gap-4">
                        <Link
                            href="/contact"
                            className={cn(
                                "px-6 py-2.5 text-sm font-black rounded-full transition-all active:scale-95 shadow-lg",
                                isScrolled
                                    ? "bg-blue-700 text-white hover:bg-blue-800 shadow-blue-900/10"
                                    : "bg-white text-black hover:bg-slate-100 shadow-white/10"
                            )}
                        >
                            문의하기
                        </Link>
                    </div>
                </div>
            </Container>
        </header>
    );
}
