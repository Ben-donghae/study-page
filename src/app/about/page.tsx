import Container from '@/components/layout/Container';

export default function AboutPage() {
    return (
        <div className="bg-white min-h-screen pb-20 font-sans">
            <div className="bg-slate-900 text-white pt-40 pb-24 mb-16">
                <Container>
                    <span className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-4 block">About KORIA</span>
                    <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                        &quot;공간과 시간을 초월한 연결&quot; <br />핵심 무역 허브
                    </h1>
                    <p className="text-slate-400 text-lg md:text-xl max-w-3xl font-light">
                        KORIA는 글로벌 무역 플랫폼으로서 AI와 O2O 기술을 활용하여 유통과 콘텐츠의 경계를 혁신합니다.
                    </p>
                </Container>
            </div>

            <Container>
                <div className="max-w-4xl mx-auto mb-32">
                    <h2 className="text-3xl font-bold text-center mb-16 text-slate-900">Brand Identity</h2>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-12 font-black text-4xl md:text-6xl text-blue-900">
                        <div className="flex flex-col items-center">
                            <span className="text-sm font-bold text-slate-400 mb-4 uppercase">KOREA</span>
                            <span>K</span>
                        </div>
                        <span className="text-slate-200">+</span>
                        <div className="flex flex-col items-center">
                            <span className="text-sm font-bold text-slate-400 mb-4 uppercase">WORLD</span>
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                                <div className="w-8 h-8 rounded-full border-4 border-blue-600" />
                            </div>
                        </div>
                        <span className="text-slate-200">+</span>
                        <div className="flex flex-col items-center">
                            <span className="text-sm font-bold text-slate-400 mb-4 uppercase tracking-tighter">CONNECTION (연결)</span>
                            <span>RIA</span>
                        </div>
                        <span className="text-blue-500 text-7xl md:text-9xl ml-4">=</span>
                        <div className="ml-4 flex flex-col items-end">
                            <span className="text-sm font-bold text-blue-600 mb-4 uppercase text-right">GLOBAL CONNECTION</span>
                            <span className="text-blue-600 italic">KORIA</span>
                        </div>
                    </div>
                    <p className="text-center mt-16 text-2xl font-bold text-slate-800">
                        &quot;세계와 연결하는 연결의 힘을 담다&quot;
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                    <div>
                        <h3 className="text-2xl font-bold mb-6 text-blue-900 underline decoration-4 underline-offset-8">Our Mission</h3>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            KORIA는 유통과 컨텐츠 혁신으로 새로운 글로벌 소비 생태계를 창조하며,
                            AI 기반 O2O 기술로 차별화된 테마 상품을 전 세계로 연결합니다.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-6 text-blue-900 underline decoration-4 underline-offset-8">Technology</h3>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            AI 매칭 알고리즘과 국가별 실시간 데이터 분석을 통해
                            공급자와 소비자 모두에게 최적화된 무역 환경을 제공합니다.
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    );
}
