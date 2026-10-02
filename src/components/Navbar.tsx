const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-charcoal-bg/90 backdrop-blur-sm border-b border-white/5 z-50 px-6 py-4 transition-colors">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
            <span className="font-medium text-lg text-off-white tracking-tight">Obasi Sarah</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-text-muted font-medium text-sm">
          <a href="#about" className="hover:text-muted-rose transition">About</a>
          <a href="#skills" className="hover:text-muted-rose transition">Skills</a>
          <a href="#projects" className="hover:text-projects transition">Projects</a>
          <a href="#contact" className="hover:text-muted-rose transition">Contact</a>
          <a href="#contact" className="bg-muted-rose text-charcoal-bg px-5 py-2 rounded text-sm font-medium hover:bg-soft-blush transition">Let's Connect</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

