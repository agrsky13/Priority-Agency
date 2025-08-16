import { useState } from 'react';
import { MobileCompactHeader } from './MobileCompactHeader';
import { MobileCompactHero } from './MobileCompactHero';
import { MobileCompactServices } from './MobileCompactServices';
import { MobileCompactAbout } from './MobileCompactAbout';
import { MobileCompactContact } from './MobileCompactContact';
import { MobileCompactFooter } from './MobileCompactFooter';

export default function MobileCompactApp() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'services':
        return <MobileCompactServices setCurrentPage={setCurrentPage} />;
      case 'about':
        return <MobileCompactAbout setCurrentPage={setCurrentPage} />;
      case 'contact':
        return <MobileCompactContact setCurrentPage={setCurrentPage} />;
      default:
        return (
          <main>
            <MobileCompactHero />
            <MobileCompactServices setCurrentPage={setCurrentPage} />
            <MobileCompactAbout setCurrentPage={setCurrentPage} />
            <MobileCompactContact setCurrentPage={setCurrentPage} />
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <MobileCompactHeader currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <MobileCompactFooter />
    </div>
  );
} 