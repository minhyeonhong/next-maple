'use client'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import HomeSVG from '@/public/assets/footer/home.svg';

const Desktop = ({ vh, children }) => {
    const pathname = usePathname();

    return (
        <div style={{ width: '100%', height: `${vh}px` }}>
            <div className="h-[100%] px-[5%] grid grid-cols-3 bg-slate-500">
                <wrap className="col-span-2 bg-purple-300"></wrap>
                <wrap>
                    <main className="h-[90%] bg-blue-200">{children}</main>
                    <footer style={{ boxShadow: '0px -4px 8px 0px rgba(0, 0, 0, 0.04)' }}
                        className="px-[2%] pb-[2%] h-[10%] grid grid-cols-4 bg-[#FFF]">
                        <Link href="/">
                            <div style={{ borderTop: `${pathname === '/' && '2px solid var(--Point, #FF951A)'}` }}>
                                <HomeSVG color={pathname === '/' ? '#22211F' : '#B6B6B6'}></HomeSVG>
                                홈
                            </div>
                        </Link>
                        <div className=" bg-red-200">평균</div>
                        <div className=" bg-blue-200">랭킹</div>
                        <div className=" bg-green-200">즐겨찾기</div>
                    </footer>
                </wrap>
            </div>
        </div >
    );
};

export default Desktop;