import { useEffect, useMemo, useRef, useState } from "react";
import DesktopNavbar from "./components/layout/DesktopNavbar";
import MobileNavbar from "./components/layout/MobileNavbar";
import MainSection from "./pages/MainSection";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "./context/ThemeContext";

function App() {
  const navbarRef = useRef<HTMLDivElement>(null);
  const [navbarWidth, setNavbarWidth] = useState(0); // State to store navbar width
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
  const [init, setInit] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    // Dynamically calculate and update navbar width
    if (navbarRef.current) {
      setNavbarWidth(navbarRef.current.offsetWidth);
    }
  }, []);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(() => {
    const textColor = theme === "dark" ? "#f3f4f6" : "#040f16ff";
    return {
      autoPlay: true,
      clear: true,
      delay: 0,
      fullScreen: {
        enable: true,
        zIndex: -10,
      },
      detectRetina: true,
      duration: 0,
      fpsLimit: 120,
      manualParticles: [],
      particles: {
        bounce: {
          horizontal: {
            value: 1,
          },
          vertical: {
            value: 1,
          },
        },
        collisions: {
          absorb: {
            speed: 1,
          },
          bounce: {
            horizontal: {
              value: 5,
            },
            vertical: {
              value: 5,
            },
          },
          enable: false,
          maxSpeed: 50,
          mode: "bounce",
          overlap: {
            enable: true,
            retries: 0,
          },
        },
        color: {
          value: textColor,
          animation: {
            h: {
              count: 0,
              enable: false,
              speed: 1,
              decay: 0,
              delay: 0,
              sync: true,
              offset: 0,
            },
            s: {
              count: 0,
              enable: false,
              speed: 1,
              decay: 0,
              delay: 0,
              sync: true,
              offset: 0,
            },
            l: {
              count: 0,
              enable: false,
              speed: 1,
              decay: 0,
              delay: 0,
              sync: true,
              offset: 0,
            },
          },
        },
        effect: {
          close: true,
          fill: true,
          options: {},
          type: [],
        },
        groups: {},
        move: {
          angle: {
            offset: 0,
            value: 90,
          },
          attract: {
            distance: 200,
            enable: false,
            rotate: {
              x: 3000,
              y: 3000,
            },
          },
          center: {
            x: 50,
            y: 50,
            mode: "percent",
            radius: 0,
          },
          decay: 0,
          distance: {},
          direction: MoveDirection.none,
          drift: 0,
          enable: true,
          gravity: {
            acceleration: 9.81,
            enable: false,
            inverse: false,
            maxSpeed: 50,
          },
          path: {
            clamp: true,
            delay: {
              value: 0,
            },
            enable: false,
            options: {},
          },
          outModes: {
            default: OutMode.out,
          },
          random: false,
          size: false,
          speed: 1,
          spin: {
            acceleration: 0,
            enable: false,
          },
          straight: false,
          trail: {
            enable: false,
            length: 10,
            fill: {},
          },
          vibrate: false,
          warp: false,
        },
        number: {
          density: {
            enable: true,
            area: 800, // Density area based on viewport size, you can adjust this value
            factor: 1000,
          },
          limit: {
            mode: "delete",
            value: 0,
          },
          value: 130,
        },
        opacity: {
          value: {
            min: 0.1,
            max: 0.3,
          },
          animation: {
            count: 0,
            enable: true,
            speed: 3,
            decay: 0,
            delay: 0,
            sync: false,
            mode: "auto",
            startValue: "random",
            destroy: "none",
          },
        },
        reduceDuplicates: false,
        shadow: {
          blur: 0,
          color: {
            value: "#000",
          },
          enable: false,
          offset: {
            x: 0,
            y: 0,
          },
        },
        shape: {
          close: true,
          fill: true,
          options: {},
          type: "circle",
        },
        size: {
          value: {
            min: 1,
            max: 5,
          },
          animation: {
            count: 0,
            enable: true,
            speed: 5,
            decay: 0,
            delay: 0,
            sync: false,
            mode: "auto",
            startValue: "random",
            destroy: "none",
          },
        },
        stroke: {
          width: 0,
        },
        zIndex: {
          value: 0,
          opacityRate: 1,
          sizeRate: 1,
          velocityRate: 1,
        },
        destroy: {
          bounds: {},
          mode: "none",
          split: {
            count: 1,
            factor: {
              value: 3,
            },
            rate: {
              value: {
                min: 4,
                max: 9,
              },
            },
            sizeOffset: true,
            particles: {},
          },
        },
        roll: {
          darken: {
            enable: false,
            value: 0,
          },
          enable: false,
          enlighten: {
            enable: false,
            value: 0,
          },
          mode: "vertical",
          speed: 25,
        },
        tilt: {
          value: 0,
          animation: {
            enable: false,
            speed: 0,
            decay: 0,
            sync: false,
          },
          direction: "clockwise",
          enable: false,
        },
        twinkle: {
          lines: {
            enable: false,
            frequency: 0.05,
            opacity: 1,
          },
          particles: {
            enable: false,
            frequency: 0.05,
            opacity: 1,
          },
        },
        wobble: {
          distance: 5,
          enable: false,
          speed: {
            angle: 50,
            move: 10,
          },
        },
        life: {
          count: 0,
          delay: {
            value: 0,
            sync: false,
          },
          duration: {
            value: 0,
            sync: false,
          },
        },
        rotate: {
          value: 0,
          animation: {
            enable: false,
            speed: 0,
            decay: 0,
            sync: false,
          },
          direction: "clockwise",
          path: false,
        },
        orbit: {
          animation: {
            count: 0,
            enable: false,
            speed: 1,
            decay: 0,
            delay: 0,
            sync: false,
          },
          enable: false,
          opacity: 1,
          rotation: {
            value: 45,
          },
          width: 1,
        },
        links: {
          blink: false,
          color: {
            value: textColor,
          },
          consent: false,
          distance: 150,
          enable: true,
          frequency: 1,
          opacity: 0.4,
          shadow: {
            blur: 5,
            color: {
              value: "#000",
            },
            enable: false,
          },
          triangles: {
            enable: false,
            frequency: 1,
          },
          width: 1,
          warp: false,
        },
        repulse: {
          value: 0,
          enabled: false,
          distance: 1,
          duration: 1,
          factor: 1,
          speed: 1,
        },
      },
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
      responsive: [],
      smooth: false,
      style: {},
      themes: [],
      zLayers: 100,
      key: "parallax",
      name: "Parallax",
      motion: {
        disable: false,
        reduce: {
          factor: 4,
          value: true,
        },
      },
    };
  }, [theme]);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

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
    <>
      <div
        className="absolute top-0 left-0 h-full w-full -z-10"
        id="tsparticles"
      ></div>
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
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      )}
    </>
  );
}

export default App;
