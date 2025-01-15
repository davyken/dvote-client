import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Profile from './Profile';
import { Home, Award, Users } from 'lucide-react'; 

const NAVIGATION_ITEMS = [
  { path: '/', label: 'Home', icon: <Home className="h-5 w-5 text-white" /> },
  { path: '/dashboard', label: 'Overview', icon: <Users className="h-5 w-5 text-white" /> },
];

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <button
        onClick={toggleMenu}
        className="fixed top-4 left-4 z-50 p-2 rounded-lg text-white sm:hidden bg-blue-600"
        aria-label="Toggle menu"
      >
        <span className="text-2xl">☰</span>
      </button>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-40 sm:hidden"
          onClick={toggleMenu}
        />
      )}

      <aside
        className={`
          fixed sm:static top-0 left-0 h-screen w-64 
          bg-gradient-to-b from-blue-700 to-blue-500 transform transition-transform duration-300 
          flex flex-col z-50 sm:translate-x-0 
          ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="flex flex-col h-screen">
          <div className="p-4 flex items-center justify-between">
            <h1 className="text-white text-2xl font-bold">Menu</h1>
            {isMenuOpen && (
              <button
                onClick={toggleMenu}
                className="sm:hidden text-white p-2"
                aria-label="Close menu"
              >
                <span className="text-2xl">×</span>
              </button>
            )}
          </div>

          <nav className="flex-1 p-4">
            <ul className="flex flex-col gap-6">
              {NAVIGATION_ITEMS.map(({ path, label, icon }) => (
                <li key={path}>
                  <Link
                    to={path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`
                      flex items-center gap-3 p-3 rounded-lg w-full
                      hover:bg-blue-600 transition-colors duration-200
                      ${location.pathname === path ? 'bg-blue-600' : ''}
                    `}
                  >
                    {icon}
                    <span className="text-white text-lg">{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="p-4 mt-auto">
            <div className="bg-white rounded-lg p-3 shadow-md">
              <Profile />
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;