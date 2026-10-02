import { portfolioData } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { FileSpreadsheet, Workflow, LayoutDashboard, Database } from 'lucide-react';

const toolIcons: Record<string, React.ComponentType<{className?: string, size?: number}>> = {
    "Microsoft Excel": FileSpreadsheet,
    "Power Query": Workflow,
    "Power BI": LayoutDashboard,
    "SQL": Database
};

const Skills = () => {
  return (
    <section id="skills" className="px-6 py-20 md:py-28 bg-charcoal-card">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-sm font-medium text-muted-rose tracking-widest uppercase mb-3 text-center">Core Competencies</h2>
        <h3 className="text-4xl font-light text-off-white mb-16 text-center">Technical Expertise</h3>
        <div className="grid md:grid-cols-3 gap-8">
            {/* Data Analytics */}
            <motion.div whileHover={{ y: -4 }} className="bg-charcoal-bg p-8 rounded border border-white/5 shadow-lg transition-shadow hover:shadow-xl">
                <h3 className="font-medium text-off-white text-lg mb-6">Data Analytics</h3>
                <ul className="space-y-3">
                    {portfolioData.skills.dataAnalytics.map(skill => (
                        <li key={skill} className="text-text-muted">{skill}</li>
                    ))}
                </ul>
            </motion.div>
            {/* Tools */}
            <motion.div whileHover={{ y: -4 }} className="bg-charcoal-bg p-8 rounded border border-white/5 shadow-lg transition-shadow hover:shadow-xl">
                <h3 className="font-medium text-off-white text-lg mb-6">Tools</h3>
                <ul className="space-y-6">
                    {portfolioData.skills.tools.map(tool => {
                        const Icon = toolIcons[tool.name] || Database;
                        return (
                            <li key={tool.name} className="flex gap-4 items-start">
                                <div className="mt-1 text-muted-rose"><Icon size={20}/></div>
                                <div>
                                    <span className="font-medium text-off-white block">{tool.name}</span>
                                    <span className="text-sm text-text-muted">{tool.description}</span>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </motion.div>
            {/* Business & Finance */}
            <motion.div whileHover={{ y: -4 }} className="bg-charcoal-bg p-8 rounded border border-white/5 shadow-lg transition-shadow hover:shadow-xl">
                <h3 className="font-medium text-off-white text-lg mb-6">Business & Finance</h3>
                <ul className="space-y-3">
                    {portfolioData.skills.businessAndFinance.map(skill => (
                        <li key={skill} className="text-text-muted">{skill}</li>
                    ))}
                </ul>
            </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
