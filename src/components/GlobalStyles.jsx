export default function GlobalStyles() {
  return (
    <style>{`
        * {
          -webkit-tap-highlight-color: transparent;
          -webkit-focus-ring-color: transparent;
          outline: none;
        }
        
        @import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap");

        @property --angle {
          syntax: "<angle>";
          initial-value: 0deg;
          inherits: false;
        }
        
        @keyframes spin {
          to {
            --angle: 360deg;
          }
        }

        @keyframes move-glow {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-move-glow {
          animation: move-glow 3s ease infinite;
        }

        #navbar {
          position: relative;
          padding-left: 0 !important;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        #navbar li {
          list-style: none;
          margin: 0;
          padding: 0;
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        #navbar a {
          font-size: 1rem;
          color: #6b7280;
          text-decoration: none;
          transition: all 0.6s cubic-bezier(0.34, 2, 0.64, 1);
          display: block;
          white-space: nowrap;
          opacity: 0.6;
          padding: 4px 16px;
        }

        #navbar a:hover {
          color: #9d4edd;
          opacity: 0.85;
        }

        #navbar a.nav-active {
          color: #9d4edd;
          font-size: 1.75rem;
          font-weight: 600;
          opacity: 1;
          text-shadow: 0 0 15px rgba(157, 78, 221, 0.3);
          letter-spacing: 0.5px;
          padding: 8px 16px;
        }

        #navbar li:not(:has(.nav-active)) a {
          font-size: 1rem;
          opacity: 0.6;
        }

        /* Hamburger Styles */
        .hamburger {
          padding: 15px 15px;
          display: inline-block;
          cursor: pointer;
          transition-property: opacity, filter;
          transition-duration: 0.15s;
          transition-timing-function: linear;
          font: inherit;
          color: inherit;
          text-transform: none;
          background-color: transparent;
          border: 0;
          margin: 0;
          overflow: visible;
        }
        
        .hamburger:hover {
          opacity: 0.7;
        }
        
        .hamburger.is-active:hover {
          opacity: 0.7;
        }
        
        .hamburger.is-active .hamburger-inner,
        .hamburger.is-active .hamburger-inner::before,
        .hamburger.is-active .hamburger-inner::after {
          background-color: #ffffff;
        }

        .hamburger-box {
          width: 40px;
          height: 24px;
          display: inline-block;
          position: relative;
        }

        .hamburger-inner {
          display: block;
          top: 50%;
          margin-top: -2px;
        }
        
        .hamburger-inner,
        .hamburger-inner::before,
        .hamburger-inner::after {
          width: 30px;
          height: 3px;
          background-color: #ffffff;
          border-radius: 4px;
          position: absolute;
          transition-property: transform;
          transition-duration: 0.15s;
          transition-timing-function: ease;
        }
        
        .hamburger-inner::before,
        .hamburger-inner::after {
          content: "";
          display: block;
        }
        
        .hamburger-inner::before {
          top: -10px;
        }
        
        .hamburger-inner::after {
          bottom: -10px;
        }

        .hamburger--collapse .hamburger-inner {
          top: auto;
          bottom: 0;
          transition-duration: 0.13s;
          transition-delay: 0.13s;
          transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
        }
        
        .hamburger--collapse .hamburger-inner::after {
          top: -20px;
          transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
            opacity 0.1s linear;
        }
        
        .hamburger--collapse .hamburger-inner::before {
          transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
            transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
        }

        .hamburger--collapse.is-active .hamburger-inner {
          transform: translate3d(0, -10px, 0) rotate(-45deg);
          transition-delay: 0.22s;
          transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        }
        
        .hamburger--collapse.is-active .hamburger-inner::after {
          top: 0;
          opacity: 0;
          transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
            opacity 0.1s 0.22s linear;
        }
        
        .hamburger--collapse.is-active .hamburger-inner::before {
          top: 0;
          transform: rotate(-90deg);
          transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
            transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
        }

    `}</style>
  );
}
