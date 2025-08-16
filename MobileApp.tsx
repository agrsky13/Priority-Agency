import { useState } from 'react';
import { Header } from './components/Header';
import { MobileHero } from './components/MobileHero';
import { MobileServices } from './components/MobileServices';
import { About } from './components/About';
import { MobileContact } from './components/MobileContact';
import { Footer } from './components/Footer';
import { BlogPage } from './components/BlogPage';

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
            <About />
            <MobileContact />
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
} 