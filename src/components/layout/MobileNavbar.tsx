import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ThemeToggle from "../ui/ThemeToggle";
import { Link } from "react-scroll";
import { NAV_ITEMS } from "../../utils/Constants";
import { useActiveSection } from "../../hooks/UseActiveSection";

function MobileNavbar() {
    const { activeSection, setActiveSection } = useActiveSection();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                        return;
                    }
                    setActiveSection("none");
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
        <div className="relative flex justify-end px-2">
            {/* Hamburger Icon */}
            <button
                onClick={() => setIsOpen(true)}
                className="p-2 focus:outline-none focus:ring"
                role="menu"
                aria-label="open menu"
            >
                <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                    ></path>
                </svg>
            </button>

            {/* Side Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <div>
                        {/* Blurred Background */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-200"
                        ></motion.div>

                        {/* Drawer Content */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "tween", duration: 0.3 }}
                            className="fixed top-0 right-0 h-full w-3/4 bg-background shadow-lg z-300 flex flex-col p-6 transition-bg duration-500"
                        >
                            <div className="pb-16 flex justify-between">
                                <ThemeToggle />

                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="self-end text-gray-500 "
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <div className="flex h-full flex-col space-y-4 self-start justify-start">
                                <ul className="mb-auto text-xl px-3 uppercase font-semibold tracking-widest flex flex-col gap-3 justify-start text-left">
                                    {NAV_ITEMS.map((item) => (
                                        <li
                                            className={`hover:text-primary cursor-pointer ${activeSection === item.id ? "text-primary" : ""
                                                }`}
                                            key={item.id}
                                        >
                                            <Link
                                                to={item.id}
                                                smooth={true}
                                                duration={500}
                                                offset={item.offset}
                                                spy={true}
                                                onClick={() => {
                                                    setActiveSection(item.id);
                                                    setIsOpen(false);
                                                }}
                                            >
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="self-end"></div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default MobileNavbar;
