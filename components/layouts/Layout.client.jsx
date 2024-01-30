'use client'
import { useEffect, useState } from "react";
import { useMediaQuery } from 'react-responsive';
import useVh from "@/hooks/useVh";
import styles from '../styles/Layout.module.css';
import Desktop from "./Desktop.client";
import Tablet from "./Tablet.client";
import Mobile from "./Mobile.client";

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
        <>
        {/* {type.desktop && <div style={{ width: '100%', height: `${100 * vh}px`}} className={styles['desktop-layout']}>desktop{children}</div>} */}
            {type.desktop && <Desktop style={{ width: '100%', height: `${100 * vh}px`}} >{children}</Desktop>}
            {type.tablet  && <Tablet style={{ width: '100%', height: `${100 * vh}px`}} >{children}</Tablet>}
            {type.mobile  && <Mobile style={{ width: '100%', height: `${100 * vh}px`}} >{children}</Mobile>}
        </>
    );
};

export default Layout;