'use client'
import { usePathname } from 'next/navigation';
import Footer from './footer/Footer.client';

const Desktop = ({ children }) => {
    const pathname = usePathname();

    return (
        <div className="w-[100%] h-[100%] px-[5%] grid grid-cols-3">
            <div className="col-span-2 bg-purple-100"></div>
            <div className="min-w-[530px] bg-[#FFF] shadow-[0_0_20px_0_rgba(0,0,0,0.2)]">
                <div className=" h-[90%] px-[2%]">{children}</div>
                <Footer pathname={pathname}></Footer>
            </div>
        </div>
    );
};

export default Desktop;