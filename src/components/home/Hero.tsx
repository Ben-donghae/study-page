'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/layout/Container';

export default function Hero() {
    const [isAtTop, setIsAtTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsAtTop(window.scrollY < 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="relative min-h-[90vh] flex items-center bg-slate-950 text-white overflow-hidden">
            {/* Visual background: High-quality Korean trade hub image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-bg.png"
                    alt="Global Trade Hub"
                    fill
                    priority
                    className="object-cover mix-blend-overlay opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/40 to-transparent"></div>
            </div>

            <Container className="relative z-10 py-24 md:py-32">
                <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
                    <div className="relative group mb-8">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                        <div className="relative px-5 py-2 bg-slate-900/50 backdrop-blur-xl rounded-full border border-white/10 flex items-center justify-center">
                            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] bg-gradient-to-r from-blue-300 via-white to-indigo-300 bg-clip-text text-transparent uppercase">
                                세계를 연결하는 연결의 힘을 담다
                            </span>
                        </div>
                    </div>
                    <h1 className="text-[2.6rem] md:text-[5.1rem] font-black tracking-tighter leading-[0.9] mb-8">
                        KORIA <br />
                        <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">AI와 O2O로</span> <br />
                        세계를 연결합니다
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-400 mb-12 leading-relaxed max-w-3xl font-light">
                        글로벌 B2B/B2C 무역 유통 및 브랜딩 컨텐츠 혁신 <br className="hidden md:block" />
                        새로운 글로벌 소비 생태계를 창조합니다.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <Link
                            href="/contact"
                            className="px-10 py-5 bg-blue-600 text-white font-black rounded-2xl shadow-2xl shadow-blue-500/20 hover:bg-blue-500 transition-all transform hover:-translate-y-1 active:scale-95"
                        >
                            무료 상담 신청
                        </Link>
                        <Link
                            href="/business-intro"
                            className="px-10 py-5 bg-white/5 backdrop-blur-md border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-all active:scale-95"
                        >
                            사업소개 보기
                        </Link>
                    </div>
                </div>
            </Container>

            {/* Scroll Indicator */}
            <div
                className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 transition-all duration-700 ${isAtTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
                    }`}
            >
                <div className="flex flex-col items-center gap-1">
                    <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-blue-400/80">Scroll</span>
                    <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
                        <div className="w-1 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                    </div>
                </div>
                <div className="flex flex-col items-center -space-y-1 opacity-40">
                    <span className="block w-2.5 h-2.5 border-r-2 border-b-2 border-white rotate-45 animate-[pulse_1.5s_infinite]"></span>
                    <span className="block w-2.5 h-2.5 border-r-2 border-b-2 border-white rotate-45 animate-[pulse_1.5s_infinite_0.2s]"></span>
                </div>
            </div>
        </section>
    );
}
