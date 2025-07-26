import { ReactNode } from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Main content with top padding to account for fixed navigation */}
      <main className="pt-16">
        {children}
      </main>
      
      <Footer />
    </div>
  );
}

