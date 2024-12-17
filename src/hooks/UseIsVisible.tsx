import { useEffect, useState, RefObject } from "react";

export function useIsVisible(ref: RefObject<HTMLElement>): boolean {
    const [isIntersecting, setIsIntersecting] = useState<boolean>(false);

    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting);
        });

        observer.observe(ref.current);

        return () => {
            observer.disconnect();
        };
    }, [ref]);

    return isIntersecting;
}
