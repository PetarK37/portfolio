import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ThemeToggle from "../ui/ThemeToggle";

function MobileNavbar() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className="relative flex justify-end px-2">
            {/* Hamburger Icon */}
            <button
                onClick={() => setIsOpen(true)}
                className="p-2 focus:outline-none focus:ring"
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
                        d={
                            isOpen
                                ? "M6 18L18 6M6 6l12 12"
                                : "M4 6h16M4 12h16M4 18h16"
                        }
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
                            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-20"
                        ></motion.div>

                        {/* Drawer Content */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "tween", duration: 0.3 }}
                            className="fixed top-0 right-0 h-full w-3/4 bg-background shadow-lg z-30 flex flex-col p-6 transition-bg duration-500"
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

                            </div>
                            <div className="self-end">
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default MobileNavbar