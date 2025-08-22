import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Handshake, Building2, Globe, Zap, Shield, TrendingUp, Users, Award, ExternalLink } from 'lucide-react';

const Partnerships = () => {
  const strategicPartners = [
    {
      category: 'Institutional Partners',
      icon: Building2,
      partners: [
        {
          name: 'Galaxy Digital',
          type: 'Investment & Advisory',
          description: 'Strategic investment and institutional market access'
        },
        {
          name: 'Cumberland DRW',
          type: 'Market Making',
          description: 'Liquidity provision and trading infrastructure'
        },
        {
          name: 'B2C2',
          type: 'Liquidity Partner',
          description: 'Professional trading and liquidity services'
        }
      ]
    },
    {
      category: 'Technology Partners',
      icon: Zap,
      partners: [
        {
          name: 'Chainlink',
          type: 'Oracle Infrastructure',
          description: 'Real-time price feeds and market data integration'
        },
        {
          name: 'LayerZero',
          type: 'Cross-Chain Protocol',
          description: 'Omnichain interoperability and bridge technology'
        },
        {
          name: 'Circle',
          type: 'Stablecoin Technology',
          description: 'Best practices sharing and technical collaboration'
        }
      ]
    },
    {
      category: 'Security Partners',
      icon: Shield,
      partners: [
        {
          name: 'CertiK',
          type: 'Security Audits',
          description: 'Comprehensive smart contract security assessments'
        },
        {
          name: 'Immunefi',
          type: 'Bug Bounty Platform',
          description: 'Continuous security monitoring and bug rewards'
        },
        {
          name: 'Quantstamp',
          type: 'Protocol Security',
          description: 'Automated security scanning and monitoring'
        }
      ]
    }
  ];

  const defiIntegrations = [
    {
      protocol: 'Uniswap',
      category: 'DEX',
      integration: 'Native Trading Pairs',
      tvl: '$25M+',
      status: 'Live'
    },
    {
      protocol: 'Aave',
      category: 'Lending',
      integration: 'Collateral Asset',
      tvl: '$15M+',
      status: 'Live'
    },
    {
      protocol: 'Compound',
      category: 'Lending',
      integration: 'Supply & Borrow',
      tvl: '$12M+',
      status: 'Live'
    },
    {
      protocol: 'Curve Finance',
      category: 'Stableswap',
      integration: 'Stablecoin Pool',
      tvl: '$30M+',
      status: 'Live'
    },
    {
      protocol: 'Yearn Finance',
      category: 'Yield Farming',
      integration: 'Strategy Vaults',
      tvl: '$8M+',
      status: 'Integration'
    },
    {
      protocol: 'Convex Finance',
      category: 'Yield Optimization',
      integration: 'Boosted Rewards',
      tvl: '$5M+',
      status: 'Planned'
    }
  ];

  const exchangeListings = [
    {
      exchange: 'Binance',
      tier: 'Tier 1',
      status: 'Applied',
      markets: 'CUSD/USDT, CUSD/BNB'
    },
    {
      exchange: 'Coinbase',
      tier: 'Tier 1',
      status: 'Under Review',
      markets: 'CUSD/USD, CUSD/ETH'
    },
    {
      exchange: 'Kraken',
      tier: 'Tier 1',
      status: 'Documentation Submitted',
      markets: 'CUSD/USD, CUSD/EUR'
    },
    {
      exchange: 'KuCoin',
      tier: 'Tier 2',
      status: 'Listed',
      markets: 'CUSD/USDT'
    },
    {
      exchange: 'Gate.io',
      tier: 'Tier 2',
      status: 'Listed',
      markets: 'CUSD/USDT, CUSD/ETH'
    },
    {
      exchange: 'MEXC',
      tier: 'Tier 2',
      status: 'Listed',
      markets: 'CUSD/USDT'
    }
  ];

  const regulatoryPartners = [
    {
      organization: 'Digital Asset Research',
      type: 'Compliance Intelligence',
      description: 'Real-time regulatory monitoring and compliance reporting across global jurisdictions.'
    },
    {
      organization: 'Elliptic',
      type: 'Blockchain Analytics',
      description: 'Transaction monitoring, sanctions screening, and AML compliance solutions.'
    },
    {
      organization: 'Chainalysis',
      type: 'Risk Assessment',
      description: 'Advanced blockchain investigation and compliance tools for institutional adoption.'
    }
  ];

  const upcomingPartnerships = [
    {
      category: 'Payment Processors',
      description: 'Integration with major payment gateways for seamless fiat on/off ramps.',
      timeline: 'Q2 2025'
    },
    {
      category: 'Institutional Custody',
      description: 'Partnership with regulated custodians for enterprise-grade asset protection.',
      timeline: 'Q2 2025'
    },
    {
      category: 'Traditional Banks',
      description: 'Collaboration with progressive banks for institutional adoption and compliance.',
      timeline: 'Q3 2025'
    },
    {
      category: 'Central Bank Pilots',
      description: 'Participation in CBDC research and digital currency infrastructure development.',
      timeline: 'Q4 2025'
    }
  ];

  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Handshake className="w-5 h-5 mr-2 text-primary" />
            <span className="text-primary font-semibold text-sm">STRATEGIC PARTNERSHIPS</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-gradient">Partnerships & Integrations</h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Building a comprehensive ecosystem through strategic partnerships with leading institutions, 
            technology providers, and regulatory experts to ensure CUSD's success across global markets.
          </p>
        </div>

        {/* Strategic Partners */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gradient">Strategic Partners</h2>
            <p className="text-lg text-muted-foreground">
              Collaborating with industry leaders to build robust infrastructure and market presence.
            </p>
          </div>

          <div className="space-y-12">
            {strategicPartners.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center gap-3 mb-6">
                  <category.icon className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-bold">{category.category}</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  {category.partners.map((partner, index) => (
                    <Card key={index} className="crypto-card group hover:scale-105 transition-all duration-300">
                      <CardContent className="p-6">
                        <h4 className="text-lg font-semibold mb-2">{partner.name}</h4>
                        <p className="text-primary font-medium text-sm mb-3">{partner.type}</p>
                        <p className="text-muted-foreground text-sm leading-relaxed">{partner.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* DeFi Integrations */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gradient">DeFi Protocol Integrations</h2>
            <p className="text-lg text-muted-foreground">
              Native integration with leading DeFi protocols for maximum utility and liquidity.
            </p>
          </div>

          <div className="grid gap-6">
            {defiIntegrations.map((integration, index) => (
              <Card key={index} className="crypto-card group hover:scale-[1.02] transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold">{integration.protocol}</h3>
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                          {integration.category}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          integration.status === 'Live' ? 'bg-green-100 text-green-800' :
                          integration.status === 'Integration' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {integration.status}
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-2">{integration.integration}</p>
                      <p className="text-sm text-muted-foreground">TVL: {integration.tvl}</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Integration
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Exchange Listings */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gradient">Exchange Listings</h2>
            <p className="text-lg text-muted-foreground">
              Current and planned listings on major cryptocurrency exchanges worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {exchangeListings.map((listing, index) => (
              <Card key={index} className="crypto-card group hover:scale-105 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold">{listing.exchange}</h3>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                        {listing.tier}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        listing.status === 'Listed' ? 'bg-green-100 text-green-800' :
                        listing.status === 'Applied' || listing.status === 'Under Review' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {listing.status}
                      </span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">Markets: {listing.markets}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Regulatory Partners */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gradient">Regulatory & Compliance Partners</h2>
            <p className="text-lg text-muted-foreground">
              Working with leading compliance and analytics providers to ensure regulatory adherence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {regulatoryPartners.map((partner, index) => (
              <Card key={index} className="crypto-card group hover:scale-105 transition-all duration-300">
                <CardContent className="p-8">
                  <Shield className="w-12 h-12 mb-6 text-primary group-hover:text-primary-glow transition-colors animate-float" />
                  <h3 className="text-lg font-semibold mb-2">{partner.organization}</h3>
                  <p className="text-primary font-medium text-sm mb-4">{partner.type}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{partner.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Upcoming Partnerships */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gradient">Upcoming Partnerships</h2>
            <p className="text-lg text-muted-foreground">
              Strategic initiatives and partnerships in development for 2025 and beyond.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {upcomingPartnerships.map((partnership, index) => (
              <Card key={index} className="crypto-card group hover:scale-105 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">{partnership.category}</h3>
                    <span className="text-primary font-medium">{partnership.timeline}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{partnership.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Partnership CTA */}
        <section>
          <Card className="crypto-card p-8 lg:p-12 text-center glow-effect">
            <CardContent className="p-0">
              <Handshake className="w-16 h-16 mx-auto mb-8 text-primary animate-pulse-glow" />
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gradient">Partner With CUSD</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-8">
                Join our growing ecosystem of partners and help shape the future of institutional DeFi. 
                We're actively seeking strategic partnerships across exchanges, DeFi protocols, 
                institutional services, and compliance providers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="hero" className="group">
                  <Building2 className="w-5 h-5 mr-2" />
                  Partnership Inquiry
                </Button>
                <Button size="lg" variant="outline" className="group">
                  <Globe className="w-5 h-5 mr-2" />
                  Integration Documentation
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Partnerships;