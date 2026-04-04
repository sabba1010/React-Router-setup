import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const MainLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <header className="fixed top-0 w-full bg-white/70 backdrop-blur-md border-b border-gray-200 z-10">
        <nav className="container mx-auto px-6 h-16 flex items-center justify-center">
          <ul className="flex items-center gap-8 list-none">
            <li>
              <Link to="/" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Home</Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">About</Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-6 pt-24 flex items-center justify-center text-center">
        <div className="w-full">
          <Outlet />
        </div>
      </main>

      <footer className="py-8 bg-gray-50 border-t border-gray-200 text-center text-gray-500 text-sm mt-auto">
        <p>&copy; {new Date().getFullYear()} Project Setup. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MainLayout;
