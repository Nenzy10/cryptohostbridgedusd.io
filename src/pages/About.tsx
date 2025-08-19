import { Card, CardContent } from '@/components/ui/card';
import { Shield, Globe, Users, Zap, Target, Heart, Award, TrendingUp } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'Our smart contracts undergo rigorous security audits and testing to ensure the highest level of protection for your assets.'
    },
    {
      icon: Globe,
      title: 'Global Accessibility',
      description: 'Breaking down financial barriers by providing borderless access to stable digital currency across multiple blockchain networks.'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Built by the community, for the community. Every decision is made with our users and stakeholders in mind.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Continuously pushing the boundaries of DeFi technology to deliver cutting-edge financial solutions.'
    }
  ];

  const milestones = [
    {
      year: '2024',
      title: 'Genesis Launch',
      description: 'Launched CUSD V1 on Binance Smart Chain with initial stablecoin functionality.'
    },
    {
      year: '2025',
      title: 'Multichain Expansion',
      description: 'Deployed across Ethereum, Arbitrum, and Optimism. Launched improved V2 contract with enhanced features.'
    },
    {
      year: 'Future',
      title: 'Global Adoption',
      description: 'Expanding partnerships and integrations to become the premier multichain stablecoin solution.'
    }
  ];

  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-gradient">About CUSD</h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Revolutionizing the intersection of traditional finance and Web3 through innovative stablecoin technology.
          </p>
        </div>

        {/* Mission Statement */}
        <section className="mb-20">
          <Card className="crypto-card p-8 lg:p-12 text-center glow-effect">
            <CardContent className="p-0">
              <Target className="w-16 h-16 mx-auto mb-8 text-primary animate-pulse-glow" />
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gradient">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                CUSD is more than just a token — it's a tool for financial freedom, making cross-border payments, 
                liquidity management, and crypto adoption easier than ever. We're building the bridge between 
                traditional banking systems and blockchain technology, empowering individuals, businesses, 
                and institutions to take control of their financial future in a decentralized world.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Core Values */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gradient">Our Core Values</h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do at Cryptohost USD.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="crypto-card group hover:scale-105 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <value.icon className="w-12 h-12 mx-auto mb-6 text-primary group-hover:text-primary-glow transition-colors animate-float" />
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Journey Timeline */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gradient">Our Journey</h2>
            <p className="text-lg text-muted-foreground">
              From inception to becoming a leading multichain stablecoin solution.
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <Card key={index} className="crypto-card group hover:scale-[1.02] transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    <div className="lg:w-32 flex-shrink-0">
                      <div className="text-2xl font-bold text-primary group-hover:text-primary-glow transition-colors">
                        {milestone.year}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3">{milestone.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Why Choose CUSD */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gradient">Why Choose CUSD?</h2>
            <p className="text-lg text-muted-foreground">
              The advantages that make CUSD the preferred choice for DeFi applications.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="crypto-card group hover:scale-105 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Globe className="w-12 h-12 mx-auto mb-6 text-primary group-hover:text-primary-glow transition-colors animate-float" />
                <h3 className="text-xl font-semibold mb-4">Multichain</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Deployed across BSC, Ethereum, Arbitrum, and Optimism for maximum reach and liquidity.
                </p>
              </CardContent>
            </Card>

            <Card className="crypto-card group hover:scale-105 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Shield className="w-12 h-12 mx-auto mb-6 text-primary group-hover:text-primary-glow transition-colors animate-float" />
                <h3 className="text-xl font-semibold mb-4">Stable & Secure</h3>
                <p className="text-muted-foreground leading-relaxed">
                  USD-pegged with robust mechanisms for maintaining stability across networks.
                </p>
              </CardContent>
            </Card>

            <Card className="crypto-card group hover:scale-105 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Zap className="w-12 h-12 mx-auto mb-6 text-primary group-hover:text-primary-glow transition-colors animate-float" />
                <h3 className="text-xl font-semibold mb-4">DeFi Ready</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Optimized for DEXs, lending platforms, and cross-chain applications.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Security & Audit */}
        <section>
          <Card className="crypto-card p-8 lg:p-12 text-center glow-effect">
            <CardContent className="p-0">
              <Award className="w-16 h-16 mx-auto mb-8 text-primary animate-pulse-glow" />
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gradient">Security & Audit</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                Our smart contracts are under third-party review to ensure the highest standards of security 
                and reliability. An independent audit report will be published soon, demonstrating our 
                commitment to transparency and user protection in the DeFi ecosystem.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default About;