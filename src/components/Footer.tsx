const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] text-off-white py-16 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-xl font-bold tracking-tight text-white mb-2">OBASI SARAH</h2>
        <p className="text-muted-rose font-medium mb-4">Finance Data Analyst</p>
        <p className="text-text-muted mb-12">Turning data into insights. Turning insights into better decisions.</p>
        
        <div className="pt-8 border-t border-white/10 text-text-muted text-sm">
          <p>&copy; {currentYear} Obasi Sarah. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
