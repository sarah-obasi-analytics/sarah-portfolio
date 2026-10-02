import { portfolioData } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { Mail, MessageCircle } from 'lucide-react';

// lucide-react dropped brand/logo icons, so these are hand-drawn to match its 24px stroke style.
const Linkedin = ({ className, size = 24 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.558V9h3.556v11.452z" />
  </svg>
);

const Github = ({ className, size = 24 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.417-1.305.76-1.605-2.665-.303-5.467-1.332-5.467-5.93 0-1.31.465-2.382 1.235-3.222-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23A11.5 11.5 0 0 1 12 5.803c1.02.005 2.047.137 3.006.404 2.29-1.552 3.295-1.23 3.295-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.912 1.23 3.222 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const Contact = () => {
  return (
    <section id="contact" className="px-6 py-20 md:py-28 bg-charcoal-card border-t border-white/5">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
            <h2 className="text-sm font-medium text-muted-rose tracking-widest uppercase mb-3">Let's Work With Data</h2>
            <h3 className="text-4xl font-light text-off-white mb-6">Have a financial dataset, reporting challenge, or business problem that needs clearer analysis?</h3>
            <p className="text-text-muted text-lg">I'd love to hear from you.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <motion.a whileHover={{ y: -4 }} href={`mailto:${portfolioData.socialLinks.email}`} className="bg-charcoal-bg p-6 rounded border border-white/10 flex items-center gap-4 hover:border-muted-rose transition" aria-label="Email Obasi Sarah">
                <Mail className="text-muted-rose" />
                <span className="text-off-white font-medium">Email Me</span>
            </motion.a>
            <motion.a whileHover={{ y: -4 }} href={portfolioData.socialLinks.linkedin!} target="_blank" rel="noopener noreferrer" className="bg-charcoal-bg p-6 rounded border border-white/10 flex items-center gap-4 hover:border-muted-rose transition" aria-label="Connect with Obasi Sarah on LinkedIn">
                <Linkedin className="text-muted-rose" />
                <span className="text-off-white font-medium">LinkedIn</span>
            </motion.a>
            <motion.a whileHover={{ y: -4 }} href={portfolioData.socialLinks.github!} target="_blank" rel="noopener noreferrer" className="bg-charcoal-bg p-6 rounded border border-white/10 flex items-center gap-4 hover:border-muted-rose transition" aria-label="View Obasi Sarah's GitHub">
                <Github className="text-muted-rose" />
                <span className="text-off-white font-medium">GitHub</span>
            </motion.a>
            <motion.a whileHover={{ y: -4 }} href={portfolioData.socialLinks.whatsapp!} target="_blank" rel="noopener noreferrer" className="bg-charcoal-bg p-6 rounded border border-white/10 flex items-center gap-4 hover:border-muted-rose transition" aria-label="Contact Obasi Sarah on WhatsApp">
                <MessageCircle className="text-muted-rose" />
                <span className="text-off-white font-medium">WhatsApp</span>
            </motion.a>
        </div>
      </div>
    </section>
  );
};
export default Contact;
