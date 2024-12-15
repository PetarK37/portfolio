import React, { useEffect, useRef, useState } from "react";
import DesktopNavbar from "./components/layout/DesktopNavbar";
import MobileNavbar from "./components/layout/MobileNavbar";
import MainSection from "./pages/MainSection";

function App() {
  const navbarRef = useRef(null); // Ref for the DesktopNavbar
  const [navbarWidth, setNavbarWidth] = useState(0); // State to store navbar width
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    // Dynamically calculate and update navbar width
    if (navbarRef.current) {
      setNavbarWidth(navbarRef.current.offsetWidth);
    }
  }, []);

  const updateNavbarWidth = () => {
    if (navbarRef.current) {
      setNavbarWidth(navbarRef.current.offsetWidth);
    }
  };

  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 1024);
    updateNavbarWidth();
  };

  useEffect(() => {
    updateNavbarWidth();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col lg:flex-row h-full gap-5 lg:align-middle lg:justify-center text-center">
      {/* Mobile Navbar */}
      <div className="block lg:hidden w-full fixed right-0 z-10">
        <MobileNavbar />
      </div>
      {/* Main Content */}
      <div
        style={{
          paddingRight: isDesktop ? `${navbarWidth}px` : "0px",
        }}
      >
        <MainSection />
      </div>
      {/* Desktop Navbar */}
      <div
        ref={navbarRef} // Attach ref to measure width
        className="hidden lg:block ml-auto fixed right-0 h-full"
      >
        <DesktopNavbar />
      </div>
    </div>
  );
}

export default App;
