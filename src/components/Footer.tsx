import { Link } from 'react-router-dom';
import { Github, Twitter, MessageCircle, FileText, ExternalLink } from 'lucide-react';
const cusdLogo = '/lovable-uploads/55043495-b296-4ae2-b99c-66d5844229d8.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, url: '#', handle: '@CryptohostUSD' },
    { name: 'Telegram', icon: MessageCircle, url: '#', handle: '@CryptohostUSD' },
    { name: 'GitHub', icon: Github, url: '#', handle: 'cryptohost-usd' },
  ];

  const quickLinks = [
    { name: 'About', path: '/about' },
    { name: 'Tokenomics', path: '/tokenomics' },
    { name: 'Roadmap', path: '/roadmap' },
    { name: 'FAQ', path: '/faq' },
  ];

  const legalLinks = [
    { name: 'Compliance', path: '/compliance' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Risk Disclosure', path: '/risk' },
  ];

  return (
    <footer className="bg-card/30 backdrop-blur-sm border-t border-border/50 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img src={cusdLogo} alt="CUSD Logo" className="h-12 w-12 rounded-full shadow-soft" />
              <div>
                <h3 className="text-xl font-bold text-gradient">Cryptohost USD</h3>
                <p className="text-sm text-muted-foreground">CUSD</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              A decentralized, multichain USD-pegged stablecoin bridging traditional finance and Web3. 
              Empowering the future of digital finance with stability, security, and interoperability.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary hover:text-primary-glow transition-all duration-300 hover:scale-110 hover:shadow-glow"
                  title={social.handle}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center group"
                  >
                    {link.name}
                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-foreground">Legal & Compliance</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center group"
                  >
                    {link.name}
                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contract Information */}
        <div className="py-8 border-t border-border/30">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="crypto-card">
              <h5 className="font-semibold text-primary mb-2">Main Contract (BSC)</h5>
              <p className="contract-address text-xs">0x7f32650c35Cf5a90447B922932b09262626a1346</p>
            </div>
            <div className="crypto-card">
              <h5 className="font-semibold text-primary mb-2">Ethereum</h5>
              <p className="contract-address text-xs">0x54fdc17E702DC85E33C5aeCFaE57c76cECf23C4c</p>
            </div>
            <div className="crypto-card">
              <h5 className="font-semibold text-primary mb-2">Arbitrum</h5>
              <p className="contract-address text-xs">0x82656b01211ed760f3ca7f597b05928cd72c1971</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border/30 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {currentYear} Cryptohost USD. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm">
            <Link to="/whitepaper" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
              <FileText className="w-4 h-4 mr-1" />
              Whitepaper
            </Link>
            <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;