import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from './utils';
import {
  Home,
  Heart,
  Gamepad2,
  Briefcase,
  BookOpen,
  Menu,
  X,
  Moon,
  Sun
} from 'lucide-react';

export default function Layout({ children, currentPageName }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const navItems = [
    { name: 'Home', icon: Home, path: 'Home' },
    { name: 'Interests', icon: Heart, path: 'Interests' },
    { name: 'Game Shrines', icon: Gamepad2, path: 'GameShrines' },
    { name: 'Projects', icon: Briefcase, path: 'Projects' },
    { name: 'Blog', icon: BookOpen, path: 'Blog' }
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
          : 'bg-gradient-to-br from-purple-50 via-white to-orange-50'
      }`}
    >
      <style>{`
        :root {
          --color-primary: #e55ae7;
          --color-secondary: #f5983c;
          --bg-card-light: #ffffff;
          --bg-card-dark: #1f2937;
          --text-primary-light: #1f2937;
          --text-primary-dark: #f3f4f6;
          --text-secondary-light: #4b5563;
          --text-secondary-dark: #9ca3af;
        }
        
        .dark-mode h1,
        .dark-mode h2,
        .dark-mode h3,
        .dark-mode h4 {
          color: var(--text-primary-dark);
        }
        
        .dark-mode p,
        .dark-mode span,
        .dark-mode div {
          color: var(--text-secondary-dark);
        }
        
        .dark-mode .bg-white {
          background-color: var(--bg-card-dark) !important;
        }
        
        .dark-mode .shadow-lg,
        .dark-mode .shadow-xl,
        .dark-mode .shadow-2xl {
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5) !important;
        }
        
        .dark-mode .text-gray-700 {
          color: #d1d5db !important;
        }
        
        .dark-mode .text-gray-600 {
          color: #9ca3af !important;
        }
        
        .dark-mode .text-gray-500 {
          color: #6b7280 !important;
        }
        
        .dark-mode .bg-gradient-to-r.from-purple-100 {
          background: linear-gradient(to right, rgba(139, 92, 246, 0.2), rgba(245, 158, 11, 0.2)) !important;
        }
        
        .dark-mode .border-gray-200 {
          border-color: #374151 !important;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .gradient-border {
          position: relative;
        }
        
        .gradient-border::before {
          content: '';
          position: absolute;
          inset: 0;
          padding: 2px;
          background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          border-radius: inherit;
        }
        
        .nav-link-active {
          background: linear-gradient(135deg, rgba(229, 90, 231, 0.1), rgba(245, 152, 60, 0.1));
          border-left: 3px solid var(--color-primary);
        }
        
        .glow-effect {
          box-shadow: 0 0 20px rgba(229, 90, 231, 0.3), 0 0 40px rgba(245, 152, 60, 0.2);
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>

      {/* Mobile menu button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className={`lg:hidden fixed top-6 left-6 z-50 p-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${
          darkMode ? 'bg-gray-800' : 'bg-white'
        }`}
        style={{
          background: darkMode
            ? undefined
            : 'linear-gradient(135deg, rgba(229, 90, 231, 0.1), rgba(245, 152, 60, 0.1))'
        }}
      >
        {mobileMenuOpen ? (
          <X className="w-6 h-6" style={{ color: 'var(--color-primary)' }} />
        ) : (
          <Menu className="w-6 h-6" style={{ color: 'var(--color-primary)' }} />
        )}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-80 shadow-2xl z-40 transform transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 ${
          darkMode ? 'bg-gray-900 border-r border-gray-700' : 'bg-white'
        }`}
      >
        <div className="h-full flex flex-col p-8">
          {/* Profile */}
          <div className="text-center mb-8 animate-fade-in">
            <div className="relative inline-block mb-4">
              <div
                className={`w-32 h-32 rounded-full overflow-hidden glow-effect mx-auto border-4 transition-colors duration-300 ${
                  darkMode ? 'border-gray-700' : 'border-white'
                }`}
              >
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className={`absolute -bottom-2 -right-2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-colors duration-300 ${
                  darkMode ? 'bg-gray-700' : 'bg-white'
                }`}
              >
                <span className="text-2xl">✨</span>
              </div>
            </div>
            <h1 className="text-2xl font-bold gradient-text mb-1">Your Name</h1>
            <p
              className={`text-sm transition-colors duration-300 ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              Digital Creator & Dreamer
            </p>
          </div>

          {/* Dark mode toggle */}
          <div className="mb-6">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 ${
                darkMode
                  ? 'bg-gray-800 hover:bg-gray-700 text-gray-200'
                  : 'bg-gradient-to-r from-purple-50 to-orange-50 hover:from-purple-100 hover:to-orange-100 text-gray-700'
              }`}
            >
              <span className="font-medium">Theme</span>
              <div className="flex items-center gap-2">
                {darkMode ? (
                  <>
                    <Moon className="w-5 h-5 text-purple-400" />
                    <span className="text-sm">Dark</span>
                  </>
                ) : (
                  <>
                    <Sun className="w-5 h-5 text-orange-500" />
                    <span className="text-sm">Light</span>
                  </>
                )}
              </div>
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-2">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={createPageUrl(item.path)}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 hover:scale-105 ${
                  currentPageName === item.path
                    ? 'nav-link-active'
                    : darkMode
                    ? 'hover:bg-gray-800'
                    : 'hover:bg-gradient-to-r hover:from-purple-50 hover:to-orange-50'
                }`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0,
                  animation: 'fadeIn 0.6s ease-out forwards'
                }}
              >
                <item.icon
                  className="w-5 h-5"
                  style={{
                    color:
                      currentPageName === item.path
                        ? 'var(--color-primary)'
                        : '#6b7280'
                  }}
                />
                <span
                  className={`font-medium ${
                    currentPageName === item.path
                      ? 'gradient-text'
                      : darkMode
                      ? 'text-gray-300'
                      : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            ))}
          </nav>

          {/* Footer */}
          <div
            className={`mt-8 pt-6 border-t ${
              darkMode ? 'border-gray-700' : 'border-gray-200'
            }`}
          >
            <p
              className={`text-xs text-center ${
                darkMode ? 'text-gray-500' : 'text-gray-500'
              }`}
            >
              Made with <span className="gradient-text">♥</span> and creativity
            </p>
          </div>
        </div>
      </aside>

      {/* Mobile overlay */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Main content */}
      <main className="lg:ml-80 min-h-screen">
        <div className="max-w-6xl mx-auto p-6 lg:p-12 animate-fade-in">
          <div className={darkMode ? 'dark-mode' : ''}>{children}</div>
        </div>
      </main>
    </div>
  );
}
