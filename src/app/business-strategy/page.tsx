'use client';

import Container from '@/components/layout/Container';
import ScrollReveal from '@/components/layout/ScrollReveal';


export default function BusinessStrategyPage() {
    return (
        <div className="bg-white min-h-screen pb-20 font-sans">
            <div className="bg-blue-50 py-20 mb-16 border-b border-blue-100">
                <Container>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6">사업전략</h1>
                    <p className="text-slate-600 text-xl max-w-3xl leading-relaxed">
                        온라인과 오프라인의 경계를 허무는 O2O 전략을 통해 전 세계 고객에게 독창적인 소비 경험을 제공합니다.
                    </p>
                </Container>
            </div>

            <Container>
                <div className="max-w-4xl mx-auto">
                    <div className="mb-20">
                        <ScrollReveal>
                            <h2 className="text-4xl md:text-7xl font-black text-blue-900 mb-12 text-center tracking-tighter uppercase leading-none">O2O 전략 <br className="md:hidden" /><span className="text-lg md:text-2xl font-bold opacity-30 mt-4 block">Connecting Online & Offline</span></h2>
                        </ScrollReveal>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <ScrollReveal delay={0.2}>
                                <div className="flex flex-col items-center text-center p-8 bg-blue-50 rounded-2xl h-full">
                                    <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6">01</div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-4">온·오프라인 상품 연동</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">온라인에서 노출된 상품을 오프라인 체험공간에서 직접 경험하고 구매까지 연결</p>
                                </div>
                            </ScrollReveal>
                            <ScrollReveal delay={0.4}>
                                <div className="flex flex-col items-center text-center p-8 bg-blue-50 rounded-2xl h-full">
                                    <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6">02</div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-4">체험 기반 상품 판매</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">상품 콘텐츠를 통한 탐색 후 오프라인 체험으로 전환율 향상</p>
                                </div>
                            </ScrollReveal>
                            <ScrollReveal delay={0.6}>
                                <div className="flex flex-col items-center text-center p-8 bg-blue-50 rounded-2xl h-full">
                                    <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6">03</div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-4">실시간 참여 유도</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">라이브 쇼핑과 오프라인 매장 이벤트 연계로 고객 재방문 증대</p>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>

                    <ScrollReveal delay={0.8}>
                        <div className="p-12 bg-blue-900 text-white rounded-3xl text-center">
                            <h2 className="text-2xl md:text-3xl font-bold mb-6">혁신과 연결의 플랫폼</h2>
                            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto opacity-80">
                                KORIA는 AI 기반 기술을 통해 실시간 글로벌 소통과 안전한 거래 환경을 구축하고 있습니다.
                            </p>
                            <div className="inline-block px-8 py-4 bg-white text-blue-900 font-bold rounded-xl">
                                글로벌 진출 파트너십 구축 중
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </Container>
        </div>
    );
}
