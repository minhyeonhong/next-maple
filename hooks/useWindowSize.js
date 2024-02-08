'use client'
import { useCallback, useEffect, useState } from "react";

const useWindowSize = () => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    const updateWindowSize = useCallback(() => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }, [setWidth, setHeight]);

    useEffect(() => {
        updateWindowSize();
        window.addEventListener('resize', updateWindowSize);

        return () => {
            window.removeEventListener('resize', updateWindowSize);
        };
    }, [updateWindowSize]);

    return { width, height };
}

export default useWindowSize;