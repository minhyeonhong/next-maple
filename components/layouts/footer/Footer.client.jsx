'use client'
import Button from './Button.client';

const Footer = () => {
    return (
        <footer className="px-[2%] pb-[2%] h-[10%] grid grid-cols-4 shadow-[0_-4px_18px_-4px_rgba(0,0,0,0.04)]">
            <Button url="/" type="HomeSVG">홈</Button>
            <Button url="/average" type="AverageSVG">평균</Button>
            <Button url="/lank" type="LankingSVG">랭킹</Button>
            <Button url="/favorites" type="FavoritesSVG">즐겨찾기</Button>
        </footer>
    );
};

export default Footer;