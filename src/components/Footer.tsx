import { portfolioData } from '../data/portfolioData';
import { Mail, MessageCircle } from 'lucide-react';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { socialLinks } = portfolioData;

  return (
    <footer className="bg-[#0a0a0a] text-off-white py-16 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 text-center md:text-left">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-white mb-2">OBASI SARAH</h2>
            <p className="text-muted-rose font-medium mb-4">Finance Data Analyst</p>
            <p className="text-text-muted max-w-xs mx-auto md:mx-0">
              Turning data into insights. Turning insights into better decisions.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start gap-3">
            <h3 className="font-medium text-off-white mb-1">Quick Links</h3>
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="text-text-muted hover:text-muted-rose transition text-sm">
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col items-center md:items-start gap-3">
            <h3 className="font-medium text-off-white mb-1">Get In Touch</h3>
            <a href={`mailto:${socialLinks.email}`} className="text-text-muted hover:text-muted-rose transition text-sm flex items-center gap-2">
              <Mail size={16} /> {socialLinks.email}
            </a>
            <a href={socialLinks.whatsapp!} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-muted-rose transition text-sm flex items-center gap-2">
              <MessageCircle size={16} /> {socialLinks.whatsappDisplay}
            </a>
            <a href={socialLinks.linkedin!} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-muted-rose transition text-sm">
              LinkedIn
            </a>
            <a href={socialLinks.github!} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-muted-rose transition text-sm">
              GitHub
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-text-muted text-sm text-center">
          <p>&copy; {currentYear} Obasi Sarah. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
