import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import ThemeToggle from "../ui/ThemeToggle";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { NAV_ITEMS } from "../../utils/Constants";

interface Position {
    top: number;
    height: number;
}

function DesktopNavbar() {
    const [activeSection, setActiveSection] = useState("hero");
    const [position, setPosition] = useState<Position>({
        top: 0,
        height: 0,
    });

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.5,
            }
        );

        NAV_ITEMS.forEach((item) => {
            const element = document.getElementById(item.id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="flex flex-col h-full align-top justify-center p-4 ">
            <div className="mb-auto ml-auto">
                <ThemeToggle />
            </div>
            <ul className="relative mb-auto text-xl px-3 uppercase font-semibold tracking-widest flex flex-col gap-3 justify-start text-left">
                {NAV_ITEMS.map((item) => (
                    <Tab
                        setPosition={setPosition}
                        active={item.id === activeSection}
                        key={item.id}
                    >
                        <li
                            className={`hover:text-primary cursor-pointer ${activeSection === item.id ? "text-primary" : ""
                                }`}
                        >
                            <Link
                                to={item.id}
                                smooth={true}
                                duration={500}
                                offset={item.offset}
                            >
                                {item.label}
                            </Link>
                        </li>
                    </Tab>
                ))}
                <Cursor position={position} />
            </ul>
        </div>
    );
}

interface NavTabProps {
    setPosition: Dispatch<SetStateAction<Position>>;
    children: React.ReactElement;
    active: boolean;
}

const Tab = ({ children, setPosition, active }: NavTabProps) => {
    const ref = useRef(null);
    useEffect(() => {
        if (active) {
            if (!ref?.current) return;

            const { height } = ref.current.getBoundingClientRect();

            setPosition({
                top: ref.current.offsetTop,
                height,
            });
        }
    }, [active, setPosition]);

    return (
        <div ref={ref} className="relative z-10 pl-3">
            {children}
        </div>
    );
};

interface CursorProps {
    position: object;
}

const Cursor = ({ position }: CursorProps) => {
    return (
        <motion.li
            animate={{
                ...position,
            }}
            className="absolute z-0 w-1 bg-primary"
        />
    );
};

export default DesktopNavbar;
