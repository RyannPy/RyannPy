import React, { useState, useEffect, useRef } from 'react';

import DesktopNavbar from '../components/navbar/DesktopNavbar';
import MobileNavbar from '../components/navbar/MobileNavbar';
import MobileSidebar from '../components/navbar/MobileSidebar';
import GlobalStyles from '../components/GlobalStyles';

// SECTION
import Home from '../components/home/Home';
import About from '../components/about/About';
import Services from '../components/services/Services';
import Skills from '../components/skills/Skills';
import Project from '../components/project/Project';
import Contact from '../components/contact/Contact';

export default function Portfolio() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const mainRef = useRef(null);
  const sidebarRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(targetId);
      window.history.pushState(null, '', `#${targetId}`);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        sidebarRef.current &&
        buttonRef.current &&
        !sidebarRef.current.contains(e.target) &&
        !buttonRef.current.contains(e.target) &&
        isMobileMenuOpen
      ) {
        closeMobileMenu();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0
      }
    );

    sections.forEach(section => observer.observe(section));
    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  useEffect(() => {
    const hash = window.location.hash.substring(1) || 'home';
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setActiveSection(hash);
  }, []);

  return (
    <>
      <GlobalStyles />

      <div className="min-h-screen bg-none overflow-x-hidden flex font-['Ubuntu',sans-serif]" style={{ scrollBehavior: 'smooth' }}>
        <DesktopNavbar activeSection={activeSection} onNavClick={handleNavClick} />

        <div ref={buttonRef}>
          <MobileNavbar isActive={isMobileMenuOpen} onToggle={toggleMobileMenu} />
        </div>

        <div ref={sidebarRef}>
          <MobileSidebar
            isOpen={isMobileMenuOpen}
            onClose={closeMobileMenu}
            onNavClick={handleNavClick}
          />
        </div>

        <main
          ref={mainRef}
          id="main-container"
          className={`transition-[filter] duration-700 ease-in-out md:ml-48 mt-15 md:mt-0 p-8 text-white flex-1 ${
            isMobileMenuOpen ? 'blur-sm' : ''
          }`}
        >
          <Home></Home>
          <About></About>
          <Services></Services>
          <Skills></Skills>
          <Project></Project>
          <Contact></Contact>
        </main>
      </div>
    </>
  );
}
