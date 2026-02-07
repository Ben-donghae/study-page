'use client';

import Container from '@/components/layout/Container';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '@/components/layout/ScrollReveal';

const businessModels = [
    {
        title: '공급사/셀러 & 글로벌 네트워크',
        items: [
            '상품 입점 및 콘텐츠 등록',
            '테마별 효율적 분류 시스템',
            '통합 판매 채널 운영·관리',
            '국가별 맞춤 마케팅 전략',
            '실시간 소통 거래 플랫폼'
        ],
        image: '/biz-supplier.png'
    },
    {
        title: '브랜딩 & 콘텐츠',
        items: ['인플루언서 가이드 제시', '영상·이미지 템플릿 제공', '캠페인 성과 리포트 지원'],
        image: '/biz-branding.png'
    },
    {
        title: '온·오프라인 (O2O)',
        items: ['오프라인 체험 서비스 연동', '체험공간 제휴 및 지원', '고객 충성도 향상 전략'],
        image: '/biz-o2o.png'
    }
];

export default function BusinessIntroPage() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % businessModels.length);
    }, []);

    useEffect(() => {
        const timer = setInterval(nextSlide, 4000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    return (
        <div className="bg-white min-h-screen pb-20">
            <div className="bg-blue-900 text-white pt-36 pb-20 mb-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent pointer-events-none" />
                <Container className="relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter italic">사업소개</h1>
                        <p className="text-blue-200 text-xl max-w-2xl leading-relaxed font-light">
                            공급사부터 인플루언서, 글로벌 네트워크까지 <br />
                            하나로 연결하는 KORIA의 비즈니스 생태계입니다.
                        </p>
                    </motion.div>
                </Container>
            </div>

            <Container className="overflow-visible">
                <div className="relative h-[600px] flex items-center justify-center perspective-[1000px] mb-20">
                    <div className="relative w-full max-w-5xl h-full flex items-center justify-center">
                        {businessModels.map((model, idx) => {
                            // Calculate position relative to currentIndex
                            let position = idx - currentIndex;
                            if (position < -1) position += businessModels.length;
                            if (position > businessModels.length - 2) position -= businessModels.length;

                            const isActive = position === 0;
                            const isPrev = position === -1;
                            const isNext = position === 1;

                            // iPod Cover Flow style animation variants
                            const variants = {
                                active: {
                                    x: 0,
                                    scale: 1,
                                    zIndex: 10,
                                    opacity: 1,
                                    rotateY: 0,
                                    filter: 'blur(0px)',
                                },
                                prev: {
                                    x: -250,
                                    scale: 0.8,
                                    zIndex: 5,
                                    opacity: 0.6,
                                    rotateY: 45,
                                    filter: 'blur(2px)',
                                },
                                next: {
                                    x: 250,
                                    scale: 0.8,
                                    zIndex: 5,
                                    opacity: 0.6,
                                    rotateY: -45,
                                    filter: 'blur(2px)',
                                },
                                hidden: {
                                    x: position > 0 ? 500 : -500,
                                    scale: 0.5,
                                    zIndex: 0,
                                    opacity: 0,
                                    rotateY: position > 0 ? -90 : 90,
                                    filter: 'blur(8px)',
                                },
                            };

                            let currentVariant = 'hidden';
                            if (isActive) currentVariant = 'active';
                            else if (isPrev) currentVariant = 'prev';
                            else if (isNext) currentVariant = 'next';

                            return (
                                <motion.div
                                    key={idx}
                                    variants={variants}
                                    animate={currentVariant}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 300,
                                        damping: 30,
                                    }}
                                    className="absolute w-full max-w-[340px] md:max-w-[420px] aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl border border-white/20 cursor-pointer group"
                                    onClick={() => setCurrentIndex(idx)}
                                >
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={model.image}
                                            alt={model.title}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-950/40 to-transparent" />

                                        <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
                                            <motion.div
                                                animate={{ y: isActive ? 0 : 20, opacity: isActive ? 1 : 0 }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                <h3 className="text-2xl md:text-3xl font-black mb-6 leading-tight italic uppercase tracking-tighter">
                                                    {model.title}
                                                </h3>
                                                <ul className="space-y-4">
                                                    {model.items.map((item, i) => (
                                                        <li key={i} className="flex items-start gap-3 text-sm md:text-base font-light opacity-90">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </motion.div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Progress Indicators */}
                <div className="flex justify-center gap-3">
                    {businessModels.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`h-1.5 transition-all duration-500 rounded-full ${currentIndex === idx ? 'w-12 bg-blue-600' : 'w-2 bg-slate-200 hover:bg-slate-300'
                                }`}
                        />
                    ))}
                </div>
            </Container>

            {/* Bottom Section */}
            <div className="mt-32 border-t border-slate-100 pt-20">
                <Container>
                    <ScrollReveal>
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 tracking-tighter uppercase italic">Next Generation Ecosystem</h2>
                            <p className="text-xl text-slate-500 leading-relaxed mb-12">
                                KORIA는 단순한 유통 플랫폼을 넘어, 전 세계 공급사와 소비자가 <br className="hidden md:block" />
                                가장 효율적이고 아름다운 방식으로 연결되는 생태계를 구축합니다.
                            </p>
                            <div className="inline-block px-10 py-5 bg-slate-950 text-white rounded-2xl font-black italic tracking-widest hover:scale-105 transition-transform cursor-pointer">
                                PARTNERSHIP ENQUIRY
                            </div>
                        </div>
                    </ScrollReveal>
                </Container>
            </div>
        </div>
    );
}
