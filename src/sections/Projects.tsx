import { portfolioData } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileSpreadsheet, TableProperties, BarChart3, LineChart, Database } from 'lucide-react';

const projectToolIcons: Record<string, React.ComponentType<{className?: string, size?: number}>> = {
    "Microsoft Excel": FileSpreadsheet,
    "Pivot Tables": TableProperties,
    "Pivot Charts": BarChart3,
    "Data Analysis": LineChart
};

const Projects = () => {
  return (
    <section id="projects" className="px-6 py-20 md:py-28 bg-charcoal-bg">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-sm font-medium text-muted-rose tracking-widest uppercase mb-3 text-center">Case Studies</h2>
        <h3 className="text-4xl font-light text-off-white mb-16 text-center">Featured Projects</h3>
        <div className="space-y-16">
          {portfolioData.projects.map((project, index) => (
            <motion.div 
                key={project.id} 
                whileHover={{ y: -8 }}
                className="bg-charcoal-card border border-white/5 rounded p-8 md:p-12 transition-all hover:shadow-2xl"
            >
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                    <span className="text-muted-rose font-medium text-sm mb-4 block">0{index + 1} | {project.category}</span>
                    <h3 className="font-light text-off-white text-3xl mb-6">{project.title}</h3>
                    <p className="text-text-muted mb-8 text-lg">{project.overview}</p>
                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.tools.map(tool => {
                            const Icon = projectToolIcons[tool] || Database;
                            return (
                                <span key={tool} className="flex items-center gap-1.5 bg-charcoal-bg text-text-muted px-3 py-1 rounded text-xs border border-white/5">
                                    <Icon size={12}/> {tool}
                                </span>
                            );
                        })}
                    </div>
                </div>
                <div className="bg-charcoal-bg rounded-lg overflow-hidden flex items-center justify-center text-text-muted h-64 border border-white/5 relative group">
                    {project.featuredImage ? (
                        <img 
                            src={project.featuredImage} 
                            alt={`${project.title} dashboard project preview`} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    ) : (
                        <div className="text-center p-4">
                            <p>Project Preview Coming Soon</p>
                        </div>
                    )}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mt-12 pt-12 border-t border-white/5">
                <div>
                    <h4 className="font-medium text-off-white mb-2">Problem</h4>
                    <p className="text-text-muted text-sm">{project.problem}</p>
                </div>
                <div>
                    <h4 className="font-medium text-off-white mb-2">Outcome</h4>
                    <p className="text-text-muted text-sm">{project.outcome}</p>
                </div>
              </div>
              
              <div className="flex gap-4 mt-12">
                <Link
                  to={`/projects/${project.id}`}
                  className="inline-block bg-charcoal-bg text-off-white px-6 py-3 rounded border border-muted-rose hover:bg-muted-rose hover:text-charcoal-bg transition font-medium hover:-translate-y-1"
                >
                  See Case Study
                </Link>
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-block bg-charcoal-bg text-off-white px-6 py-3 rounded border border-muted-rose hover:bg-muted-rose hover:text-charcoal-bg transition font-medium hover:-translate-y-1"
                  >
                    View Project
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;
