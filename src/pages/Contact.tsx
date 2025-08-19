import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Mail, 
  MessageCircle, 
  Twitter, 
  Github, 
  Linkedin, 
  MapPin, 
  Clock, 
  Send,
  Phone,
  Building,
  Globe
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      info: 'nenzybrown@cryptohostbridgedusd.io',
      description: 'Send us an email for general inquiries'
    },
    {
      icon: MessageCircle,
      title: 'Telegram',
      info: '@NenzyBrown',
      description: 'Join our community for real-time discussions'
    },
    {
      icon: Twitter,
      title: 'Twitter',
      info: '@Nenzybrown',
      description: 'Follow us for the latest updates'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      info: 'Nenzy Brown',
      description: 'Connect with our founder professionally'
    }
  ];

  const officeInfo = [
    {
      icon: Building,
      title: 'Company',
      info: 'Cryptohost USD',
    },
    {
      icon: MapPin,
      title: 'Headquarters',
      info: 'Global Operations',
    },
    {
      icon: Clock,
      title: 'Response Time',
      info: '24-48 hours',
    },
    {
      icon: Globe,
      title: 'Website',
      info: 'cryptohostbridgedusd.io',
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-gradient">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Get in touch with the Cryptohost USD team. We're here to help with questions, 
            partnerships, and support for our multichain stablecoin solution.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <section>
            <Card className="crypto-card p-8 glow-effect">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold mb-6 text-gradient">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="h-12 bg-muted/30 border-border/50 rounded-xl"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="h-12 bg-muted/30 border-border/50 rounded-xl"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="h-12 bg-muted/30 border-border/50 rounded-xl"
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="bg-muted/30 border-border/50 rounded-xl resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full group glow-effect">
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </section>

          {/* Contact Information */}
          <section className="space-y-8">
            {/* Contact Methods */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gradient">Get in Touch</h2>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <Card key={index} className="crypto-card group hover:scale-[1.02] transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <method.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">{method.title}</h3>
                          <p className="text-primary font-medium mb-1">{method.info}</p>
                          <p className="text-sm text-muted-foreground">{method.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Company Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gradient">Company Information</h2>
              <div className="space-y-4">
                {officeInfo.map((info, index) => (
                  <Card key={index} className="crypto-card group hover:scale-[1.02] transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <info.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">{info.title}</h3>
                          <p className="text-foreground">{info.info}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Founder Information */}
            <Card className="crypto-card p-8 glow-effect">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gradient">Nenzy Brown</h3>
                <p className="text-muted-foreground mb-4">Founder & CEO</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Leading the vision for Cryptohost USD as a revolutionary multichain stablecoin solution. 
                  Connect directly for partnerships, strategic discussions, and business development opportunities.
                </p>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* Partnership Section */}
        <section className="mt-20">
          <Card className="crypto-card p-8 lg:p-12 text-center glow-effect">
            <CardContent className="p-0">
              <Building className="w-16 h-16 mx-auto mb-8 text-primary animate-pulse-glow" />
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gradient">Partnership Opportunities</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Interested in partnering with CUSD? We're actively seeking collaborations with DeFi platforms, 
                exchanges, institutional partners, and technology providers to expand our ecosystem.
              </p>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <h4 className="font-semibold mb-2">DeFi Integration</h4>
                  <p className="text-sm text-muted-foreground">Protocol integrations and liquidity partnerships</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Exchange Listings</h4>
                  <p className="text-sm text-muted-foreground">Trading pairs and market making arrangements</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Enterprise Solutions</h4>
                  <p className="text-sm text-muted-foreground">Custom integrations for institutional clients</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Contact;