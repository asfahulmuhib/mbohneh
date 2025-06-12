"use client";

import { LanguageSwitcher } from '@/components/language-switcher';
import { ThemeToggle } from '@/components/theme-toggle';
import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="h-8 w-32 bg-gradient-to-r from-blue-500 to-red-500 rounded flex items-center justify-center mb-4">
              <span className="text-white font-bold text-lg">StreamHib</span>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              {t('description')}
            </p>
            <div className="flex items-center space-x-4">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-300 hover:text-white transition-colors">{t('links.features')}</a></li>
              <li><a href="#pricing" className="text-gray-300 hover:text-white transition-colors">{t('links.pricing')}</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">{t('links.testimonials')}</a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-white transition-colors">{t('links.faq')}</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-white mb-4">{t('support')}</h3>
            <ul className="space-y-2">
              <li><a href="mailto:support@streamhib.com" className="text-gray-300 hover:text-white transition-colors">{t('links.emailSupport')}</a></li>
              <li><a href="https://wa.me/6281234567890" className="text-gray-300 hover:text-white transition-colors">{t('links.whatsapp')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t('links.knowledgeBase')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t('links.statusPage')}</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            {t('copyright')}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">{t('legal.privacy')}</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">{t('legal.terms')}</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">{t('legal.cookies')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}