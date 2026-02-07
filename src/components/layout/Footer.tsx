import Link from 'next/link';
import Container from './Container';

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 py-12">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-1">
                        <span className="text-2xl font-bold text-white tracking-tight">KORIA</span>
                        <p className="mt-4 text-sm leading-relaxed text-slate-400">
                            AI 기반 글로벌 B2B/B2C O2O 무역 플랫폼.<br />
                            새로운 글로벌 소비 생태계를 만들어갑니다.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Platform</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/" className="hover:text-blue-400 transition-colors">홈</Link></li>
                            <li><Link href="/business-intro" className="hover:text-blue-400 transition-colors">서비스</Link></li>
                            <li><Link href="/business-strategy" className="hover:text-blue-400 transition-colors">포트폴리오</Link></li>
                            <li><Link href="/contact" className="hover:text-blue-400 transition-colors">사업 문의</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact</h3>
                        <ul className="space-y-3 text-sm">
                            <li>대표: 박동해</li>
                            <li>사업자등록번호: 123456789</li>
                            <li>주소: 서울특별시 종로구 창덕궁5길 22-8</li>
                            <li>이메일: pdh0817@taejae.ac.kr</li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                    <p>
                        © {new Date().getFullYear()} KORIA. All rights reserved.
                    </p>
                    <div className="flex gap-6 uppercase tracking-widest font-bold text-[10px] text-slate-400">
                        <span>Innovation</span>
                        <span>Connection</span>
                        <span>Global</span>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
