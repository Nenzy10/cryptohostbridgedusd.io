import { Card, CardContent } from '@/components/ui/card';
import { Linkedin, Github, Twitter, Users, Award, Building } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Alex Thompson",
      role: "CEO & Co-Founder",
      background: "Former Goldman Sachs VP, 12+ years in traditional finance and DeFi protocol development",
      linkedin: "#",
      twitter: "#",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Dr. Sarah Chen",
      role: "CTO & Co-Founder", 
      background: "PhD Computer Science MIT, Former Lead Engineer at Coinbase, Smart Contract Security Expert",
      linkedin: "#",
      github: "#",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Compliance",
      background: "Former SEC Attorney, 15+ years regulatory compliance in traditional finance and crypto",
      linkedin: "#",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Dr. James Liu",
      role: "Chief Economist",
      background: "PhD Economics Harvard, Former Federal Reserve Research Economist, Stablecoin Mechanism Design",
      linkedin: "#",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Emma Davis",
      role: "Head of Partnerships",
      background: "Former Business Development Director at Circle, 10+ years in fintech partnerships",
      linkedin: "#",
      twitter: "#",
      image: "/api/placeholder/300/300"
    },
    {
      name: "David Park",
      role: "Lead Security Engineer",
      background: "Former Security Lead at Chainlink, Smart Contract Auditor, Bug Bounty Expert",
      linkedin: "#",
      github: "#",
      image: "/api/placeholder/300/300"
    }
  ];

  const advisors = [
    {
      name: "Robert Williams",
      title: "Strategic Advisor",
      background: "Former JPMorgan Managing Director, Currently Partner at Andreessen Horowitz",
      company: "a16z"
    },
    {
      name: "Dr. Maria Gonzalez",
      title: "Technical Advisor",
      background: "Co-founder of Ethereum Foundation, Leading blockchain researcher",
      company: "Ethereum Foundation"
    },
    {
      name: "Thomas Anderson",
      title: "Regulatory Advisor", 
      background: "Former CFTC Commissioner, Currently Partner at Sullivan & Cromwell",
      company: "Sullivan & Cromwell"
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: "Industry Recognition",
      items: [
        "Defi Innovation Award 2024",
        "Best Stablecoin Protocol - Crypto Awards 2024",
        "Top 10 DeFi Projects to Watch - CoinDesk"
      ]
    },
    {
      icon: Building,
      title: "Institutional Backing",
      items: [
        "Series A led by Andreessen Horowitz",
        "Strategic investment from Circle Ventures",
        "Advisory partnership with ConsenSys"
      ]
    },
    {
      icon: Users,
      title: "Team Credentials",
      items: [
        "100+ years combined experience",
        "Former employees of Goldman Sachs, Coinbase, Circle",
        "Published researchers in top-tier academic journals"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Users className="w-5 h-5 mr-2 text-primary" />
            <span className="text-primary font-semibold text-sm">OUR TEAM</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-8 text-gradient">World-Class Team</h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Our team combines decades of experience from leading financial institutions, 
            technology companies, and regulatory bodies to build the future of decentralized finance.
          </p>
        </div>

        {/* Core Team */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Core Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="premium-card group hover:scale-105 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Users className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-primary font-semibold mb-4">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{member.background}</p>
                  <div className="flex justify-center gap-3">
                    {member.linkedin && (
                      <a href={member.linkedin} className="w-10 h-10 bg-muted/20 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
                        <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary" />
                      </a>
                    )}
                    {member.github && (
                      <a href={member.github} className="w-10 h-10 bg-muted/20 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
                        <Github className="w-5 h-5 text-muted-foreground hover:text-primary" />
                      </a>
                    )}
                    {member.twitter && (
                      <a href={member.twitter} className="w-10 h-10 bg-muted/20 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
                        <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary" />
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Advisors */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Strategic Advisors</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {advisors.map((advisor, index) => (
              <Card key={index} className="crypto-card group hover:scale-[1.02] transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                    <Building className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{advisor.name}</h3>
                  <p className="text-primary font-semibold text-sm mb-3">{advisor.title}</p>
                  <p className="text-muted-foreground text-sm mb-4">{advisor.background}</p>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    {advisor.company}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section>
          <h2 className="text-3xl font-bold mb-12 text-center">Recognition & Achievements</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="premium-card">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <achievement.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-6 text-center">{achievement.title}</h3>
                  <ul className="space-y-3">
                    {achievement.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                        <span className="text-muted-foreground text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Team;