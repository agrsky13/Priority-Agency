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
        return <MobileCompactServices />;
      case 'about':
        return <MobileCompactAbout />;
      case 'contact':
        return <MobileCompactContact />;
      default:
        return (
          <main>
            <MobileCompactHero />
            <MobileCompactServices />
            <MobileCompactAbout />
            <MobileCompactContact />
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