const PortfolioBackground = () => {
  return (
    <div className="fixed inset-0 bg-black overflow-hidden pointer-events-none z-0">
      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-purple-900/10 via-transparent to-purple-900/10"></div>
      
      {/* Animated dots scattered */}
      <div className="absolute top-20 right-20 w-2 h-2 bg-white rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-40 w-1 h-1 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute bottom-32 left-20 w-2 h-2 bg-white rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/3 left-32 w-1 h-1 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
      <div className="absolute bottom-20 right-32 w-1 h-1 bg-white rounded-full animate-pulse" style={{animationDelay: '0.8s'}}></div>
      <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '1.2s'}}></div>
      <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
      
      {/* Floating circles */}
      <div className="absolute top-1/4 left-10 w-32 h-32 border border-purple-600/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
      <div className="absolute bottom-1/4 right-10 w-48 h-48 border border-purple-600/10 rounded-full animate-[spin_30s_linear_infinite_reverse]"></div>
      <div className="absolute top-1/2 left-1/3 w-24 h-24 border border-purple-600/15 rounded-full animate-[spin_25s_linear_infinite]"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#9d4edd 1px, transparent 1px), linear-gradient(90deg, #9d4edd 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      {/* Diagonal lines */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-10 left-0 w-full h-px bg-linear-to-r from-transparent via-purple-600 to-transparent transform -rotate-12"></div>
        <div className="absolute top-1/3 left-0 w-full h-px bg-linear-to-r from-transparent via-purple-600 to-transparent transform rotate-12"></div>
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-linear-to-r from-transparent via-purple-600 to-transparent transform -rotate-12"></div>
      </div>
      
      {/* Glowing orbs */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      
      {/* Decorative shapes */}
      <div className="absolute top-32 right-24 opacity-20">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#9d4edd" strokeWidth="1.5">
          <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
        </svg>
      </div>
      
      <div className="absolute bottom-40 left-24 opacity-10">
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#9d4edd" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 6v6l4 2"></path>
        </svg>
      </div>
      
      <div className="absolute top-1/2 right-40 opacity-10 transform rotate-45">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="9" y1="9" x2="15" y2="15"></line>
          <line x1="15" y1="9" x2="9" y2="15"></line>
        </svg>
      </div>
      
      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-purple-400 rounded-full animate-pulse"
          style={{
            // eslint-disable-next-line react-hooks/purity
            top: `${Math.random() * 100}%`,
            // eslint-disable-next-line react-hooks/purity
            left: `${Math.random() * 100}%`,
            // eslint-disable-next-line react-hooks/purity
            animationDelay: `${Math.random() * 3}s`,
            // eslint-disable-next-line react-hooks/purity
            opacity: Math.random() * 0.5 + 0.2
          }}
        ></div>
      ))}
      
      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-purple-600/30"></div>
      <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-purple-600/30"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-purple-600/30"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-purple-600/30"></div>
    </div>
  );
};

export default PortfolioBackground;