import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronDown, ChevronUp, HelpCircle, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const faqs = [
    {
      category: 'General',
      questions: [
        {
          question: 'What is Cryptohost USD (CUSD)?',
          answer: 'CUSD is a decentralized, multichain USD-pegged stablecoin designed to bridge traditional finance and Web3. It provides a stable digital currency solution across multiple blockchain networks including BSC, Ethereum, Arbitrum, and Optimism.'
        },
        {
          question: 'How is CUSD different from other stablecoins?',
          answer: 'CUSD stands out through its multichain deployment, enhanced stability mechanisms, and focus on DeFi integration. Unlike single-chain stablecoins, CUSD provides seamless interoperability across multiple networks with consistent value and functionality.'
        },
        {
          question: 'What is the maximum supply of CUSD?',
          answer: 'The maximum supply of CUSD is 4.98 sextillion tokens, strategically distributed across liquidity pools, stability reserves, development, partnerships, community rewards, and team allocation to ensure sustainable growth and stability.'
        }
      ]
    },
    {
      category: 'Technical',
      questions: [
        {
          question: 'Which blockchain networks support CUSD?',
          answer: 'CUSD is currently deployed on Binance Smart Chain (main contract), Ethereum, Arbitrum, and Optimism. We plan to expand to additional networks including Polygon, Avalanche, and Fantom in future phases.'
        },
        {
          question: 'What are the contract addresses for CUSD?',
          answer: 'Main BSC Contract: 0x7f32650c35Cf5a90447B922932b09262626a1346, Ethereum: 0x54fdc17E702DC85E33C5aeCFaE57c76cECf23C4c, Arbitrum & Optimism: 0x82656b01211ed760f3ca7f597b05928cd72c1971. Always verify addresses on our official website.'
        },
        {
          question: 'How does CUSD maintain its USD peg?',
          answer: 'CUSD maintains its $1.00 USD peg through multiple mechanisms including collateral backing, algorithmic stabilization, cross-chain arbitrage opportunities, and rapid response protocols during extreme market conditions.'
        },
        {
          question: 'Is CUSD audited?',
          answer: 'Our smart contracts are currently under third-party security review. An independent audit report will be published soon to ensure transparency and demonstrate our commitment to security in the DeFi ecosystem.'
        }
      ]
    },
    {
      category: 'Usage',
      questions: [
        {
          question: 'How can I buy CUSD tokens?',
          answer: 'CUSD can be purchased through various methods including DEX platforms, direct contract interaction, and partner exchanges. You can also add CUSD to your wallet using our contract addresses on supported networks.'
        },
        {
          question: 'Can I use CUSD in DeFi applications?',
          answer: 'Yes, CUSD is specifically optimized for DeFi applications including DEXs, lending platforms, yield farming, and cross-chain applications. Our multichain deployment ensures maximum compatibility and liquidity across the DeFi ecosystem.'
        },
        {
          question: 'How do I add CUSD to my wallet?',
          answer: 'You can add CUSD to MetaMask or other compatible wallets by using our contract addresses. Visit the "Add CUSD to Wallet" section on our homepage for network-specific contract addresses and easy one-click addition.'
        },
        {
          question: 'Are there transaction fees when using CUSD?',
          answer: 'Transaction fees depend on the blockchain network you\'re using. BSC offers low-cost transactions, while Ethereum may have higher gas fees. Layer 2 solutions like Arbitrum and Optimism provide cost-effective alternatives.'
        }
      ]
    },
    {
      category: 'Partnership',
      questions: [
        {
          question: 'How can I partner with CUSD?',
          answer: 'We welcome partnerships with DeFi platforms, traditional financial institutions, and technology providers. Contact us through our partnership form or email to discuss integration opportunities and strategic collaborations.'
        },
        {
          question: 'Is there an affiliate or referral program?',
          answer: 'We are developing community reward programs that will include referral incentives and partnership benefits. Join our community channels to stay updated on upcoming programs and opportunities.'
        },
        {
          question: 'Can exchanges list CUSD?',
          answer: 'Yes, we actively work with exchanges to list CUSD and provide liquidity. Exchanges interested in listing can contact our partnerships team for technical integration support and market-making arrangements.'
        }
      ]
    },
    {
      category: 'Security',
      questions: [
        {
          question: 'How secure is CUSD?',
          answer: 'CUSD employs multiple security layers including audited smart contracts, multi-signature protocols, emergency response mechanisms, and continuous monitoring. Our V2 contract includes enhanced security features based on industry best practices.'
        },
        {
          question: 'What happens if there\'s a security issue?',
          answer: 'We have established emergency response protocols including pause mechanisms, rapid response teams, and communication channels to address any security concerns immediately. Our team monitors the protocol 24/7.'
        },
        {
          question: 'How can I report a security vulnerability?',
          answer: 'Security vulnerabilities should be reported immediately to our security team through our responsible disclosure program. Contact us directly for confidential reporting and we will respond promptly to investigate and address any issues.'
        }
      ]
    },
    {
      category: 'Legal & Compliance',
      questions: [
        {
          question: 'Is CUSD compliant with regulations?',
          answer: 'We are committed to regulatory compliance and work with legal experts to ensure CUSD meets applicable regulations. Visit our Compliance page for detailed information about our regulatory approach and legal framework.'
        },
        {
          question: 'What are the risks of using CUSD?',
          answer: 'Like all cryptocurrencies, CUSD involves risks including smart contract risks, regulatory changes, and market volatility. Please read our Risk Disclosure document and only invest what you can afford to lose.'
        },
        {
          question: 'Are there geographical restrictions?',
          answer: 'CUSD is designed to be globally accessible, however, certain jurisdictions may have restrictions on cryptocurrency usage. Users are responsible for compliance with their local laws and regulations.'
        }
      ]
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const filteredFAQs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(faq =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-gradient">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about CUSD, its functionality, security, and usage across multiple blockchain networks.
          </p>
        </div>

        {/* Search */}
        <div className="mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="search"
              placeholder="Search FAQ..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 h-14 text-lg bg-card/50 backdrop-blur-sm border-border/50 rounded-2xl"
            />
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-12">
          {filteredFAQs.map((category, categoryIndex) => (
            <section key={categoryIndex}>
              <h2 className="text-2xl font-bold mb-8 text-gradient flex items-center">
                <HelpCircle className="w-6 h-6 mr-3" />
                {category.category}
              </h2>
              
              <div className="space-y-4">
                {category.questions.map((faq, index) => {
                  const globalIndex = categoryIndex * 100 + index; // Unique index across categories
                  const isOpen = openItems.includes(globalIndex);
                  
                  return (
                    <Card key={index} className="crypto-card hover:scale-[1.01] transition-all duration-300">
                      <CardContent className="p-0">
                        <button
                          onClick={() => toggleItem(globalIndex)}
                          className="w-full p-6 text-left flex items-center justify-between group"
                        >
                          <h3 className="text-lg font-semibold pr-4 group-hover:text-primary transition-colors">
                            {faq.question}
                          </h3>
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                          )}
                        </button>
                        
                        {isOpen && (
                          <div className="px-6 pb-6 animate-slide-up">
                            <div className="pt-4 border-t border-border/30">
                              <p className="text-muted-foreground leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        {/* No Results */}
        {filteredFAQs.length === 0 && searchTerm && (
          <div className="text-center py-16">
            <HelpCircle className="w-16 h-16 mx-auto mb-6 text-muted-foreground" />
            <h3 className="text-xl font-semibold mb-4">No results found</h3>
            <p className="text-muted-foreground mb-6">
              We couldn't find any FAQ items matching "{searchTerm}". Try a different search term.
            </p>
            <button
              onClick={() => setSearchTerm('')}
              className="text-primary hover:text-primary-glow transition-colors font-medium"
            >
              Clear search and view all FAQs
            </button>
          </div>
        )}

        {/* Contact Section */}
        <section className="mt-20">
          <Card className="crypto-card p-8 lg:p-12 text-center glow-effect">
            <CardContent className="p-0">
              <HelpCircle className="w-16 h-16 mx-auto mb-8 text-primary animate-pulse-glow" />
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gradient">Still Have Questions?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
                Can't find the answer you're looking for? Our team is here to help. Reach out to us through 
                our contact form or join our community channels for real-time support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary-glow transition-colors glow-effect"
                >
                  Contact Support
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-xl font-medium hover:bg-muted/50 transition-colors"
                >
                  Join Community
                </a>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default FAQ;