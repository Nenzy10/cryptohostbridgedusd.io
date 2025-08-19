import { Card, CardContent } from '@/components/ui/card';
import { Shield, FileText, AlertTriangle, CheckCircle, Scale, Globe, Lock, Users } from 'lucide-react';

const Compliance = () => {
  const complianceAreas = [
    {
      icon: Scale,
      title: 'Regulatory Framework',
      description: 'We operate within established regulatory frameworks and maintain ongoing compliance with applicable laws and regulations in our operating jurisdictions.'
    },
    {
      icon: Shield,
      title: 'Security Standards',
      description: 'Our platform adheres to industry-leading security standards including smart contract audits, multi-signature protocols, and continuous security monitoring.'
    },
    {
      icon: FileText,
      title: 'Transparency Reporting',
      description: 'Regular publication of audit reports, reserve attestations, and operational transparency documents to maintain accountability to our community.'
    },
    {
      icon: Users,
      title: 'User Protection',
      description: 'Implementation of user protection measures including privacy safeguards, fair trading practices, and clear terms of service.'
    }
  ];

  const legalDocuments = [
    {
      title: 'Terms of Service',
      description: 'Comprehensive terms governing the use of CUSD and our platform services.',
      status: 'active',
      lastUpdated: '2025-01-01'
    },
    {
      title: 'Privacy Policy',
      description: 'Our commitment to protecting user privacy and handling of personal data.',
      status: 'active',
      lastUpdated: '2025-01-01'
    },
    {
      title: 'Risk Disclosure',
      description: 'Important information about risks associated with cryptocurrency and DeFi activities.',
      status: 'active',
      lastUpdated: '2025-01-01'
    },
    {
      title: 'Audit Reports',
      description: 'Third-party security audit reports for our smart contracts and protocols.',
      status: 'pending',
      lastUpdated: 'Coming Soon'
    }
  ];

  const jurisdictions = [
    {
      region: 'United States',
      status: 'Under Review',
      description: 'Monitoring regulatory developments and preparing for compliance with applicable US regulations.'
    },
    {
      region: 'European Union',
      status: 'Compliant',
      description: 'Operating in accordance with EU digital asset regulations and GDPR requirements.'
    },
    {
      region: 'Asia Pacific',
      status: 'Compliant',
      description: 'Adhering to regional cryptocurrency and financial services regulations.'
    },
    {
      region: 'Other Jurisdictions',
      status: 'Case by Case',
      description: 'Evaluating compliance requirements on a jurisdiction-by-jurisdiction basis.'
    }
  ];

  const riskFactors = [
    'Smart contract vulnerabilities and potential technical failures',
    'Regulatory changes that may affect cryptocurrency operations',
    'Market volatility and liquidity risks in cryptocurrency markets',
    'Cross-chain bridge risks and interoperability challenges',
    'Counterparty risks with third-party service providers',
    'Cybersecurity threats and potential hacking attempts'
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active':
      case 'compliant':
        return 'text-green-500';
      case 'pending':
      case 'under review':
        return 'text-yellow-500';
      default:
        return 'text-muted-foreground';
    }
  };

  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-gradient">Compliance</h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Our commitment to regulatory compliance, transparency, and responsible operations in the evolving cryptocurrency landscape.
          </p>
        </div>

        {/* Compliance Framework */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gradient">Compliance Framework</h2>
            <p className="text-lg text-muted-foreground">
              Our comprehensive approach to regulatory compliance and operational excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {complianceAreas.map((area, index) => (
              <Card key={index} className="crypto-card group hover:scale-105 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <area.icon className="w-12 h-12 mx-auto mb-6 text-primary group-hover:text-primary-glow transition-colors animate-float" />
                  <h3 className="text-xl font-semibold mb-4">{area.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Legal Documents */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gradient">Legal Documentation</h2>
            <p className="text-lg text-muted-foreground">
              Important legal documents and policies governing the use of CUSD and our services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {legalDocuments.map((doc, index) => (
              <Card key={index} className="crypto-card group hover:scale-[1.02] transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <FileText className="w-6 h-6 text-primary" />
                      <h3 className="text-xl font-semibold">{doc.title}</h3>
                    </div>
                    <CheckCircle className={`w-5 h-5 ${getStatusColor(doc.status)}`} />
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{doc.description}</p>
                  <div className="flex items-center justify-between">
                    <span className={`text-sm font-medium ${getStatusColor(doc.status)}`}>
                      {doc.status.charAt(0).toUpperCase() + doc.status.slice(1)}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Updated: {doc.lastUpdated}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Regional Compliance */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gradient">Regional Compliance</h2>
            <p className="text-lg text-muted-foreground">
              Our compliance status across different global jurisdictions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {jurisdictions.map((jurisdiction, index) => (
              <Card key={index} className="crypto-card group hover:scale-[1.02] transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Globe className="w-6 h-6 text-primary" />
                      <h3 className="text-xl font-semibold">{jurisdiction.region}</h3>
                    </div>
                    <span className={`text-sm font-medium ${getStatusColor(jurisdiction.status)}`}>
                      {jurisdiction.status}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{jurisdiction.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Risk Disclosure */}
        <section className="mb-20">
          <Card className="crypto-card border-yellow-500/20 bg-yellow-500/5">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <AlertTriangle className="w-8 h-8 text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">Risk Disclosure</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Cryptocurrency and DeFi activities involve significant risks. Before using CUSD or engaging with 
                    our platform, please carefully consider the following risk factors:
                  </p>
                </div>
              </div>

              <ul className="space-y-3">
                {riskFactors.map((risk, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground leading-relaxed">{risk}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-6 bg-muted/30 rounded-xl">
                <p className="text-sm text-muted-foreground font-medium">
                  <strong>Important:</strong> Only invest what you can afford to lose. Cryptocurrency investments 
                  are highly volatile and may result in significant financial losses. Past performance does not 
                  guarantee future results.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact Compliance */}
        <section>
          <Card className="crypto-card p-8 lg:p-12 text-center glow-effect">
            <CardContent className="p-0">
              <Lock className="w-16 h-16 mx-auto mb-8 text-primary animate-pulse-glow" />
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gradient">Compliance Inquiries</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                For regulatory inquiries, compliance questions, or legal matters related to CUSD, 
                please contact our compliance team. We are committed to transparency and 
                maintaining the highest standards of regulatory compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:compliance@cryptohostbridgedusd.io"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary-glow transition-colors glow-effect"
                >
                  Contact Compliance Team
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-xl font-medium hover:bg-muted/50 transition-colors"
                >
                  General Contact
                </a>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Compliance;