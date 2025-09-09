import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Play, Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/10 dark:border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-r from-primary-700 to-secondary-500 rounded-xl flex items-center justify-center shadow-lg animate-glow group-hover:scale-110 transition-transform duration-300">
              <img src="/logo.png" alt="" />
            </div>
            <span className="logo text-2xl font-bold gradient-text font-arabic">VIDIT</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`nav-link transition-colors font-medium font-arabic hover:scale-105 transform duration-300 ${
                isActive('/') 
                  ? 'text-primary-600 dark:text-primary-400' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
              }`}
            >
              الرئيسية
            </Link>
            <Link 
              to="/services" 
              className={`nav-link transition-colors font-medium font-arabic hover:scale-105 transform duration-300 ${
                isActive('/services') 
                  ? 'text-primary-600 dark:text-primary-400' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
              }`}
            >
              خدماتنا
            </Link>
            <Link 
              to="/portfolio" 
              className={`nav-link transition-colors font-medium font-arabic hover:scale-105 transform duration-300 ${
                isActive('/portfolio') 
                  ? 'text-primary-600 dark:text-primary-400' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
              }`}
            >
              أعمالنا
            </Link>
            <Link 
              to="/contact" 
              className={`nav-link transition-colors font-medium font-arabic hover:scale-105 transform duration-300 ${
                isActive('/contact') 
                  ? 'text-primary-600 dark:text-primary-400' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
              }`}
            >
              تواصل معنا
            </Link>
          </nav>

          {/* Theme Toggle & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <Link 
              to="/contact"
              className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-2.5 rounded-xl hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 transform hover:scale-105 shadow-lg font-medium font-arabic"
            >
              ابدأ مشروعك
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:scale-110 transition-transform duration-300"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              className="text-gray-700 dark:text-gray-300 hover:scale-110 transition-transform duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden glass-effect border-t border-white/10 dark:border-gray-800/50 animate-slide-down">
            <nav className="px-4 py-6 space-y-4">
              <Link 
                to="/" 
                className={`block transition-colors font-medium font-arabic ${
                  isActive('/') 
                    ? 'text-primary-600 dark:text-primary-400' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                الرئيسية
              </Link>
              <Link 
                to="/services" 
                className={`block transition-colors font-medium font-arabic ${
                  isActive('/services') 
                    ? 'text-primary-600 dark:text-primary-400' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                خدماتنا
              </Link>
              <Link 
                to="/portfolio" 
                className={`block transition-colors font-medium font-arabic ${
                  isActive('/portfolio') 
                    ? 'text-primary-600 dark:text-primary-400' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                أعمالنا
              </Link>
              <Link 
                to="/contact" 
                className={`block transition-colors font-medium font-arabic ${
                  isActive('/contact') 
                    ? 'text-primary-600 dark:text-primary-400' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                تواصل معنا
              </Link>
              <Link 
                to="/contact"
                className="block w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-3 rounded-xl hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 font-medium font-arabic text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                ابدأ مشروعك
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;