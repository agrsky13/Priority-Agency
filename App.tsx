import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { SuccessStories } from './components/SuccessStories';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BlogPage } from './components/BlogPage';
import { CookieConsent } from './components/CookieConsent';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'blog':
        return <BlogPage setCurrentPage={setCurrentPage} />;
      default:
        return (
          <main>
            <Hero />
            <Services />
            <SuccessStories />
            <About />
            <Contact />
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 overflow-x-hidden">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer />
      <CookieConsent />
    </div>
  );
}
