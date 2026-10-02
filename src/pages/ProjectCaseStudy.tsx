import { useParams, Link } from 'react-router-dom';
import { portfolioData, type Project } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, ChevronRight } from 'lucide-react';

const ProjectCaseStudy = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = portfolioData.projects.find(p => p.id === projectId) as Project | undefined;

  if (!project) {
    return <div className="p-20 text-center">Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-charcoal-bg text-off-white">
      {/* Navigation */}
      <nav className="p-6">
        <Link to="/" className="flex items-center text-muted-rose hover:text-off-white transition">
          <ArrowLeft className="mr-2" size={20} /> Back to Projects
        </Link>
      </nav>

      {/* Hero */}
      <section className="px-6 py-12 md:py-20 text-center">
        <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-muted-rose font-medium text-sm tracking-widest uppercase mb-4 block">
          {project.category}
        </motion.span>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-6xl font-light mb-6">
          {project.title}
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-text-muted mb-12 max-w-2xl mx-auto">
          {project.shortDescription}
        </motion.p>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }} className="max-w-4xl mx-auto">
            <img src={project.featuredImage} alt={project.title} className="rounded-2xl border border-white/5 shadow-2xl" />
        </motion.div>
      </section>

      {/* Overview & Metadata */}
      <section className="px-6 py-20 bg-charcoal-card border-y border-white/5">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light mb-8">Project Overview</h2>
            <p className="text-text-muted text-lg leading-relaxed mb-8">{project.overview}</p>
            <div className="grid md:grid-cols-3 gap-6 bg-charcoal-bg p-6 rounded-lg border border-white/5">
                <div><h4 className="text-muted-rose font-medium text-sm mb-1">Project Type</h4><p>{project.category}</p></div>
                <div><h4 className="text-muted-rose font-medium text-sm mb-1">Tool</h4><p>{project.tools[0]}</p></div>
                <div><h4 className="text-muted-rose font-medium text-sm mb-1">Focus</h4><p>{project.title}</p></div>
            </div>
        </div>
      </section>
      
      {/* Business Problem */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-light mb-12 text-center">The Business Problem</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {project.businessQuestions.map((q, idx) => (
                    <div key={idx} className="bg-charcoal-card p-6 rounded-lg border border-white/5 hover:border-muted-rose/50 transition">
                        <h4 className="font-medium text-muted-rose mb-4">{q.category}</h4>
                        <ul className="text-text-muted text-sm space-y-2">
                            {q.questions.map((question, qIdx) => <li key={qIdx}>{question}</li>)}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
      </section>
      
      {/* Analysis Process */}
      <section className="px-6 py-20 bg-charcoal-card border-y border-white/5">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-light mb-12 text-center">Analysis Process</h2>
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                {project.process.map((step, idx) => (
                    <div key={idx} className="flex-1 text-center">
                        <div className="text-4xl font-light text-muted-rose mb-2">{step.number}</div>
                        <h4 className="font-medium mb-2">{step.title}</h4>
                        <p className="text-text-muted text-sm">{step.description}</p>
                        {idx < project.process.length - 1 && <ChevronRight className="hidden md:block mx-auto mt-4 text-white/20" />}
                    </div>
                ))}
            </div>
        </div>
      </section>
      
      {/* Key Insights */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-light mb-12 text-center">Key Insights</h2>
            <div className="grid md:grid-cols-2 gap-6">
                {project.insights.map((insight, idx) => (
                    <div key={idx} className="bg-charcoal-card p-8 rounded-lg border border-white/5">
                        <h4 className="text-xl font-medium mb-4">{insight.title}</h4>
                        <p className="text-text-muted mb-4">{insight.description}</p>
                        <p className="text-muted-rose text-sm font-medium">Implication: {insight.implication}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 bg-charcoal-card border-t border-white/5 text-center">
        <h2 className="text-3xl font-light mb-8">Want to explore the full project?</h2>
        <div className="flex justify-center gap-4">
            {project.liveUrl ? (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="bg-muted-rose text-charcoal-bg px-8 py-3 rounded font-medium hover:bg-white transition flex items-center">
                    View Project <ExternalLink className="ml-2" size={18} />
                </a>
            ) : (
                <button disabled className="bg-charcoal-bg text-text-muted px-8 py-3 rounded font-medium cursor-not-allowed">
                    Project link coming soon
                </button>
            )}
            <Link to="/" className="bg-charcoal-bg text-off-white px-8 py-3 rounded font-medium hover:bg-white/10 transition">
                Back to Projects
            </Link>
        </div>
      </section>
    </div>
  );
};

export default ProjectCaseStudy;
