import DesktopNavbar from "./components/layout/DesktopNavbar";
import MobileNavbar from "./components/layout/MobileNavbar";
import MainSection from "./pages/MainSection";

function App() {
  return (
    <div className="flex flex-col lg:flex-row w-full h-full gap-5 lg:align-middle lg:justify-center text-center">
      {/* Mobile Navbar */}
      <div className="block lg:hidden w-full">
        <MobileNavbar />
      </div>

      {/* Main Content */}
      <MainSection />
      {/* Desktop Navbar */}
      <div className="hidden lg:block ml-auto">
        <DesktopNavbar />
      </div>
    </div>
  );
}

export default App;
