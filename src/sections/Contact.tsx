import { portfolioData } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, User } from 'lucide-react';

// Using User as a placeholder for LinkedIn/Github for now to pass the build.
const Linkedin = User;
const Github = User;

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
