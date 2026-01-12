import PortfolioBackground from "./components/PortfolioBackground";
import Portfolio from "./pages/Portfolio";
function App() {
  return (
    <div className="relative min-h-screen bg-[#0d0d0d] text-white">
      
      {/* Background */}
      <PortfolioBackground />

      {/* Content */}
      <div className="relative z-10">
        <Portfolio></Portfolio>
      </div>

    </div>
  );
}

export default App;
