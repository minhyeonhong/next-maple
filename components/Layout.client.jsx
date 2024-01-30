'use client'
import { useEffect, useState } from "react";
import { useMediaQuery } from 'react-responsive';
import useVh from "@/hooks/useVh";
import styles from './styles/Layout.module.css';

const Layout = ({ children }) => {
    const vh = useVh();
    const isDesktop = useMediaQuery({ minWidth: 1024 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
    const isMobile = useMediaQuery({ maxWidth: 767 });

    const [type, setType] = useState({});

    useEffect(() => {
        setType({ desktop: isDesktop, tablet: isTablet, mobile: isMobile });
    }, [isDesktop, isTablet, isMobile]);

    return (
        <div css={{ width: '100%', height: `${100 * vh}px` }}>
            {type.desktop && <div className={styles.desktopLayout}>desktop{children}</div>}
            {type.tablet && <div className={styles.tabletLayout}>tablet{children}</div>}
            {type.mobile && <div className={styles.mobileLayout}>mobile{children}</div>}
        </div>
    );
};

export default Layout;