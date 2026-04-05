import { useState } from 'react';
import { Header } from './components/Header';
import { MobileHero } from './components/MobileHero';
import { MobileServices } from './components/MobileServices';
import { SuccessStories } from './components/SuccessStories';
import { About } from './components/About';
import { MobileContact } from './components/MobileContact';
import { Footer } from './components/Footer';
import { BlogPage } from './components/BlogPage';
import { CookieConsent } from './components/CookieConsent';

export default function MobileApp() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'blog':
        return <BlogPage setCurrentPage={setCurrentPage} />;
      default:
        return (
          <main>
            <MobileHero />
            <MobileServices />
            <SuccessStories />
            <About />
            <MobileContact />
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer />
      <CookieConsent />
    </div>
  );
} 
