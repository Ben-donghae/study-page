import Container from '@/components/layout/Container';
import Image from 'next/image';
import ScrollReveal from '@/components/layout/ScrollReveal';

export default function ContactPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section with High-Quality Image */}
            <div className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/contact-hero.png"
                        alt="KORIA Global Business"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Deep Blue Overlay for depth */}
                    <div className="absolute inset-0 bg-blue-900/40" />
                </div>

                {/* Glass Cover / Content Card */}
                <Container className="relative z-10">
                    <ScrollReveal delay={0.3}>
                        <div className="max-w-4xl mx-auto">
                            <div className="bg-white/20 backdrop-blur-2xl border border-white/30 rounded-[40px] p-8 md:p-16 shadow-2xl text-center text-white">
                                <h1 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">
                                    Connected to the <span className="text-blue-200">World</span>
                                </h1>
                                <p className="text-xl md:text-2xl font-medium text-blue-50 mb-12 leading-relaxed opacity-90">
                                    KORIA는 AI 기반 O2O 솔루션으로<br />
                                    귀사의 글로벌 무역 경쟁력을 혁신합니다.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left border-t border-white/20 pt-12">
                                    <div className="space-y-2">
                                        <p className="text-xs uppercase font-black text-blue-300 tracking-[0.2em]">Contact Email</p>
                                        <p className="text-xl font-bold">hoya843@naver.com</p>
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-xs uppercase font-black text-blue-300 tracking-[0.2em]">Office Location</p>
                                        <p className="text-lg font-bold leading-snug">경기 화성시 동탄중심상가2길 26-15, 8층</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </Container>
            </div>

            {/* Bottom Section - Social/Trust Indicators */}
            <div className="py-24 bg-slate-50">
                <Container>
                    <ScrollReveal>
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-3xl font-black text-blue-900 mb-6">Partnership for Innovation</h2>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                KORIA와 함께 글로벌 시장에서의 새로운 기회를 발견하십시오.<br />
                                우리는 단순한 연결을 넘어, 성장을 향한 가장 신뢰할 수 있는 파트너가 되어 드립니다.
                            </p>
                        </div>
                    </ScrollReveal>
                </Container>
            </div>
        </div>
    );
}
