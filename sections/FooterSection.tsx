import { Instagram, Facebook, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#mission' },
  { label: 'Programs', href: '#programs' },
  { label: 'Stories', href: '#stories' },
  { label: 'Events', href: '#event' },
  { label: 'Contact', href: '#contact' }
];

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com/cuesforcancer', label: 'Instagram' },
  { icon: Facebook, href: 'https://facebook.com/cuesforcancer', label: 'Facebook' },
  { icon: Linkedin, href: 'https://linkedin.com/company/cuesforcancerinc', label: 'LinkedIn' }
];

export default function FooterSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      id="contact"
      className="relative w-full bg-charcoal py-16 lg:py-20 z-80"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img 
              src="/images/logo-transparent.png" 
              alt="Cues for Cancer" 
              className="h-16 w-auto mb-4 brightness-0 invert"
            />
            <p className="body-default text-cream/60 max-w-md mb-6">
              Where the curtain rises on courage—empowering the theatre world 
              through cancer support and advocacy.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center text-cream/60 hover:bg-amber hover:text-charcoal transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-cream/40 block mb-4">
              Navigation
            </span>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-cream/60 hover:text-amber transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-cream/40 block mb-4">
              Contact
            </span>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-cream/60">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Norfolk, Virginia</span>
              </li>
              <li>
                <a
                  href="mailto:info@cuesforcancer.com"
                  className="flex items-center gap-3 text-cream/60 hover:text-amber transition-colors duration-300"
                >
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span>info@cuesforcancer.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+17571234567"
                  className="flex items-center gap-3 text-cream/60 hover:text-amber transition-colors duration-300"
                >
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span>(757) 123-4567</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-xs text-cream/40">
            © 2025 Cues for Cancer. 501(c)(3) Nonprofit.
          </p>
          <p className="font-mono text-xs text-cream/40">
            EIN: 33-2884314
          </p>
        </div>
      </div>
    </footer>
  );
}
