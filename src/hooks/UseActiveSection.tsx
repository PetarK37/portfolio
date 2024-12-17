import { useState } from "react";

export interface Position {
    top: number;
    height: number;
}

export function useActiveSection() {
    const [activeSection, setActiveSection] = useState<string>("none");
    const [position, setPosition] = useState<Position>({
        top: 0,
        height: 0,
    });

    return {
        activeSection,
        setActiveSection,
        position,
        setPosition,
    };
}
