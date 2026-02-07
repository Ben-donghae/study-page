'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Container from '../layout/Container';

const strategyItems = [
    {
        id: '01',
        title: '온·오프라인 상품 연동',
        description: '온라인에서 노출된 상품을 오프라인 체험공간에서 직접 경험하고 구매까지 연결',
    },
    {
        id: '02',
        title: '체험 기반 상품 판매',
        description: '상품 콘텐츠를 통한 탐색 후 오프라인 체험으로 전환율 향상',
    },
    {
        id: '03',
        title: '실시간 참여 유도',
        description: '라이브 쇼핑과 오프라인 매장 이벤트 연계로 고객 재방문 증대',
    }
];

export default function O2OStrategy() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % strategyItems.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-24 bg-blue-50 overflow-hidden">
            <Container>
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-blue-600 font-bold uppercase tracking-[0.3em] text-xs mb-6 block"
                    >
                        KORIA Strategy
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter"
                    >
                        O2O 전략
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-xl text-slate-500 max-w-2xl mx-auto"
                    >
                        온라인과 오프라인의 경계를 허무는 <br className="md:hidden" />새로운 소비 경험을 창출합니다.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                    {strategyItems.map((item, index) => {
                        const isActive = index === activeIndex;
                        return (
                            <motion.div
                                key={item.id}
                                animate={{
                                    scale: isActive ? 1.05 : 1,
                                    y: isActive ? -10 : 0,
                                    boxShadow: isActive
                                        ? "0 20px 40px -10px rgba(37, 99, 235, 0.2)"
                                        : "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                                }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                                className={`p-10 rounded-[2.5rem] text-center space-y-6 border transition-colors duration-500 ${isActive
                                    ? "bg-white border-blue-200"
                                    : "bg-white/50 border-blue-50"
                                    }`}
                            >
                                <motion.div
                                    animate={{
                                        backgroundColor: isActive ? "#2563eb" : "#f1f5f9",
                                        color: isActive ? "#ffffff" : "#2563eb",
                                        boxShadow: isActive ? "0 10px 20px rgba(37, 99, 235, 0.4)" : "none",
                                    }}
                                    className="w-20 h-20 rounded-[2rem] flex items-center justify-center text-3xl font-black mx-auto transition-all"
                                >
                                    {item.id}
                                </motion.div>
                                <h3 className={`text-2xl font-bold transition-colors duration-500 ${isActive ? "text-slate-900" : "text-slate-400"
                                    }`}>
                                    {item.title}
                                </h3>
                                <p className={`text-sm leading-relaxed transition-colors duration-500 ${isActive ? "text-slate-500" : "text-slate-300"
                                    }`}>
                                    {item.description}
                                </p>
                                {isActive && (
                                    <motion.div
                                        layoutId="activeBorder"
                                        className="absolute inset-0 border-2 border-blue-500 rounded-[2.5rem] pointer-events-none"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    />
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
