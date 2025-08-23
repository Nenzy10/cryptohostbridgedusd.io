import { Card, CardContent } from '@/components/ui/card';
import { Handshake, Building2, Globe, ArrowRight, CheckCircle, Star } from 'lucide-react';

const Partnerships = () => {
  const exchangePartners = [
    {
      name: "Binance",
      type: "Tier 1 Exchange",
      status: "Listed",
      description: "Trading pairs: CUSD/USDT, CUSD/BTC, CUSD/ETH",
      logo: "/api/placeholder/100/50"
    },
    {
      name: "Coinbase",
      type: "Tier 1 Exchange", 
      status: "Listed",
      description: "Institutional custody and retail trading support",
      logo: "/api/placeholder/100/50"
    },
    {
      name: "Kraken",
      type: "Tier 1 Exchange",
      status: "Listed", 
      description: "Professional trading platform with margin support",
      logo: "/api/placeholder/100/50"
    },
    {
      name: "OKX",
      type: "Tier 1 Exchange",
      status: "Listed",
      description: "Global trading platform with derivatives support",
      logo: "/api/placeholder/100/50"
    }
  ];

  const defiProtocols = [
    {
      name: "Aave",
      type: "Lending Protocol",
      integration: "Collateral Asset",
      description: "CUSD accepted as collateral for borrowing with competitive rates"
    },
    {
      name: "Compound",
      type: "Lending Protocol", 
      integration: "Supply Asset",
      description: "Users can supply CUSD to earn yield through lending markets"
    },
    {
      name: "Uniswap V3",
      type: "DEX Protocol",
      integration: "Liquidity Pools",
      description: "Deep liquidity pools for CUSD trading pairs"
    },
    {
      name: "1inch",
      type: "DEX Aggregator",
      integration: "Routing Protocol",
      description: "Optimized routing for best CUSD trading prices"
    },
    {
      name: "Curve Finance", 
      type: "Stablecoin DEX",
      integration: "Stable Pools",
      description: "Low slippage stablecoin swaps with other USD pegged assets"
    },
    {
      name: "Yearn Finance",
      type: "Yield Optimizer",
      integration: "Vault Strategy",
      description: "Automated yield strategies for CUSD holders"
    }
  ];

  const institutionalPartners = [
    {
      name: "Circle",
      type: "Strategic Partner",
      partnership: "Cross-chain Bridge",
      description: "Infrastructure partnership for seamless USDC <> CUSD conversions"
    },
    {
      name: "Fireblocks",
      type: "Custody Provider",
      partnership: "Institutional Custody",
      description: "Secure institutional-grade custody solutions for CUSD"
    },
    {
      name: "Chainalysis",
      type: "Compliance Partner",
      partnership: "AML/KYC Solutions",
      description: "Advanced transaction monitoring and compliance tools"
    },
    {
      name: "Elliptic",
      type: "Risk Management",
      partnership: "Transaction Monitoring", 
      description: "Real-time risk assessment and compliance screening"
    }
  ];

  const networkPartners = [
    {
      name: "Ethereum Foundation",
      type: "Blockchain Network",
      support: "Native Integration",
      description: "Official support for Ethereum mainnet deployment"
    },
    {
      name: "Binance Smart Chain",
      type: "Blockchain Network", 
      support: "Primary Network",
      description: "Primary deployment network with extensive DApp ecosystem"
    },
    {
      name: "Arbitrum Foundation",
      type: "Layer 2 Network",
      support: "L2 Scaling",
      description: "Low-cost, high-speed transactions on Arbitrum"
    },
    {
      name: "Optimism Foundation",
      type: "Layer 2 Network",
      support: "L2 Scaling", 
      description: "Optimistic rollup integration for enhanced scalability"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Handshake className="w-5 h-5 mr-2 text-primary" />
            <span className="text-primary font-semibold text-sm">PARTNERSHIPS & INTEGRATIONS</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-8 text-gradient">Strategic Partnerships</h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            CUSD is integrated with leading exchanges, DeFi protocols, and institutional partners 
            to provide maximum utility and accessibility across the digital asset ecosystem.
          </p>
        </div>

        {/* Exchange Partners */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Exchange Listings</h2>
            <p className="text-lg text-muted-foreground">
              CUSD is listed on top-tier centralized exchanges for global accessibility
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {exchangePartners.map((exchange, index) => (
              <Card key={index} className="premium-card group hover:scale-105 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <Building2 className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{exchange.name}</h3>
                  <p className="text-primary text-sm font-semibold mb-2">{exchange.type}</p>
                  <div className="inline-flex items-center px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs font-medium mb-3">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    {exchange.status}
                  </div>
                  <p className="text-muted-foreground text-xs">{exchange.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* DeFi Protocol Integrations */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">DeFi Protocol Integrations</h2>
            <p className="text-lg text-muted-foreground">
              Native integration with leading DeFi protocols for lending, trading, and yield generation
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {defiProtocols.map((protocol, index) => (
              <Card key={index} className="crypto-card group hover:scale-[1.02] transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <Globe className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-1">{protocol.name}</h3>
                      <p className="text-primary text-sm font-semibold mb-2">{protocol.type}</p>
                      <div className="inline-flex items-center px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
                        {protocol.integration}
                      </div>
                      <p className="text-muted-foreground text-sm">{protocol.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Institutional Partners */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Institutional Partners</h2>
            <p className="text-lg text-muted-foreground">
              Strategic partnerships with leading fintech and compliance providers
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {institutionalPartners.map((partner, index) => (
              <Card key={index} className="premium-card group hover:scale-[1.02] transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                      <Star className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{partner.name}</h3>
                      <p className="text-primary font-semibold mb-3">{partner.type}</p>
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                        {partner.partnership}
                      </div>
                      <p className="text-muted-foreground">{partner.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Network Partners */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Blockchain Network Partners</h2>
            <p className="text-lg text-muted-foreground">
              Multi-chain deployment across leading blockchain networks
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {networkPartners.map((network, index) => (
              <Card key={index} className="crypto-card group hover:scale-105 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl mx-auto mb-4 flex items-center justify-center">
                    <Globe className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">{network.name}</h3>
                  <p className="text-primary text-sm font-semibold mb-2">{network.type}</p>
                  <div className="inline-flex items-center px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
                    {network.support}
                  </div>
                  <p className="text-muted-foreground text-xs">{network.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Partner with Us CTA */}
        <section>
          <Card className="premium-card text-center p-12 bg-gradient-to-br from-primary/5 to-primary-glow/5">
            <CardContent className="p-0">
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Handshake className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-6">Partner with CUSD</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join our growing ecosystem of partners. Whether you're an exchange, DeFi protocol, 
                or institutional service provider, we offer comprehensive integration support and partnership opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:partnerships@cryptohost.io"
                  className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Contact Partnerships Team
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a 
                  href="/docs/integration-guide.pdf"
                  className="inline-flex items-center px-6 py-3 bg-muted text-foreground rounded-lg font-semibold hover:bg-muted/80 transition-colors"
                >
                  Integration Guide
                </a>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Partnerships;