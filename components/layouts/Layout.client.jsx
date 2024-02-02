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
        <div style={{ width: '100%', height: `${100 * vh}px`, backgroundColor:'#F0F1F3'}}>
            {type.desktop && <Desktop>{children}</Desktop>}
            {type.tablet  && <Tablet>{children}</Tablet>}
            {type.mobile  && <Mobile>{children}</Mobile>}
        </div>
    );
};

export default Layout;