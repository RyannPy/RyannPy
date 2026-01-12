import React from 'react';

const MobileSidebar = ({ isOpen, onClose, onNavClick }) => {
  const navItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Project', href: '#project', id: 'project' },
    { name: 'Contact', href: '#contact', id: 'contact' }
  ];

  return (
    <aside
      id="mobile-sidebar"
      className={`fixed top-0 right-0 h-screen w-62.5 z-40 bg-[rgba(20,20,20,0.95)] transform transition-transform duration-300 ease-in-out md:hidden ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
      aria-hidden={!isOpen}
    >
      <nav className="pt-20">
        <ul className="flex flex-col">
          {navItems.map((item) => (
            <li key={item.name} className="w-full">
              <a
                href={item.href}
                className="block w-full px-10 py-5 text-white hover:text-[#9d4edd] transition"
                onClick={(e) => {
                  onNavClick(e, item.id);
                  onClose();
                }}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default MobileSidebar;
