import { ReactNode } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Advanced Crypto Background Effects */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Dynamic Morphing Background Shapes */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/6 animate-morph-bg animate-crypto-float blur-3xl opacity-70"></div>
        <div className="absolute top-60 right-20 w-[500px] h-[500px] bg-primary-glow/4 animate-morph-bg animate-crypto-float blur-3xl opacity-60" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-1/3 w-80 h-80 bg-primary/3 animate-morph-bg animate-crypto-float blur-3xl opacity-80" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-primary-glow/5 animate-morph-bg animate-crypto-float blur-3xl opacity-50" style={{ animationDelay: '6s' }}></div>
        
        {/* Digital Circuit Patterns */}
        <div className="absolute inset-0 circuit-pattern opacity-20"></div>
        
        {/* Holographic Mesh Overlay */}
        <div className="absolute inset-0 holographic-bg opacity-10"></div>
        
        {/* Enhanced Digital Grid */}
        <div className="absolute inset-0 digital-grid [mask-image:radial-gradient(ellipse_100%_100%_at_50%_0%,#000_60%,transparent_100%)]"></div>
        
        {/* Floating Digital Elements */}
        <div className="absolute top-1/4 left-10 w-4 h-4 bg-primary/60 rounded-full animate-digital-drift" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-1/3 left-20 w-3 h-3 bg-primary-glow/80 rounded-full animate-digital-drift" style={{ animationDelay: '5s' }}></div>
        <div className="absolute top-1/2 left-5 w-2 h-2 bg-primary/70 rounded-full animate-digital-drift" style={{ animationDelay: '10s' }}></div>
        
        {/* Binary Code Rain Effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-10 top-0 text-primary/20 text-xs font-mono animate-binary-flow" style={{ animationDelay: '0s' }}>101010</div>
          <div className="absolute left-32 top-0 text-primary-glow/15 text-xs font-mono animate-binary-flow" style={{ animationDelay: '3s' }}>110011</div>
          <div className="absolute left-56 top-0 text-primary/10 text-xs font-mono animate-binary-flow" style={{ animationDelay: '6s' }}>001101</div>
          <div className="absolute right-20 top-0 text-primary-glow/20 text-xs font-mono animate-binary-flow" style={{ animationDelay: '9s' }}>111000</div>
          <div className="absolute right-44 top-0 text-primary/15 text-xs font-mono animate-binary-flow" style={{ animationDelay: '12s' }}>010101</div>
        </div>
        
        {/* Network Pulse Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-radial animate-network-pulse opacity-40"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-gradient-radial animate-network-pulse opacity-30" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Floating Coin Elements */}
        <div className="absolute top-20 right-40 w-8 h-8 bg-gradient-to-br from-primary to-primary-glow rounded-full animate-coin-flip opacity-30" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-40 w-6 h-6 bg-gradient-to-br from-primary-glow to-primary rounded-full animate-coin-flip opacity-25" style={{ animationDelay: '5s' }}></div>
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