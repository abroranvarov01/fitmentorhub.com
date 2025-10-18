export function Footer() {
  return (
    <footer className="bg-[#0D0D0D] border-t border-[#2A2A2A] py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <h3 className="text-2xl font-[family-name:var(--font-montserrat)] font-extrabold">
              <span className="text-[#00E0A4]">Fit</span>
              <span className="text-[#F5F5F5]">MentorHub</span>
            </h3>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-[#F5F5F5]/70">
            <a href="#" className="hover:text-[#00E0A4] transition-colors duration-300">
              Home
            </a>
            <a href="#" className="hover:text-[#00E0A4] transition-colors duration-300">
              Programs
            </a>
            <a href="#" className="hover:text-[#00E0A4] transition-colors duration-300">
              Mentors
            </a>
            <a href="#" className="hover:text-[#00E0A4] transition-colors duration-300">
              Blog
            </a>
            <a href="#" className="hover:text-[#00E0A4] transition-colors duration-300">
              Privacy
            </a>
            <a href="#" className="hover:text-[#00E0A4] transition-colors duration-300">
              Terms
            </a>
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-[#2A2A2A] text-center text-[#F5F5F5]/60">
          <p>© 2025 FitMentorHub.com — Your Personal Fitness Revolution.</p>
        </div>
      </div>
    </footer>
  )
}
