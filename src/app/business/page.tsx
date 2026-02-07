import Container from '@/components/layout/Container';

export default function BusinessPage() {
    return (
        <div className="bg-white min-h-screen pb-20">
            {/* Page Header */}
            <div className="bg-blue-900 text-white py-16 mb-16">
                <Container>
                    <h1 className="text-4xl font-bold mb-4">비즈니스 모델 (Business)</h1>
                    <p className="text-blue-200 text-lg max-w-2xl">
                        온라인과 오프라인을 잇는 KORIA만의 차별화된 O2O 전략을 소개합니다.
                    </p>
                </Container>
            </div>

            <Container>
                {/* Strategy 1 */}
                <div className="mb-24">
                    <div className="flex flex-col md:flex-row gap-12 items-start">
                        <div className="flex-1">
                            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2 block">Strategy 01</span>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Seamless O2O Integration</h2>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                사용자가 온라인에서 상품을 발견하면, 가장 가까운 오프라인 거점에서 체험할 수 있도록 안내합니다.
                                반대로 오프라인 체험 고객에게는 온라인 재구매 혜택을 제공하여 순환 구조를 만듭니다.
                            </p>
                            <ul className="space-y-3 mt-8">
                                {['Smart Location Matching', 'Offline Experience Reservation', 'QR Code Integration'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-700">
                                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex-1 bg-slate-100 rounded-2xl h-80 w-full flex items-center justify-center text-slate-400">
                            [O2O Diagram Placeholder]
                        </div>
                    </div>
                </div>

                {/* Strategy 2 */}
                <div className="mb-24">
                    <div className="flex flex-col md:flex-row-reverse gap-12 items-start">
                        <div className="flex-1">
                            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2 block">Strategy 02</span>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Global Live Commerce</h2>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                인플루언서와 함께하는 실시간 라이브 방송을 통해, 전 세계 어디서든 생생한 상품 정보를 전달합니다.
                                언어 장벽을 넘는 실시간 번역 자막 기술이 적용됩니다.
                            </p>
                        </div>
                        <div className="flex-1 bg-slate-100 rounded-2xl h-80 w-full flex items-center justify-center text-slate-400">
                            [Live Commerce UI Placeholder]
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
