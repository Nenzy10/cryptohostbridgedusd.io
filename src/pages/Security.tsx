import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Lock, Eye, CheckCircle, AlertTriangle, Globe, FileText, Award, Download } from 'lucide-react';

const Security = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: 'Multi-Signature Security',
      description: 'All critical contract functions require multiple authorized signatures, preventing single points of failure and ensuring decentralized control over treasury operations.'
    },
    {
      icon: Lock,
      title: 'Smart Contract Audits',
      description: 'Regular third-party security audits by leading blockchain security firms including CertiK, ConsenSys Diligence, and Trail of Bits to ensure code integrity.'
    },
    {
      icon: Eye,
      title: 'Real-Time Monitoring',
      description: '24/7 automated monitoring systems track contract interactions, large transactions, and potential security threats across all deployed networks.'
    },
    {
      icon: CheckCircle,
      title: 'Emergency Response',
      description: 'Rapid response protocols and emergency pause mechanisms protect user funds during critical security events or market anomalies.'
    }
  ];

  const auditReports = [
    {
      firm: 'CertiK',
      date: 'Q1 2025',
      status: 'In Progress',
      score: 'TBD',
      description: 'Comprehensive smart contract security audit covering all deployment networks.'
    },
    {
      firm: 'ConsenSys Diligence',
      date: 'Q2 2025',
      status: 'Scheduled',
      score: 'TBD',
      description: 'Economic model and tokenomics security review.'
    },
    {
      firm: 'Trail of Bits',
      date: 'Q3 2025',
      status: 'Planned',
      score: 'TBD',
      description: 'Cross-chain bridge security assessment and penetration testing.'
    }
  ];

  const riskMitigation = [
    {
      risk: 'Smart Contract Vulnerabilities',
      mitigation: 'Regular audits, formal verification, bug bounty programs, and gradual deployment strategies.',
      status: 'Active'
    },
    {
      risk: 'Market Volatility',
      mitigation: 'Algorithmic stability mechanisms, reserve funds, and cross-chain arbitrage opportunities.',
      status: 'Active'
    },
    {
      risk: 'Liquidity Risks',
      mitigation: 'Multi-DEX liquidity provisioning, strategic partnerships, and emergency liquidity protocols.',
      status: 'Active'
    },
    {
      risk: 'Regulatory Changes',
      mitigation: 'Compliance monitoring, legal advisory board, and adaptable governance structures.',
      status: 'Active'
    }
  ];

  const complianceStandards = [
    'AML/KYC Compliance Framework',
    'SOC 2 Type II Security Controls',
    'ISO 27001 Information Security Management',
    'GDPR Data Protection Compliance',
    'FATF Travel Rule Implementation',
    'MiCA Regulation Preparedness (EU)',
    'SEC Securities Law Compliance (US)',
    'FCA Digital Asset Guidelines (UK)'
  ];

  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Shield className="w-5 h-5 mr-2 text-primary" />
            <span className="text-primary font-semibold text-sm">ENTERPRISE SECURITY</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-gradient">Security & Compliance</h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            CUSD implements institutional-grade security measures and compliance frameworks to meet the highest standards 
            for regulatory approval, platform listings, and enterprise adoption.
          </p>
        </div>

        {/* Security Features */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gradient">Security Architecture</h2>
            <p className="text-lg text-muted-foreground">
              Multi-layered security infrastructure protecting user assets and maintaining system integrity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {securityFeatures.map((feature, index) => (
              <Card key={index} className="crypto-card group hover:scale-105 transition-all duration-300">
                <CardContent className="p-8">
                  <feature.icon className="w-12 h-12 mb-6 text-primary group-hover:text-primary-glow transition-colors animate-float" />
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Audit Reports */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gradient">Security Audits</h2>
            <p className="text-lg text-muted-foreground">
              Independent security assessments by leading blockchain security firms.
            </p>
          </div>

          <div className="grid gap-6">
            {auditReports.map((audit, index) => (
              <Card key={index} className="crypto-card group hover:scale-[1.02] transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Award className="w-6 h-6 text-primary" />
                        <h3 className="text-lg font-semibold">{audit.firm}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          audit.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                          audit.status === 'Scheduled' ? 'bg-blue-100 text-blue-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {audit.status}
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-2">{audit.description}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>Date: {audit.date}</span>
                        <span>Score: {audit.score}</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="shrink-0">
                      <Download className="w-4 h-4 mr-2" />
                      Download Report
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Risk Mitigation */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gradient">Risk Management</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive risk assessment and mitigation strategies for all identified threat vectors.
            </p>
          </div>

          <div className="grid gap-6">
            {riskMitigation.map((item, index) => (
              <Card key={index} className="crypto-card group hover:scale-[1.02] transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold">{item.risk}</h3>
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {item.status}
                        </span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{item.mitigation}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Compliance Standards */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gradient">Regulatory Compliance</h2>
            <p className="text-lg text-muted-foreground">
              Meeting international regulatory standards for digital asset operations and platform listings.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceStandards.map((standard, index) => (
              <Card key={index} className="crypto-card group hover:scale-105 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <CheckCircle className="w-10 h-10 mx-auto mb-4 text-green-500" />
                  <h3 className="font-semibold text-sm">{standard}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Security Contact */}
        <section>
          <Card className="crypto-card p-8 lg:p-12 text-center glow-effect">
            <CardContent className="p-0">
              <Shield className="w-16 h-16 mx-auto mb-8 text-primary animate-pulse-glow" />
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gradient">Security First Approach</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-8">
                Our commitment to security goes beyond compliance. We maintain the highest standards of protection 
                through continuous monitoring, regular audits, and proactive threat detection. Report security 
                concerns or participate in our bug bounty program.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="hero" className="group">
                  <FileText className="w-5 h-5 mr-2" />
                  Bug Bounty Program
                </Button>
                <Button size="lg" variant="outline" className="group">
                  <Globe className="w-5 h-5 mr-2" />
                  Security Contact
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Security;