import { useState, useEffect } from 'react';

const IntroduceHome = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const textToType = "Ryann";

  useEffect(() => {
    const handleTyping = () => {
      // eslint-disable-next-line no-unused-vars
      const i = loopNum % 1;
      const fullText = textToType;

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <div className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      

      <div className="max-w-4xl w-full">
        {/* Badge */}
        <div className="inline-block mb-8 px-6 py-2 border-2 border-purple-600 rounded-full">
          <span className="text-white font-medium tracking-wide">Welcome to my Portfolio</span>
        </div>

        {/* Main heading with typing animation */}
        <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold mb-6">
          <span className="text-white">Hi! I'm </span>
          <span className="text-white inline-block min-w-100 transition duration-200 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]">
            {text}
            <span className="animate-pulse text-purple-500">|</span>
          </span>
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-l max-w-2xl mb-12 leading-relaxed">
           — a passionate student who loves mathematics, coding, science, and music. A curious learner and dreamer, with a guitar in one hand and code in the other, always exploring new ideas and reaching for the stars.
        </p>

        {/* CTA Button */}
        <button className="group flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-purple-600 hover:border-purple-600 transition-all duration-300">
          <span>Let's Connect</span>
          <svg 
            className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default IntroduceHome;