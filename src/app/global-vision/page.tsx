'use client';

import Container from '@/components/layout/Container';
import ScrollReveal from '@/components/layout/ScrollReveal';

export default function GlobalVisionPage() {
    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            <div className="relative h-[400px] flex items-center bg-blue-900 overflow-hidden">
                {/* Decorative background visual concept */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent"></div>
                <Container className="relative z-10">
                    <h1 className="text-5xl font-black text-white mb-6 uppercase tracking-tighter">Global Vision</h1>
                    <p className="text-blue-100 text-2xl font-light max-w-2xl">
                        세계와 연결하는 연결의 힘을 담다
                    </p>
                </Container>
            </div>

            <Container className="-mt-16 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <ScrollReveal direction="right">
                        <div className="bg-white p-12 rounded-3xl shadow-xl border border-slate-100 h-full">
                            <h2 className="text-2xl font-bold text-blue-900 mb-6 font-sans">새로운 소비 생태계 창조</h2>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                KORIA는 유통과 콘텐츠 혁신으로 단순한 판매를 넘어, 사용자의 일상과 문화를 연결하는 새로운 글로벌 소비 생태계를 창조합니다.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                우리의 비전은 전 세계 어디서든 신뢰할 수 있는 O2O 서비스를 통해 경계 없는 라이프스타일을 즐길 수 있는 환경을 만드는 것입니다.
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="left" delay={0.4}>
                        <div className="bg-white p-12 rounded-3xl shadow-xl border border-slate-100 flex flex-col justify-center h-full">
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">글로벌 무역 거점 확장</h3>
                                    <div className="h-2 w-full bg-slate-100 rounded-full">
                                        <div className="h-full w-[85%] bg-blue-600 rounded-full" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">AI 매칭 고도화</h3>
                                    <div className="h-2 w-full bg-slate-100 rounded-full">
                                        <div className="h-full w-[70%] bg-blue-600 rounded-full" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">O2O 파트너십 네트워크</h3>
                                    <div className="h-2 w-full bg-slate-100 rounded-full">
                                        <div className="h-full w-[90%] bg-blue-600 rounded-full" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </Container>
        </div>
    );
}
