import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Download, Shield, Globe, Zap, Copy, CheckCircle, TrendingUp, Users, DollarSign } from 'lucide-react';
import cusdHeroLogo from '@/assets/cusd-hero-logo.png';

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
    { label: 'Total Supply', value: '4.98 Sextillion', icon: DollarSign },
    { label: 'Networks', value: '5+', icon: Globe },
    { label: 'USD Pegged', value: '$1.00', icon: TrendingUp },
    { label: 'Community', value: '10K+', icon: Users }
  ];

  const features = [
    {
      icon: Globe,
      title: 'Multichain',
      description: 'Deployed across BSC, Ethereum, Arbitrum, and Optimism for maximum reach and liquidity.'
    },
    {
      icon: Shield,
      title: 'Stable & Secure',
      description: 'USD-pegged with robust mechanisms for maintaining stability across networks.'
    },
    {
      icon: Zap,
      title: 'DeFi Ready',
      description: 'Optimized for DEXs, lending platforms, and cross-chain applications.'
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
      <section className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-slide-up">
            <div className="flex justify-center mb-8">
              <img 
                src={cusdHeroLogo} 
                alt="CUSD Logo" 
                className="h-32 w-32 lg:h-40 lg:w-40 rounded-full shadow-glow animate-pulse-glow"
              />
            </div>
            
            <h1 className="text-4xl lg:text-7xl font-bold mb-6">
              <span className="text-gradient">Cryptohost USD</span>
              <br />
              <span className="text-2xl lg:text-4xl text-muted-foreground">(CUSD)</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
              A decentralized, multichain USD-pegged stablecoin bridging traditional finance and Web3. 
              Upgraded with a new primary contract for improved stability, liquidity, and interoperability.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button size="lg" className="group glow-effect">
                <Download className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Download Whitepaper
              </Button>
              <Button size="lg" variant="outline" className="group">
                Buy CUSD
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="secondary" className="group">
                Add CUSD to Wallet
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="crypto-card text-center group hover:scale-105 transition-transform">
                  <stat.icon className="w-8 h-8 mx-auto mb-4 text-primary group-hover:text-primary-glow transition-colors" />
                  <div className="stats-counter mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-gradient">Project at a Glance</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Cryptohost USD (CUSD) is more than just a stablecoin — it's a movement. Powered by Cryptohosting, 
              our mission is to seamlessly bridge the gap between traditional banking systems and blockchain. 
              We aim to provide a decentralized, secure, and borderless solution for converting fiat currencies 
              to crypto and vice versa, empowering individuals, businesses, and institutions to take control of their finances.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="crypto-card group hover:scale-105 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <feature.icon className="w-12 h-12 mx-auto mb-6 text-primary group-hover:text-primary-glow transition-colors animate-float" />
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
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
              CUSD is deployed across multiple networks for maximum accessibility and liquidity.
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
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="crypto-card text-center p-12 lg:p-16 glow-effect">
            <CardContent className="p-0">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-gradient">
                Join the Future of Finance
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Whether you are an investor seeking stability, a partner looking to integrate crypto solutions, 
                or a user exploring the next generation of digital money — CUSD is built for you. 
                Be part of the revolution that is redefining financial freedom.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="group">
                  Partner with Us
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="group">
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;