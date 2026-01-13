import { useState, useEffect } from 'react';

const ClickRippleEffect = () => {
  const [ripples, setRipples] = useState([]);

  useEffect(() => {
    const createRipple = (e) => {
      const ripple = {
        x: e.clientX,
        y: e.clientY,
        id: Date.now() + Math.random()
      };

      setRipples((prev) => [...prev, ripple]);

      // Hapus ripple setelah animasi selesai
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== ripple.id));
      }, 1500);
    };

    // Tambahkan event listener ke document
    document.addEventListener('click', createRipple);

    // Cleanup saat component unmount
    return () => {
      document.removeEventListener('click', createRipple);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {ripples.map((ripple) => (
        <div key={ripple.id} className="absolute" style={{
          left: ripple.x,
          top: ripple.y,
          transform: 'translate(-50%, -50%)'
        }}>
          {/* Wave 1 */}
          <div
            className="absolute rounded-full border-2 border-purple-500 pointer-events-none"
            style={{
              width: '20px',
              height: '20px',
              transform: 'translate(-50%, -50%)',
              animation: 'rippleWave 1s ease-out forwards'
            }}
          />
          
          {/* Wave 2 - delayed */}
          <div
            className="absolute rounded-full border-2 border-purple-400 pointer-events-none"
            style={{
              width: '20px',
              height: '20px',
              transform: 'translate(-50%, -50%)',
              animation: 'rippleWave 1s ease-out 0.15s forwards'
            }}
          />
          
          {/* Wave 3 - more delayed */}
          <div
            className="absolute rounded-full border border-purple-300 pointer-events-none"
            style={{
              width: '20px',
              height: '20px',
              transform: 'translate(-50%, -50%)',
              animation: 'rippleWave 1s ease-out 0.3s forwards'
            }}
          />
        </div>
      ))}

      <style>{`
        @keyframes rippleWave {
          0% {
            width: 20px;
            height: 20px;
            opacity: 1;
          }
          50% {
            opacity: 0.6;
          }
          100% {
            width: 100px;
            height: 100px;
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default ClickRippleEffect;