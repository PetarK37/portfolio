import Navbar from "./components/layout/Navbar";
import MainSection from "./pages/MainSection";
import GrainOverlay from "./components/ui/GrainOverlay";

function App() {
  return (
    <>
      <GrainOverlay />
      {/* Subtle mesh gradient background */}
      <div className="fixed inset-0 -z-10 gradient-mesh" />
      <div className="fixed inset-0 -z-10 bg-dot-pattern bg-dot-sm opacity-[0.02]" />

      <Navbar />
      <div className="flex flex-col items-center">
        <MainSection />
      </div>
    </>
  );
}

export default App;
