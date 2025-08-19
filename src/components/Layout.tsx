import { ReactNode } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Advanced Background Effects */}
      <div className="fixed inset-0 -z-10">
        {/* Primary Animated Background Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/4 rounded-full animate-float blur-3xl opacity-60"></div>
        <div className="absolute top-60 right-20 w-[500px] h-[500px] bg-primary-glow/3 rounded-full animate-float blur-3xl opacity-50" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-1/3 w-80 h-80 bg-primary/2 rounded-full animate-float blur-3xl opacity-70" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-primary-glow/4 rounded-full animate-float blur-3xl opacity-40" style={{ animationDelay: '6s' }}></div>
        
        {/* Mesh Gradient Overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0 premium-gradient mesh-animation"></div>
        </div>
        
        {/* Enhanced Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.02)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.02)_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_0%,#000_40%,transparent_100%)]"></div>
        
        {/* Radial Glow Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-radial opacity-30 animate-pulse-glow"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-gradient-radial opacity-20 animate-pulse-glow" style={{ animationDelay: '3s' }}></div>
      </div>

      <Navigation />
      <main className="relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;