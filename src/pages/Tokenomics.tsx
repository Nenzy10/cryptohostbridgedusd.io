import { Card, CardContent } from '@/components/ui/card';
import { PieChart, TrendingUp, Shield, Zap, DollarSign, BarChart3, Users, Globe } from 'lucide-react';

const Tokenomics = () => {
  const tokenInfo = [
    {
      label: 'Token Name',
      value: 'Cryptohost USD',
      icon: DollarSign
    },
    {
      label: 'Symbol',
      value: 'CUSD',
      icon: TrendingUp
    },
    {
      label: 'Max Supply',
      value: '4.98 Sextillion',
      icon: BarChart3
    },
    {
      label: 'Peg Value',
      value: '$1.00 USD',
      icon: Shield
    }
  ];

  const distributionData = [
    {
      category: 'Liquidity Pool',
      percentage: '40%',
      amount: '1.992 Sextillion',
      description: 'Reserved for maintaining liquidity across all supported networks and DEX platforms.',
      color: 'bg-primary'
    },
    {
      category: 'Stability Reserve',
      percentage: '25%',
      amount: '1.245 Sextillion',
      description: 'Emergency fund to maintain USD peg stability during market volatility.',
      color: 'bg-primary-glow'
    },
    {
      category: 'Development Fund',
      percentage: '15%',
      amount: '747 Quintillion',
      description: 'Funding for ongoing development, security audits, and platform improvements.',
      color: 'bg-accent'
    },
    {
      category: 'Partnership & Integration',
      percentage: '10%',
      amount: '498 Quintillion',
      description: 'Supporting strategic partnerships and protocol integrations.',
      color: 'bg-secondary'
    },
    {
      category: 'Community Rewards',
      percentage: '7%',
      amount: '348.6 Quintillion',
      description: 'Incentivizing community participation and governance activities.',
      color: 'bg-muted'
    },
    {
      category: 'Team & Advisors',
      percentage: '3%',
      amount: '149.4 Quintillion',
      description: 'Allocated to team members and strategic advisors with vesting schedules.',
      color: 'bg-border'
    }
  ];

  const stabilityMechanisms = [
    {
      icon: Shield,
      title: 'Collateral Backing',
      description: 'Each CUSD token is backed by reserves to maintain the $1.00 USD peg across all networks.'
    },
    {
      icon: BarChart3,
      title: 'Algorithmic Stabilization',
      description: 'Automated mechanisms adjust supply and demand to maintain price stability during market fluctuations.'
    },
    {
      icon: Globe,
      title: 'Cross-Chain Arbitrage',
      description: 'Multi-network deployment enables price stability through cross-chain arbitrage opportunities.'
    },
    {
      icon: Zap,
      title: 'Rapid Response',
      description: 'Quick reaction protocols activate during extreme market conditions to protect the peg.'
    }
  ];

  const networkDeployment = [
    {
      network: 'Binance Smart Chain',
      allocation: '35%',
      purpose: 'Primary network with highest liquidity and transaction volume.'
    },
    {
      network: 'Ethereum',
      allocation: '25%',
      purpose: 'DeFi hub integration and institutional adoption.'
    },
    {
      network: 'Arbitrum',
      allocation: '20%',
      purpose: 'Layer 2 scaling solution for cost-effective transactions.'
    },
    {
      network: 'Optimism',
      allocation: '20%',
      purpose: 'Optimistic rollup integration for enhanced scalability.'
    }
  ];

  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-gradient">Tokenomics</h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Understanding CUSD's economic model, distribution strategy, and stability mechanisms across multiple blockchain networks.
          </p>
        </div>

        {/* Token Information */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gradient">Token Information</h2>
            <p className="text-lg text-muted-foreground">
              Core details about the CUSD token structure and specifications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tokenInfo.map((info, index) => (
              <Card key={index} className="crypto-card group hover:scale-105 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <info.icon className="w-12 h-12 mx-auto mb-6 text-primary group-hover:text-primary-glow transition-colors animate-float" />
                  <h3 className="text-lg font-semibold mb-2 text-muted-foreground">{info.label}</h3>
                  <p className="text-2xl font-bold text-foreground">{info.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Distribution Breakdown */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gradient">Token Distribution</h2>
            <p className="text-lg text-muted-foreground">
              Strategic allocation of CUSD tokens to ensure stability, growth, and community benefits.
            </p>
          </div>

          <div className="grid gap-6">
            {distributionData.map((item, index) => (
              <Card key={index} className="crypto-card group hover:scale-[1.02] transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    <div className="flex items-center gap-4 lg:w-64">
                      <div className={`w-4 h-4 rounded-full ${item.color}`}></div>
                      <div>
                        <h3 className="text-lg font-semibold">{item.category}</h3>
                        <p className="text-2xl font-bold text-primary">{item.percentage}</p>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground mb-2 font-mono">{item.amount} CUSD</p>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Stability Mechanisms */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gradient">Stability Mechanisms</h2>
            <p className="text-lg text-muted-foreground">
              Advanced systems ensuring CUSD maintains its USD peg across all supported networks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {stabilityMechanisms.map((mechanism, index) => (
              <Card key={index} className="crypto-card group hover:scale-105 transition-all duration-300">
                <CardContent className="p-8">
                  <mechanism.icon className="w-12 h-12 mb-6 text-primary group-hover:text-primary-glow transition-colors animate-float" />
                  <h3 className="text-xl font-semibold mb-4">{mechanism.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{mechanism.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Network Allocation */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gradient">Network Allocation</h2>
            <p className="text-lg text-muted-foreground">
              Strategic distribution across multiple blockchain networks for optimal liquidity and accessibility.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {networkDeployment.map((network, index) => (
              <Card key={index} className="crypto-card group hover:scale-105 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold">{network.network}</h3>
                    <span className="text-2xl font-bold text-primary group-hover:text-primary-glow transition-colors">
                      {network.allocation}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{network.purpose}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Economic Model */}
        <section>
          <Card className="crypto-card p-8 lg:p-12 text-center glow-effect">
            <CardContent className="p-0">
              <PieChart className="w-16 h-16 mx-auto mb-8 text-primary animate-pulse-glow" />
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gradient">Economic Model</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-8">
                CUSD operates on a sustainable economic model designed to maintain long-term stability while providing 
                utility across the DeFi ecosystem. Our multi-layered approach combines traditional financial principles 
                with innovative blockchain technology to create a reliable stablecoin solution.
              </p>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">$1.00</div>
                  <div className="text-sm text-muted-foreground">Target Peg Value</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">Supported Networks</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Price Monitoring</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Tokenomics;