const About = () => {
  return (
    <section id="about" className="px-6 py-20 md:py-28 bg-charcoal-bg">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="text-sm font-medium text-muted-rose tracking-widest uppercase mb-3">About Me</h2>
          <h3 className="text-4xl font-light text-off-white mb-6">Analytical & Passionate</h3>
          <div className="text-text-muted leading-relaxed text-lg space-y-4">
            <p>
              I am a Finance Data Analyst with a strong foundation in Economics, driven by a passion for transforming financial and operational data into clear, actionable insights. With over two years of experience spanning finance, accounting, and data analytics, I specialize in leveraging tools like Microsoft Excel, Power Query, and Power BI to optimize data-driven decision-making.
            </p>
            <p>
              Currently serving as a Junior Accountant Executive at New City University, I manage financial documents, perform budget analysis, and reconcile bank statements. My analytical journey is further supported by a B.Sc. in Economics (Second Class Upper Division), which bridges my financial expertise with advanced data visualization and cleaning techniques. I am dedicated to bridging the gap between raw data and strategic business value.
            </p>
          </div>
        </div>
        <div className="bg-charcoal-card p-8 rounded border border-white/5">
            <h4 className="font-medium text-off-white text-xl mb-6">Profile Snapshot</h4>
            <div className="space-y-4 text-text-muted">
                <div className="flex flex-wrap justify-between gap-x-4 gap-y-1 border-b border-white/10 pb-3">
                    <span className="text-sm">Role</span>
                    <span className="font-medium text-off-white text-right">Finance Data Analyst</span>
                </div>
                <div className="flex flex-wrap justify-between gap-x-4 gap-y-1 border-b border-white/10 pb-3">
                    <span className="text-sm">Position</span>
                    <span className="font-medium text-off-white text-right">Jr. Accountant Executive</span>
                </div>
                <div className="flex flex-wrap justify-between gap-x-4 gap-y-1 border-b border-white/10 pb-3">
                    <span className="text-sm">Experience</span>
                    <span className="font-medium text-off-white text-right">2+ Years</span>
                </div>
                <div className="flex flex-wrap justify-between gap-x-4 gap-y-1 border-b border-white/10 pb-3">
                    <span className="text-sm">Education</span>
                    <span className="font-medium text-off-white text-right">B.Sc. Economics (2:1)</span>
                </div>
                <div className="flex flex-wrap justify-between gap-x-4 gap-y-1 border-b border-white/10 pb-3">
                    <span className="text-sm">Core Focus</span>
                    <span className="font-medium text-off-white text-right">Finance • Data Analytics • BI</span>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
export default About;
