import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Clock, Calendar, Rocket, Target, Globe, Shield, Zap } from 'lucide-react';

const Roadmap = () => {
  const roadmapItems = [
    {
      phase: 'Q3 2025',
      title: 'Foundation & Launch',
      status: 'completed',
      items: [
        'Launch CUSD V1 on Binance Smart Chain',
        'Establish core team and advisory board',
        'Complete initial smart contract development',
        'Deploy basic stablecoin functionality',
        'Launch community channels and website'
      ]
    },
    {
      phase: 'Q4 2025',
      title: 'Enhanced Contract & Security',
      status: 'completed',
      items: [
        'Deploy improved V2 contract with enhanced security',
        'Implement advanced stability mechanisms',
        'Complete third-party security audit',
        'Establish emergency response protocols',
        'Launch governance framework foundation'
      ]
    },
    {
      phase: 'Q1 2026',
      title: 'Multichain Expansion',
      status: 'in-progress',
      items: [
        'Deploy CUSD on Ethereum mainnet',
        'Launch on Arbitrum for Layer 2 scaling',
        'Integrate with Optimism network',
        'Establish cross-chain bridge functionality',
        'Partner with major DEX platforms'
      ]
    },
    {
      phase: 'Q2 2026',
      title: 'DeFi Integration & Partnerships',
      status: 'planned',
      items: [
        'Integration with leading lending protocols',
        'Partner with yield farming platforms',
        'Launch liquidity mining programs',
        'Establish institutional partnerships',
        'Implement advanced trading features'
      ]
    },
    {
      phase: 'Q3 2026',
      title: 'Global Adoption & Scale',
      status: 'planned',
      items: [
        'Expand to additional blockchain networks',
        'Launch mobile wallet integration',
        'Establish traditional finance partnerships',
        'Implement advanced governance features',
        'Scale to enterprise-level adoption'
      ]
    }
  ];

  const upcomingFeatures = [
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Multi-signature wallets and advanced security protocols for institutional-grade protection.'
    },
    {
      icon: Globe,
      title: 'Global Expansion',
      description: 'Deployment on additional networks including Polygon, Avalanche, and Fantom.'
    },
    {
      icon: Zap,
      title: 'Instant Settlements',
      description: 'Lightning-fast cross-chain transfers and settlements for improved user experience.'
    },
    {
      icon: Target,
      title: 'Advanced Analytics',
      description: 'Real-time monitoring dashboard and analytics for transparency and insights.'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-6 h-6 text-green-500" />;
      case 'in-progress':
        return <Clock className="w-6 h-6 text-primary animate-pulse" />;
      case 'planned':
        return <Calendar className="w-6 h-6 text-muted-foreground" />;
      default:
        return <Calendar className="w-6 h-6 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'border-green-500/50 bg-green-500/5';
      case 'in-progress':
        return 'border-primary/50 bg-primary/5 glow-effect';
      case 'planned':
        return 'border-border/50 bg-muted/20';
      default:
        return 'border-border/50 bg-muted/20';
    }
  };

  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-gradient">Roadmap</h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Our strategic journey towards becoming the leading multichain stablecoin solution, 
            with clear milestones and deliverables for each phase of development.
          </p>
        </div>

        {/* Roadmap Timeline */}
        <section className="mb-20">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary-glow to-muted"></div>

            <div className="space-y-12">
              {roadmapItems.map((item, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 rounded-full bg-background border-2 border-primary z-10"></div>
                  
                  <Card className={`ml-16 crypto-card transition-all duration-300 hover:scale-[1.02] ${getStatusColor(item.status)}`}>
                    <CardContent className="p-8">
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-lg font-bold text-primary">{item.phase}</span>
                            {getStatusIcon(item.status)}
                          </div>
                          <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                            {item.status.charAt(0).toUpperCase() + item.status.slice(1).replace('-', ' ')}
                          </div>
                        </div>
                      </div>

                      <ul className="space-y-3">
                        {item.items.map((listItem, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground leading-relaxed">{listItem}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Features */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gradient">Upcoming Features</h2>
            <p className="text-lg text-muted-foreground">
              Innovative capabilities and enhancements planned for future releases.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {upcomingFeatures.map((feature, index) => (
              <Card key={index} className="crypto-card group hover:scale-105 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <feature.icon className="w-12 h-12 mx-auto mb-6 text-primary group-hover:text-primary-glow transition-colors animate-float" />
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Vision Statement */}
        <section>
          <Card className="crypto-card p-8 lg:p-12 text-center glow-effect">
            <CardContent className="p-0">
              <Rocket className="w-16 h-16 mx-auto mb-8 text-primary animate-pulse-glow" />
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gradient">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-8">
                To become the most trusted and widely adopted multichain stablecoin, serving as the fundamental 
                infrastructure for the next generation of decentralized financial applications. We envision a future 
                where CUSD enables seamless value transfer across all blockchain networks, empowering billions of users 
                worldwide with stable, secure, and accessible digital currency.
              </p>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">2026</div>
                  <div className="text-sm text-muted-foreground">Target Completion</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">10+</div>
                  <div className="text-sm text-muted-foreground">Blockchain Networks</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">1M+</div>
                  <div className="text-sm text-muted-foreground">Target Users</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Roadmap;