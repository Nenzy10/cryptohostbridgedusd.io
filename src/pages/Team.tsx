import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { User, Award, Briefcase, GraduationCap, Users, Globe, LinkedinIcon, TwitterIcon } from 'lucide-react';

const Team = () => {
  const leadership = [
    {
      name: 'Sarah Chen',
      role: 'Chief Executive Officer',
      bio: 'Former Goldman Sachs VP with 15+ years in traditional finance and DeFi. Led digital asset initiatives at major investment banks.',
      education: 'MBA Harvard Business School, BS Computer Science MIT',
      experience: 'Goldman Sachs, JPMorgan Chase, Coinbase',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Dr. Michael Rodriguez',
      role: 'Chief Technology Officer',
      bio: 'Blockchain architect with extensive experience in smart contract development and cross-chain protocols. Former Ethereum Foundation researcher.',
      education: 'PhD Computer Science Stanford, MS Cryptography UC Berkeley',
      experience: 'Ethereum Foundation, ConsenSys, Chainlink Labs',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Jennifer Park',
      role: 'Chief Financial Officer',
      bio: 'Former PwC partner specializing in digital asset compliance and regulatory frameworks. Expert in international financial regulations.',
      education: 'CPA, MBA Wharton, BS Accounting University of Pennsylvania',
      experience: 'PwC, Deloitte, SEC Digital Asset Division',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'David Thompson',
      role: 'Head of Security',
      bio: 'Cybersecurity expert with 20+ years protecting financial infrastructure. Former NSA cryptographer and Fortune 500 CISO.',
      education: 'MS Cybersecurity George Washington University, BS Mathematics Caltech',
      experience: 'NSA, Bank of America (CISO), CrowdStrike',
      linkedin: '#',
      twitter: '#'
    }
  ];

  const advisors = [
    {
      name: 'Dr. Elena Kowalski',
      role: 'Regulatory Advisor',
      bio: 'Former SEC Commissioner with deep expertise in digital asset regulation and securities law. Currently consulting on crypto policy.'
    },
    {
      name: 'James Liu',
      role: 'DeFi Strategy Advisor',
      bio: 'Co-founder of major DeFi protocol with $2B+ TVL. Pioneer in automated market making and liquidity optimization.'
    },
    {
      name: 'Maria Santos',
      role: 'International Markets Advisor',
      bio: 'Former Bank of International Settlements researcher specializing in central bank digital currencies and stablecoin regulation.'
    }
  ];

  const coreTeam = [
    {
      department: 'Engineering',
      count: 12,
      description: 'Smart contract developers, blockchain engineers, and security specialists from top tech companies.'
    },
    {
      department: 'Product',
      count: 6,
      description: 'Product managers and UX designers with fintech and DeFi experience building institutional-grade platforms.'
    },
    {
      department: 'Legal & Compliance',
      count: 4,
      description: 'Regulatory specialists, compliance officers, and legal experts ensuring global regulatory adherence.'
    },
    {
      department: 'Marketing & Business Development',
      count: 8,
      description: 'Growth specialists, partnership managers, and institutional relationship builders.'
    }
  ];

  const companyValues = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'Maintaining the highest standards in everything we do, from code quality to customer service.'
    },
    {
      icon: Users,
      title: 'Transparency',
      description: 'Open communication, regular updates, and clear documentation of our processes and decisions.'
    },
    {
      icon: Globe,
      title: 'Innovation',
      description: 'Pushing the boundaries of DeFi technology while ensuring security and regulatory compliance.'
    },
    {
      icon: Briefcase,
      title: 'Integrity',
      description: 'Operating with the highest ethical standards and building trust through consistent actions.'
    }
  ];

  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Users className="w-5 h-5 mr-2 text-primary" />
            <span className="text-primary font-semibold text-sm">LEADERSHIP TEAM</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-gradient">Meet Our Team</h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Experienced professionals from leading financial institutions, technology companies, and regulatory bodies 
            building the future of decentralized finance with institutional-grade standards.
          </p>
        </div>

        {/* Leadership Team */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gradient">Executive Leadership</h2>
            <p className="text-lg text-muted-foreground">
              Industry veterans with decades of combined experience in traditional finance, blockchain technology, and regulatory compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="crypto-card group hover:scale-105 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-10 h-10 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-1">{leader.name}</h3>
                      <p className="text-primary font-medium mb-3">{leader.role}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{leader.bio}</p>
                      
                      <div className="space-y-2 text-xs text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <GraduationCap className="w-4 h-4" />
                          <span>{leader.education}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4" />
                          <span>{leader.experience}</span>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <LinkedinIcon className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <TwitterIcon className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Advisory Board */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gradient">Advisory Board</h2>
            <p className="text-lg text-muted-foreground">
              Strategic advisors providing expertise in regulation, DeFi innovation, and international markets.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {advisors.map((advisor, index) => (
              <Card key={index} className="crypto-card group hover:scale-105 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{advisor.name}</h3>
                  <p className="text-primary font-medium mb-4">{advisor.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{advisor.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Core Team */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gradient">Core Team</h2>
            <p className="text-lg text-muted-foreground">
              30+ professionals across engineering, product, legal, and business development functions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {coreTeam.map((team, index) => (
              <Card key={index} className="crypto-card group hover:scale-105 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold">{team.department}</h3>
                    <span className="text-2xl font-bold text-primary">{team.count}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{team.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Company Values */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gradient">Our Values</h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide our decisions and define our culture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <Card key={index} className="crypto-card group hover:scale-105 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <value.icon className="w-12 h-12 mx-auto mb-6 text-primary group-hover:text-primary-glow transition-colors animate-float" />
                  <h3 className="text-lg font-semibold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Join Us */}
        <section>
          <Card className="crypto-card p-8 lg:p-12 text-center glow-effect">
            <CardContent className="p-0">
              <Users className="w-16 h-16 mx-auto mb-8 text-primary animate-pulse-glow" />
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gradient">Join Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-8">
                We're always looking for talented individuals who share our vision of bringing institutional-grade 
                DeFi solutions to global markets. Join us in building the future of decentralized finance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="hero" className="group">
                  <Briefcase className="w-5 h-5 mr-2" />
                  View Open Positions
                </Button>
                <Button size="lg" variant="outline" className="group">
                  <Users className="w-5 h-5 mr-2" />
                  Contact Us
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Team;