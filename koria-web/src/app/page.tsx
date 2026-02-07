import Hero from '@/components/home/Hero';
import O2OStrategy from '@/components/home/O2OStrategy';
import Container from '@/components/layout/Container';

import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/layout/ScrollReveal';

export default function Home() {
  return (
    <div className="bg-white overflow-hidden">
      <Hero />

      {/* Brand Intro Section */}
      <section className="py-24 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-10 uppercase tracking-tighter">KORIA 브랜드 소개</h2>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="p-12 bg-blue-50 rounded-[3rem] border border-blue-100 mb-12">
                <div className="flex flex-col md:flex-row items-center justify-center gap-12 font-black text-4xl text-blue-900">
                  <div className="flex flex-col items-center">
                    <span className="text-xs font-bold text-slate-400 mb-2">KOREA</span>
                    <span>K</span>
                  </div>
                  <span className="text-slate-300">+</span>
                  <div className="flex flex-col items-center">
                    <span className="text-xs font-bold text-slate-400 mb-2">WORLD</span>
                    <div className="w-10 h-10 border-2 border-blue-600 rounded-full" />
                  </div>
                  <span className="text-slate-300">+</span>
                  <div className="flex flex-col items-center">
                    <span className="text-xs font-bold text-slate-400 mb-2 uppercase tracking-tighter">연결</span>
                    <span>RIA</span>
                  </div>
                  <span className="text-blue-500 text-6xl md:text-8xl">=</span>
                  <div className="flex flex-col items-end">
                    <span className="text-xs font-bold text-blue-600 mb-2">글로벌 연결</span>
                    <span className="text-blue-600 italic">KORIA</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.6}>
              <p className="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed">
                "세계와 연결하는 연결의 힘을 담다" <br />
                <span className="text-lg font-normal text-slate-500 mt-4 block">
                  KORIA는 유통과 컨텐츠 혁신으로 새로운 글로벌 소비 생태계를 창조하며, <br className="hidden md:block" />
                  AI 기반 O2O 기술로 차별화된 테마 상품을 전 세계로 연결합니다.
                </span>
              </p>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Metrics Section */}
      <section className="py-24 bg-slate-950 text-white relative">
        <div className="absolute inset-0 bg-blue-600/5 mix-blend-overlay"></div>
        <Container className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 text-center">
            <ScrollReveal delay={0.2}>
              <div>
                <div className="text-6xl md:text-8xl font-black text-blue-500 mb-4 tracking-tighter italic">3.5조원</div>
                <h3 className="text-xl font-bold mb-2">라이브 커머스 시장</h3>
                <p className="text-slate-400 text-sm">국내 연간 15% 성장 중</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <div>
                <div className="text-6xl md:text-8xl font-black text-blue-500 mb-4 tracking-tighter italic">51%</div>
                <h3 className="text-xl font-bold mb-2">방송 평균 거래액</h3>
                <p className="text-slate-400 text-sm">2023년 → 2024년 성장률</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.6}>
              <div>
                <div className="text-6xl md:text-8xl font-black text-blue-500 mb-4 tracking-tighter italic">230+</div>
                <h3 className="text-xl font-bold mb-2">글로벌 무역 플랫폼</h3>
                <p className="text-slate-400 text-sm">2024-2032 CAGR 8.7% 전망</p>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Innovation Section */}
      <section className="py-24 bg-white overflow-hidden">
        <Container>
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1">
              <ScrollReveal direction="right">
                <span className="text-blue-600 font-black uppercase tracking-widest text-sm mb-4 block">Innovation</span>
                <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight tracking-tighter">
                  KORIA만의 <br />혁신적인 기능
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed mb-10">
                  단일 플랫폼에서 테마별로 자유롭게 이동하며 <br />
                  온라인과 오프라인을 연결하는 새로운 경험을 제공합니다.
                </p>
                <Link href="/business-strategy" className="inline-flex items-center gap-2 group text-blue-600 font-bold text-lg">
                  로드맵 확인하기
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </ScrollReveal>
            </div>
            <div className="flex-1 relative">
              <ScrollReveal direction="left" delay={0.4}>
                <div className="w-full aspect-square bg-blue-100 rounded-full scale-110 opacity-50 blur-3xl absolute -z-10 animate-pulse"></div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-8 bg-blue-600 text-white rounded-[2rem] shadow-2xl shadow-blue-500/20 translate-y-8">
                    <h3 className="text-xl font-bold mb-2">AI Matching</h3>
                    <p className="text-blue-100 text-sm opacity-80">국가별 맞춤형 상품 추천</p>
                  </div>
                  <div className="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-xl">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">O2O Link</h3>
                    <p className="text-slate-500 text-sm">실시간 오프라인 연동</p>
                  </div>
                  <div className="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-xl">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Live Stream</h3>
                    <p className="text-slate-500 text-sm">글로벌 무역 실시간 중계</p>
                  </div>
                  <div className="p-8 bg-slate-900 text-white rounded-[2rem] shadow-2xl -translate-y-8">
                    <h3 className="text-xl font-bold mb-2">Cloud ERP</h3>
                    <p className="text-slate-400 text-sm">통합 유통 관리 시스템</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Business Model Section */}
      <section className="py-24 bg-slate-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">KORIA 비즈니스 모델</h2>
            <p className="text-xl text-slate-500">차별화된 경쟁력으로 글로벌 시장을 리드합니다</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: '공급사/셀러 플랫폼',
                items: ['상품 입점 및 콘텐츠 등록', '테마별 효율적 분류 시스템', '글로벌 판매 기회 제공'],
                image: '/biz-supplier.png'
              },
              {
                title: '브랜딩 & 콘텐츠',
                items: ['인플루언서 가이드 제시', '영상·이미지 템플릿 제공', '캠페인 성과 리포트 지원'],
                image: '/biz-branding.png'
              },
              {
                title: '글로벌 판매 네트워크',
                items: ['통합 판매 채널 운영·관리', '국가별 맞춤 마케팅 전략', '실시간 소통 거래 플랫폼'],
                image: '/biz-global.png'
              },
              {
                title: '온·오프라인 (O2O)',
                items: ['오프라인 체험 서비스 연동', '체험공간 제휴 및 지원', '고객 충성도 향상 전략'],
                image: '/biz-o2o.png'
              }
            ].map((model, idx) => (
              <div key={idx} className="group flex flex-col bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 h-full">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={model.image}
                    alt={model.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-xl font-black text-white leading-tight">
                      {model.title}
                    </h3>
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <ul className="space-y-4 mb-6">
                    {model.items.map((item, i) => (
                      <li key={i} className="text-slate-600 text-sm flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <div className="w-8 h-1 bg-blue-100 group-hover:w-full transition-all duration-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Themes Section */}
      <section className="py-24 bg-white font-sans">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <span className="text-blue-600 font-black uppercase tracking-widest text-sm mb-4 block underline decoration-4 underline-offset-4">Theme-Based Platform Structure</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight tracking-tighter">
                테마별 플랫폼 구성
              </h2>
            </div>
            <p className="text-slate-500 max-w-lg text-lg">
              이용자의 목적과 관심사에 맞게 4가지 테마로 구분되어 차별화된 경험을 제안합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: '여행 / 문화', desc: '관광지, 현지 문화 체험, 축제 정보', items: ['가이드 매칭', '실시간 번역'], color: 'from-indigo-600 to-indigo-900' },
              { title: '뷰티 / 웰니스', desc: 'K-뷰티, 웰니스 상품, 건강 콘텐츠', items: ['글로벌 직배송', '라이브 클래스'], color: 'from-rose-500 to-rose-900' },
              { title: '라이프스타일 / 교육', desc: '라이프스타일 제품, 교육 콘텐츠', items: ['K-POP 교육', '체험 워크숍'], color: 'from-emerald-500 to-emerald-900' },
              { title: '쇼핑', desc: '글로벌 상품, 라이브커머스, B2B', items: ['다국어 쇼핑', 'B2B 매칭'], color: 'from-blue-600 to-blue-900' },
            ].map((theme, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-[2.5rem] aspect-[4/5] shadow-2xl cursor-pointer">
                <div className={`absolute inset-0 bg-gradient-to-b ${theme.color} opacity-80 group-hover:opacity-100 transition-opacity`}></div>
                <div className="absolute inset-0 p-10 flex flex-col justify-end text-white transition-all transform group-hover:bg-black/20">
                  <h3 className="text-2xl font-black mb-4">{theme.title}</h3>
                  <p className="text-white/80 text-sm mb-8 leading-relaxed">{theme.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {theme.items.map((item, i) => (
                      <span key={i} className="px-3 py-1 bg-white/20 rounded-full text-[10px] font-bold uppercase tracking-wider">{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* O2O Strategy Section */}
      <O2OStrategy />

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black text-center mb-16 text-slate-900 tracking-tight">FAQ</h2>
            <div className="space-y-4">
              {[
                "KORIA 플랫폼은 어떤 서비스를 제공하나요?",
                "입점 절차는 어떻게 되나요?",
                "O2O 전략이란 무엇인가요?",
                "해외 기업과도 거래가 가능한가요?",
                "라이브커머스 서비스는 무엇인가요?",
                "K-뷰티 제품 해외 배송이 가능한가요?"
              ].map((q, i) => (
                <div key={i} className="group border border-slate-100 rounded-2xl overflow-hidden hover:border-blue-200 transition-colors">
                  <button className="w-full p-6 text-left flex justify-between items-center bg-slate-50 group-hover:bg-blue-50 transition-colors">
                    <span className="font-bold text-slate-900">{q}</span>
                    <span className="text-slate-400 group-hover:text-blue-500 transition-colors uppercase text-[10px] font-black tracking-widest">+ info</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden bg-slate-950">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-950 to-indigo-900/20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-tight italic">
              글로벌 시장 진출, <br />
              <span className="text-blue-500 not-italic">KORIA</span>와 함께하세요
            </h2>
            <p className="text-slate-400 text-lg md:text-2xl mb-16 max-w-2xl mx-auto font-light leading-relaxed">
              지금 무료 상담을 신청하시고 <br className="md:hidden" />
              맞춤형 글로벌 진출 전략을 받아보세요.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link
                href="/contact"
                className="group relative px-12 py-6 bg-blue-600 text-white font-black rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/40 hover:-translate-y-1 transition-all"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <span className="relative">무료 상담 신청</span>
              </Link>
              <a
                href="tel:010-0000-0000"
                className="px-12 py-6 bg-white/5 backdrop-blur-md border border-white/10 text-white font-black rounded-2xl hover:bg-white/10 transition-all shadow-xl"
              >
                전화 문의하기
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
