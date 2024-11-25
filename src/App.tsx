import DesktopNavbar from "./components/layout/DesktopNavbar"
import MobileNavbar from "./components/layout/MobileNavbar"

function App() {
  return (
    <div className="flex flex-col lg:flex-row w-full h-full gap-5 lg:align-middle lg:justify-center text-center">
      {/* Mobile Navbar */}
      <div className="block lg:hidden w-full">
        <MobileNavbar />
      </div>

      {/* Main Content */}
      <div className="lg:ml-auto flex align-middle justify-center flex-col">
        <h1>
          Coming <span className="soon">soon</span>
        </h1>
        <a
          href="https://www.linkedin.com/in/petar-komordzic/"
          className="read-the-docs"
        >
          In the meantime check out my Linkedin here
        </a>
      </div>

      {/* Desktop Navbar */}
      <div className="hidden lg:block ml-auto">
        <DesktopNavbar />
      </div>
    </div>
  );
}

export default App;

