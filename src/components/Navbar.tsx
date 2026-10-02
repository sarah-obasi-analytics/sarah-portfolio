import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 bg-charcoal-bg/90 backdrop-blur-sm border-b border-white/5 z-50 px-6 py-4 transition-colors">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <span className="font-medium text-lg text-off-white tracking-tight">Obasi Sarah</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-text-muted font-medium text-sm">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="hover:text-muted-rose transition">
              {link.label}
            </a>
          ))}
          <a href="#contact" className="bg-muted-rose text-charcoal-bg px-5 py-2 rounded text-sm font-medium hover:bg-soft-blush transition">
            Let's Connect
          </a>
        </div>

        <button
          className="md:hidden text-off-white p-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col items-start gap-5 px-2 pt-6 pb-2 text-text-muted font-medium text-sm">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} onClick={closeMenu} className="hover:text-muted-rose transition">
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={closeMenu}
            className="bg-muted-rose text-charcoal-bg px-5 py-2 rounded text-sm font-medium hover:bg-soft-blush transition"
          >
            Let's Connect
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
