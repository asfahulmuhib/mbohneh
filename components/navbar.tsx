"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { LanguageSwitcher } from '@/components/language-switcher';
import { Menu, X } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations('navbar');

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="h-8 w-32 bg-gradient-to-r from-blue-500 to-red-500 rounded flex items-center justify-center">
              <span className="text-white font-bold text-lg">StreamHib</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">
              {t('features')}
            </a>
            <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
              {t('pricing')}
            </a>
            <a href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">
              {t('testimonials')}
            </a>
            <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">
              {t('faq')}
            </a>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <ThemeToggle />
            <Button size="sm" className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 font-semibold">
              {t('startNow')}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSwitcher />
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
              <a href="#features" className="block px-3 py-2 text-sm font-medium hover:text-primary transition-colors">
                {t('features')}
              </a>
              <a href="#pricing" className="block px-3 py-2 text-sm font-medium hover:text-primary transition-colors">
                {t('pricing')}
              </a>
              <a href="#testimonials" className="block px-3 py-2 text-sm font-medium hover:text-primary transition-colors">
                {t('testimonials')}
              </a>
              <a href="#faq" className="block px-3 py-2 text-sm font-medium hover:text-primary transition-colors">
                {t('faq')}
              </a>
              <div className="px-3 py-2">
                <Button size="sm" className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold">
                  {t('startNow')}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}