import { useState, useEffect, useRef, Dispatch, SetStateAction } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-scroll";
import { NAV_ITEMS } from "../../utils/constants";
import { useTheme } from "../../context/ThemeContext";

interface Position {
  left: number;
  width: number;
}

function Navbar() {
  const [activeSection, setActiveSection] = useState("none");
  const [position, setPosition] = useState<Position>({ left: 0, width: 0 });
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Track scroll for navbar bg
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // IntersectionObserver for active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* Desktop Navbar — floating pill */}
      <nav
        className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center gap-1 px-2 py-1.5 rounded-full border transition-all duration-500 ease-out-expo ${
          scrolled
            ? "bg-surface/80 backdrop-blur-xl border-border/50 shadow-diffuse"
            : "bg-transparent border-transparent"
        }`}
      >
        {/* Monogram */}
        <span className="px-3 py-1.5 text-sm font-semibold tracking-tight">
          PK
        </span>

        {/* Nav items */}
        <div className="relative flex items-center">
          {NAV_ITEMS.map((item) => (
            <NavTab
              key={item.id}
              id={item.id}
              label={item.label}
              offset={item.offset}
              active={activeSection === item.id}
              setPosition={setPosition}
            />
          ))}
          {/* Sliding pill indicator */}
          <motion.div
            className="absolute h-full rounded-full bg-accent/10 -z-10"
            animate={{
              left: position.left,
              width: position.width,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        </div>

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className="ml-2 p-2 rounded-full hover:bg-accent/10 transition-colors cursor-pointer"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Navbar */}
      <nav className="fixed top-4 right-4 z-50 md:hidden flex items-center gap-2">
        <button
          onClick={toggleTheme}
          className="p-2.5 rounded-full bg-surface/80 backdrop-blur-xl border border-border/50 shadow-diffuse cursor-pointer"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
            </svg>
          )}
        </button>
        <button
          onClick={() => setMobileOpen(true)}
          className="p-2.5 rounded-full bg-surface/80 backdrop-blur-xl border border-border/50 shadow-diffuse cursor-pointer"
          aria-label="Open menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-background/80 backdrop-blur-md z-[100]"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[75%] max-w-[320px] bg-surface border-l border-border z-[101] flex flex-col p-8"
            >
              <button
                onClick={() => setMobileOpen(false)}
                className="self-end p-2 text-text-secondary hover:text-text cursor-pointer"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <ul className="flex flex-col gap-6 mt-12">
                {NAV_ITEMS.map((item, i) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05, type: "spring", damping: 20 }}
                  >
                    <Link
                      to={item.id}
                      smooth={true}
                      duration={500}
                      offset={item.offset}
                      onClick={() => setMobileOpen(false)}
                      className={`text-lg font-medium tracking-tight cursor-pointer transition-colors ${
                        activeSection === item.id
                          ? "text-accent"
                          : "text-text-secondary hover:text-text"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-auto">
                <a
                  href="/files/Resume_PetarK.pdf"
                  download
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border text-sm font-medium hover:border-accent hover:text-accent transition-colors"
                >
                  Download CV
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

// Individual nav tab with ref measurement for sliding indicator
function NavTab({
  id,
  label,
  offset,
  active,
  setPosition,
}: {
  id: string;
  label: string;
  offset: number;
  active: boolean;
  setPosition: Dispatch<SetStateAction<Position>>;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (active && ref.current) {
      setPosition({
        left: ref.current.offsetLeft,
        width: ref.current.offsetWidth,
      });
    }
  }, [active, setPosition]);

  return (
    <div ref={ref}>
      <Link
        to={id}
        smooth={true}
        duration={500}
        offset={offset}
        className={`px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.15em] cursor-pointer transition-colors rounded-full ${
          active ? "text-accent" : "text-text-secondary hover:text-text"
        }`}
      >
        {label}
      </Link>
    </div>
  );
}

export default Navbar;
