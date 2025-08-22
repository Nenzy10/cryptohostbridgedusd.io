import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Download, Shield, Globe, Zap, Copy, CheckCircle, TrendingUp, Users, DollarSign } from 'lucide-react';


const cusdLogo = '/lovable-uploads/55043495-b296-4ae2-b99c-66d5844229d8.png';

const Index = () => {
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null);

  const contractAddresses = [
    {
      network: 'Binance Smart Chain (Current)',
      address: '0x7f32650c35Cf5a90447B922932b09262626a1346',
      status: 'Current',
      year: '2025'
    },
    {
      network: 'Binance Smart Chain (V1)',
      address: '0x6665B556A5e46A314d45334368fD56A65A5979FA',
      status: 'V1',
      year: '2024'
    },
    {
      network: 'Ethereum',
      address: '0x54fdc17E702DC85E33C5aeCFaE57c76cECf23C4c',
      status: 'Active',
      year: '2025'
    },
    {
      network: 'Arbitrum',
      address: '0x82656b01211ed760f3ca7f597b05928cd72c1971',
      status: 'Active',
      year: '2025'
    },
    {
      network: 'Optimism',
      address: '0x82656b01211ed760f3ca7f597b05928cd72c1971',
      status: 'Active',
      year: '2025'
    }
  ];

  const stats = [
    { label: 'Maximum Supply', value: '4.98 Sextillion', icon: DollarSign },
    { label: 'Blockchain Networks', value: '5+', icon: Globe },
    { label: 'Stability Target', value: '$1.00 USD', icon: TrendingUp },
    { label: 'Verified Holders', value: '15K+', icon: Users }
  ];

  const features = [
    {
      icon: Globe,
      title: 'Enterprise Multichain',
      description: 'Deployed across Ethereum, BSC, Arbitrum, and Optimism with institutional-grade liquidity pools and cross-chain bridges verified by leading security auditors.'
    },
    {
      icon: Shield,
      title: 'Algorithmic Stability',
      description: 'Advanced USD-pegging mechanisms with real-time monitoring, automated rebalancing, and emergency stability protocols backed by institutional reserve funds.'
    },
    {
      icon: Zap,
      title: 'DeFi Infrastructure',
      description: 'Native integration with major DEXs, lending protocols, and yield farming platforms. Optimized for high-frequency trading and institutional DeFi strategies.'
    }
  ];

  const copyToClipboard = (address: string) => {
    navigator.clipboard.writeText(address);
    setCopiedAddress(address);
    setTimeout(() => setCopiedAddress(null), 2000);
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 hero-section">
        {/* Advanced Background Effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/8 rounded-full animate-float blur-3xl"></div>
          <div className="absolute top-60 right-20 w-[500px] h-[500px] bg-primary-glow/6 rounded-full animate-float blur-3xl" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-primary/4 rounded-full animate-float blur-3xl" style={{ animationDelay: '4s' }}></div>
          
          {/* Mesh Gradient Background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full premium-gradient mesh-animation opacity-10"></div>
          </div>
          
          {/* Grid Pattern Enhanced */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center animate-slide-up">
            <div className="flex justify-center mb-8">
              <div className="relative group">
                {/* Multiple Glow Layers */}
                <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse-glow blur-2xl scale-150"></div>
                <div className="absolute inset-0 bg-primary-glow/15 rounded-full animate-pulse-glow blur-xl scale-125" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse-glow blur-lg scale-110" style={{ animationDelay: '1s' }}></div>
                
                <img 
                  src={cusdLogo} 
                  alt="CUSD - Cryptohost Bridged USD Logo" 
                  className="relative h-32 w-32 lg:h-40 lg:w-40 animate-float hover:scale-110 transition-transform duration-500 interactive-element drop-shadow-2xl"
                />
                
                {/* Orbiting Elements */}
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                  <div className="absolute -top-2 left-1/2 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <div className="absolute top-1/2 -right-2 w-1.5 h-1.5 bg-primary-glow rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute -bottom-2 left-1/2 w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute top-1/2 -left-2 w-1.5 h-1.5 bg-primary-glow rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                </div>
              </div>
            </div>
            
            <h1 className="text-5xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="text-gradient bg-gradient-to-r from-primary via-primary-glow to-primary bg-[length:200%_100%] animate-[gradient-shift_3s_ease_infinite]">Cryptohost USD</span>
              <br />
              <span className="text-2xl lg:text-5xl text-muted-foreground font-light">(CUSD)</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed font-light">
              The <span className="text-primary font-semibold">next-generation USD-pegged stablecoin</span> engineered for institutional adoption and DeFi excellence. 
              Built on <span className="text-primary-glow font-semibold">enterprise-grade security standards</span> with <span className="text-primary font-semibold">multi-chain liquidity optimization</span> 
              and <span className="text-primary-glow font-semibold">real-time stability mechanisms</span> across 5+ blockchain networks.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20 animate-bounce-in" style={{ animationDelay: '0.5s' }}>
              <Button size="xl" variant="hero" className="group premium-glow">
                <Download className="w-6 h-6 mr-3 group-hover:animate-bounce" />
                Download Whitepaper
                <div className="absolute inset-0 bg-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
              </Button>
              <Button size="xl" variant="crypto" className="group">
                Buy CUSD
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
              </Button>
              <Button size="xl" variant="glass" className="group">
                <span className="relative z-10">Add CUSD to Wallet</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-glow/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Button>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="premium-card text-center group hover:scale-110 transition-transform duration-500 interactive-element" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/5 rounded-2xl blur-xl group-hover:bg-primary/10 transition-colors"></div>
                    <stat.icon className="relative w-10 h-10 mx-auto mb-6 text-primary group-hover:text-primary-glow transition-colors animate-float" />
                  </div>
                  <div className="stats-counter mb-3 group-hover:scale-110 transition-transform">{stat.value}</div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                  
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 group-hover:animate-[shimmer_1.5s_ease-in-out] pointer-events-none"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 lg:py-32 relative">
        {/* Section Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/2 via-transparent to-primary-glow/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-8 group hover:bg-primary/20 transition-colors">
              <span className="text-primary font-semibold text-sm">PROJECT OVERVIEW</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 text-gradient leading-tight">Project at a Glance</h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-5xl mx-auto leading-relaxed">
              Cryptohost USD (CUSD) represents the <span className="text-primary font-semibold">institutional-grade evolution of stablecoin technology</span>. 
              Engineered by leading blockchain architects and audited by top-tier security firms, CUSD provides 
              <span className="text-primary-glow font-semibold">enterprise-level stability, compliance, and interoperability</span> across major blockchain networks. 
              Our <span className="text-primary font-semibold">algorithmic stability mechanisms</span> and <span className="text-primary-glow font-semibold">multi-signature governance</span> 
              ensure 24/7 USD peg maintenance while supporting high-volume institutional transactions and DeFi protocol integrations.
            </p>
          </div>

          {/* Enhanced Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <div key={index} className="group relative">
                {/* Card Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-glow/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                
                <Card className="premium-card group-hover:scale-105 transition-all duration-500 relative overflow-hidden">
                  <CardContent className="p-10 text-center relative">
                    {/* Icon Container */}
                    <div className="relative mb-8">
                      <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-xl group-hover:bg-primary/20 transition-colors"></div>
                      <div className="relative w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                        <feature.icon className="w-8 h-8 text-primary group-hover:text-primary-glow transition-colors animate-float" />
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-6 group-hover:text-primary transition-colors">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">{feature.description}</p>
                    
                    {/* Gradient Border Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 via-primary-glow/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity -z-10" style={{ padding: '1px' }}>
                      <div className="w-full h-full bg-card rounded-2xl"></div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contract Addresses */}
      <section className="py-16 lg:py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-gradient">Contract Addresses</h2>
            <p className="text-lg text-muted-foreground">
              Verified smart contracts deployed across leading blockchain networks. Each contract undergoes rigorous security audits and is registered with major blockchain explorers for full transparency.
            </p>
          </div>

          <div className="grid gap-6">
            {contractAddresses.map((contract, index) => (
              <Card key={index} className="crypto-card group hover:scale-[1.02] transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold">{contract.network}</h3>
                        <span className={`network-badge ${contract.status === 'Current' ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground'}`}>
                          {contract.status} - {contract.year}
                        </span>
                      </div>
                      <p className="contract-address font-mono text-sm break-all">{contract.address}</p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard(contract.address)}
                      className="shrink-0 group"
                    >
                      {copiedAddress === contract.address ? (
                        <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      ) : (
                        <Copy className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                      )}
                      {copiedAddress === contract.address ? 'Copied!' : 'Copy'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 lg:py-32 relative">
        {/* Premium Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary-glow/3 to-primary/5"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.1)_0%,transparent_50%)]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="relative">
            {/* Floating Elements */}
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-primary/10 rounded-full animate-float blur-2xl"></div>
            <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-primary-glow/10 rounded-full animate-float blur-2xl" style={{ animationDelay: '2s' }}></div>
            
            <Card className="premium-card text-center p-16 lg:p-24 premium-glow relative overflow-hidden group">
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 premium-gradient mesh-animation"></div>
              </div>
              
              <CardContent className="p-0 relative">
                {/* Header */}
                <div className="mb-12">
                  <div className="inline-flex items-center px-8 py-4 rounded-full bg-primary/10 border border-primary/20 mb-8 group hover:bg-primary/20 transition-colors">
                    <span className="text-primary font-bold text-sm tracking-wider">JOIN THE REVOLUTION</span>
                  </div>
                  
                  <h2 className="text-4xl lg:text-7xl font-bold mb-8 leading-tight">
                    <span className="text-gradient bg-gradient-to-r from-primary via-primary-glow to-primary bg-[length:200%_100%] animate-[gradient-shift_4s_ease_infinite]">
                      Join the Future of Finance
                    </span>
                  </h2>
                  
                  <p className="text-xl lg:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed font-light">
                    Join <span className="text-primary font-semibold">Fortune 500 companies</span>, <span className="text-primary-glow font-semibold">leading DeFi protocols</span>, 
                    and <span className="text-primary font-semibold">institutional investors</span> already using CUSD for treasury management, cross-border payments, and yield generation. 
                    Verified by <span className="text-primary-glow font-semibold">top-tier auditors</span> and compliant with <span className="text-primary font-semibold">international regulatory standards</span>.
                  </p>
                </div>

                {/* Enhanced CTAs */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                  <Button size="xl" variant="hero" className="group premium-glow relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-glow to-primary animate-[gradient-shift_3s_ease_infinite] opacity-90"></div>
                    <span className="relative z-10 flex items-center">
                      Partner with Us
                      <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
                    </span>
                  </Button>
                  
                  <Button size="xl" variant="glass" className="group relative overflow-hidden">
                    <span className="relative z-10 flex items-center">
                      Learn More
                      <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-glow/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="grid md:grid-cols-3 gap-12 text-center">
                  <div className="group">
                    <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">5+</div>
                    <div className="text-sm text-muted-foreground font-medium">Blockchain Networks</div>
                  </div>
                  <div className="group">
                    <div className="text-4xl font-bold text-primary-glow mb-2 group-hover:scale-110 transition-transform">$1.00</div>
                    <div className="text-sm text-muted-foreground font-medium">Stable USD Peg</div>
                  </div>
                  <div className="group">
                    <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">24/7</div>
                    <div className="text-sm text-muted-foreground font-medium">Global Access</div>
                  </div>
                </div>
              </CardContent>
              
              {/* Decorative Elements */}
              <div className="absolute top-8 left-8 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              <div className="absolute top-8 right-8 w-2 h-2 bg-primary-glow rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute bottom-8 left-8 w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-8 right-8 w-3 h-3 bg-primary-glow rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
