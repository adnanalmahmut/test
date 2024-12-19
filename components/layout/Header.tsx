'use client';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout/Container';
import { BriefcaseIcon, MoonIcon, SunIcon, GlobeIcon } from 'lucide-react';
import { MobileMenu } from '@/components/layout/MobileMenu';
import Link from 'next/link';
import { useTheme } from '@/components/context/ThemeContext';
import { useState, useEffect, useRef } from 'react';

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // الحالة للكشف عن التمرير
  const languageMenuRef = useRef(null);

  const toggleLanguageMenu = () => setIsLanguageMenuOpen(!isLanguageMenuOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (languageMenuRef.current && !languageMenuRef.current.contains(event.target as Node)) {
        setIsLanguageMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // استخدام useEffect للكشف عن التمرير وتحديث حالة isScrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true); // إذا كان التمرير أكبر من 10 بيكسل
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // تنظيف الحدث عند التخلص من المكون
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
    className={`fixed top-0 left-0 w-full z-10 p-2 transition-all duration-300 border-b border-zinc-100 dark:border-zinc-600 ${
      isScrolled
        ? 'backdrop-blur-lg backdrop-opacity-100 bg-white/30 dark:bg-zinc-800/40'
        : 'bg-transparent'
    } bg-white dark:bg-zinc-900 z-5`}
    

    >
      <Container>
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <BriefcaseIcon className="h-6 w-6 text-primary dark:text-zinc-100" />
            <span className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
              JobConnect
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-muted-foreground hover:text-primary dark:text-zinc-100">
              Home
            </Link>
            <Link href="/job-advertisement" className="text-muted-foreground hover:text-primary dark:text-zinc-100">
              Find Jobs
            </Link>
            <Link href="/companies" className="text-muted-foreground hover:text-primary dark:text-zinc-100">
              Companies
            </Link>
            <Link href="/salary" className="text-muted-foreground hover:text-primary dark:text-zinc-100">
              Salary Guide
            </Link>
            <Link href="/resources" className="text-muted-foreground hover:text-primary dark:text-zinc-100">
              Resources
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <button onClick={toggleTheme} className="p-2 rounded hover:bg-zinc-200 dark:hover:bg-zinc-800">
              {theme === 'dark' ? (
                <SunIcon className="h-5 w-5 text-zinc-900 dark:text-zinc-100" />
              ) : (
                <MoonIcon className="h-5 w-5 text-zinc-900 dark:text-zinc-100" />
              )}
            </button>

            {/* Language Dropdown */}
            <div className="relative" ref={languageMenuRef}>
              <button
                onClick={toggleLanguageMenu}
                className="p-2 rounded hover:bg-zinc-200 dark:hover:bg-zinc-800"
              >
                <GlobeIcon className="h-5 w-5 text-zinc-900 dark:text-zinc-100" />
              </button>

              {isLanguageMenuOpen && (
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-32 bg-white dark:bg-zinc-800 rounded shadow-lg">
                  <ul className="space-y-2 p-2">
                    <li>
                      <button
                        onClick={() => {
                          // Add language change logic here (e.g., i18next change language)
                          console.log('Switch to Arabic');
                        }}
                        className="w-full text-left text-sm text-zinc-900 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded px-2 py-1"
                      >
                        العربية
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          // Add language change logic here (e.g., i18next change language)
                          console.log('Switch to English');
                        }}
                        className="w-full text-left text-sm text-zinc-900 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded px-2 py-1"
                      >
                        English
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div className="hidden md:flex space-x-2">
              <Link href="/auth/login">
                <Button variant="ghost" className="bg-transparent border border-zinc-300 dark:border-zinc-600 text-zinc-900 dark:text-white hover:bg-zinc-200 dark:hover:bg-zinc-700">
                  Sign In
                </Button>
              </Link>
              <Link href="/auth/signup">
                <Button className=" bg-blue-600 dark:bg-zinc-200 text-white dark:text-zinc-700 hover:bg-blue-700 dark:hover:bg-zinc-700 dark:hover:text-zinc-200">
                  Sign Up
                </Button>
              </Link>
            </div>

            <MobileMenu />
          </div>
        </div>
      </Container>
    </header>
  );
}
