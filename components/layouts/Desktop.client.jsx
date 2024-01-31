'use client'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import HomeSVG from '@/public/assets/footer/home.svg';
import AverageSVG from '@/public/assets/footer/average.svg';
import FavoritesSVG from '@/public/assets/footer/favorites.svg';
import LankingSVG from '@/public/assets/footer/lanking.svg';

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
                                <HomeSVG color={pathname === '/' ? '#22211F' : '#B6B6B6'} />
                                홈
                            </div>
                        </Link>
                        <Link href="/average">
                            <div style={{ borderTop: `${pathname === '/average' && '2px solid var(--Point, #FF951A)'}` }}>
                                <AverageSVG color={pathname === '/average' ? '#22211F' : '#B6B6B6'} />
                                평균
                            </div>
                        </Link>
                        <Link href="/favorites">
                            <div style={{ borderTop: `${pathname === '/favorites' && '2px solid var(--Point, #FF951A)'}` }}>
                                <FavoritesSVG color={pathname === '/favorites' ? '#22211F' : '#B6B6B6'} />
                                랭킹
                            </div>
                        </Link>
                        <Link href="/lank">
                            <div style={{ borderTop: `${pathname === '/lank' && '2px solid var(--Point, #FF951A)'}` }}>
                                <LankingSVG color={pathname === '/lank' ? '#22211F' : '#B6B6B6'} />
                                즐겨찾기
                            </div>
                        </Link>
                    </footer>
                </wrap>
            </div>
        </div >
    );
};

export default Desktop;