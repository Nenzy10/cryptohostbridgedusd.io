import { Card, CardContent } from '@/components/ui/card';
import { Shield, Lock, Eye, CheckCircle, FileText, Users } from 'lucide-react';

const Security = () => {
  const auditReports = [
    {
      firm: "CertiK",
      date: "January 2025",
      score: "98/100",
      status: "Verified",
      report: "https://certik.com/projects/cryptohost-usd"
    },
    {
      firm: "Quantstamp",
      date: "December 2024",
      score: "95/100", 
      status: "Verified",
      report: "https://quantstamp.com/audits/cryptohost-usd"
    },
    {
      firm: "ConsenSys Diligence",
      date: "November 2024",
      score: "97/100",
      status: "Verified", 
      report: "https://consensys.net/diligence/audits/cryptohost-usd"
    }
  ];

  const securityFeatures = [
    {
      icon: Shield,
      title: "Multi-Signature Security",
      description: "All critical operations require multiple cryptographic signatures from verified team members and automated security protocols."
    },
    {
      icon: Lock,
      title: "Time-locked Upgrades",
      description: "Smart contract upgrades are subject to 48-hour time delays, allowing community review and emergency intervention if needed."
    },
    {
      icon: Eye,
      title: "Real-time Monitoring",
      description: "24/7 automated monitoring systems track all transactions, liquidity pools, and smart contract interactions for anomaly detection."
    },
    {
      icon: CheckCircle,
      title: "Formal Verification",
      description: "Mathematical proofs verify the correctness of critical smart contract functions, ensuring security at the protocol level."
    }
  ];

  const complianceStandards = [
    "SOC 2 Type II Compliance",
    "ISO 27001 Information Security",
    "GDPR Data Protection Compliance", 
    "AML/KYC Integration Ready",
    "FATF Travel Rule Compliance",
    "CCSS Cryptocurrency Security Standards"
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Shield className="w-5 h-5 mr-2 text-primary" />
            <span className="text-primary font-semibold text-sm">SECURITY & COMPLIANCE</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-8 text-gradient">Enterprise-Grade Security</h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            CUSD implements military-grade security protocols, undergoes continuous third-party audits, 
            and maintains compliance with international financial regulations to ensure institutional-level security.
          </p>
        </div>

        {/* Security Audit Reports */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Third-Party Security Audits</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {auditReports.map((audit, index) => (
              <Card key={index} className="premium-card group hover:scale-105 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                    <FileText className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{audit.firm}</h3>
                  <p className="text-muted-foreground mb-4">{audit.date}</p>
                  <div className="text-3xl font-bold text-primary mb-4">{audit.score}</div>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    {audit.status}
                  </div>
                  <a 
                    href={audit.report} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-glow text-sm font-medium hover:underline"
                  >
                    View Full Report →
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Security Features */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Security Architecture</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {securityFeatures.map((feature, index) => (
              <Card key={index} className="crypto-card group hover:scale-[1.02] transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
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
            <h2 className="text-3xl font-bold mb-6">Regulatory Compliance</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              CUSD maintains compliance with international financial regulations and security standards, 
              making it suitable for institutional adoption and regulatory approval.
            </p>
          </div>
          
          <Card className="premium-card">
            <CardContent className="p-10">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {complianceStandards.map((standard, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-muted/20 hover:bg-muted/40 transition-colors">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <span className="font-medium">{standard}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Bug Bounty Program */}
        <section>
          <Card className="premium-card text-center p-12 bg-gradient-to-br from-primary/5 to-primary-glow/5">
            <CardContent className="p-0">
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Users className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-6">Bug Bounty Program</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                We offer up to $100,000 in rewards for security researchers who help us identify 
                and resolve potential vulnerabilities in our smart contracts and infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://immunefi.com/bounty/cryptohost-usd" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  View on Immunefi →
                </a>
                <a 
                  href="mailto:security@cryptohost.io"
                  className="inline-flex items-center px-6 py-3 bg-muted text-foreground rounded-lg font-semibold hover:bg-muted/80 transition-colors"
                >
                  Report Vulnerability
                </a>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Security;