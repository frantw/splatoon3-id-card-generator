import { useState, useEffect, useRef } from 'react';

type sizeType = {
    width: number;
    height: number;
};

const useElementSize = () => {
    const elementRef = useRef<HTMLDivElement>(null);
    const [elementSize, setElementSize] = useState<sizeType>({
        width: 0,
        height: 0,
    });

    useEffect(() => {
        const updateElementSize = () => {
            setElementSize({
                width: elementRef.current?.offsetWidth || 0,
                height: elementRef.current?.offsetHeight || 0,
            });
        };

        window.addEventListener('resize', updateElementSize);
        updateElementSize();

        return () => window.removeEventListener('resize', updateElementSize);
    }, []);

    return { elementRef, elementSize };
};

export default useElementSize;
