'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import HomeSVG from '@/public/assets/footer/home.svg';
import AverageSVG from '@/public/assets/footer/average.svg';
import FavoritesSVG from '@/public/assets/footer/favorites.svg';
import LankingSVG from '@/public/assets/footer/lanking.svg';

const Button = ({ url, type, children }) => {
    const pathname = usePathname();

    return (
        <Link href={url}>
            <div style={{ borderTop: `${pathname === url && '2px solid var(--Point, #FF951A)'}` }}
                className="h-[100%] flex flex-col items-center justify-center">
                {type === 'HomeSVG' && <HomeSVG color={pathname === url ? '#22211F' : '#B6B6B6'} />}
                {type === 'AverageSVG' && <AverageSVG color={pathname === url ? '#22211F' : '#B6B6B6'} />}
                {type === 'FavoritesSVG' && <FavoritesSVG color={pathname === url ? '#22211F' : '#B6B6B6'} />}
                {type === 'LankingSVG' && <LankingSVG color={pathname === url ? '#22211F' : '#B6B6B6'} />}
                <span style={{ color: `${pathname === url ? '#22211F' : '#B6B6B6'}` }}
                className="mt-2 font-bold">{children}</span>
            </div>
        </Link>
    );
};

export default Button;