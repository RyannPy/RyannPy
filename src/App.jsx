// COMPONENTS
import PortfolioBackground from "./components/PortfolioBackground";
import ClickRippleEffect from "./components/all/ClickRippleEffect";
// PAGES
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <div className="relative min-h-screen bg-[#0d0d0d] text-white">
      {/* Click Effect */}
      <ClickRippleEffect />
      
      {/* Background */}
      <PortfolioBackground />

      {/* Content */}
      <div className="relative z-10">
        <Portfolio />
      </div>
    </div>
  );
}

export default App;
