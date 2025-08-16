import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BlogPage } from './components/BlogPage';

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
            <About />
            <Contact />
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