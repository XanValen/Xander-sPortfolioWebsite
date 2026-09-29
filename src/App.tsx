import {useState, useEffect} from 'react';

const NAV_LINKS = ["About", "Experience", "Education", "Skills", "Projects", "Contact"];

const EXPERIENCE = [ 
 {
  role: "Student Manager",
  company: "Sudexo",
  location: "Oneonta, NY",
  period: "August 2023 - May 2027",
  highlights: [],
  description: "supervised and coordinated daily dining hall operations during assigned shifts. Ensured compliance with food safety, sanitation, and campus health regulations."
 },
  {
  role: "Desktop Support Intern",
  company: "NYCM Insurance",
  location: "Edmeston, NY",
  period: "May 2026 - August 2026",
  highlights: [],
  description: "Resolved IT tickets across hardware, software, and connectivity issues. Assisted in the deployment and maintenance of computer systems, ensuring optimal performance and security."
 }
]

const EDUCATION = [
 {
  degree: "Bachelor of Science in Computer Science",
  institution: "SUNY Oneonta",
  location: "Oneonta, NY",
  grade: "3.1 GPA",
  period: "August 2023 - May 2027",
  notes: "Pursuing a comprehensive curriculum in computer science, focusing on software development, algorithms, and data structures. Engaged in various projects and research initiatives to enhance practical skills."
 }
]

const SKILLS = [
{
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "HTML", "CSS", "Tailwind CSS"]
},
{
    category: "Backend",
    items: ["Node.js", "Express.js", "MongoDB", "SQL"]
},
{
    category: "Infrastructure",
    items: ["GIT"]
}
]

const PROJECTS = [
{
    id: "01",
    name: "Spotify Playlist Generator",
    tagline: "",
    description: "A web application that generates personalized Spotify playlists based on user preferences and listening history. Utilizes the Spotify API to fetch data and create dynamic playlists.",
    stack: ["React", "Node.js", "Spotify API"],
    image: "./assets/images.jpg",
    year: "2026",
    github: "https://github.com/XanValen/SpotifyPlaylistBuilder",
    link: "PlaceHolder"
}
]

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [formSent, setFormSent] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.35 }
    );
    document.querySelectorAll("section[id]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <div className="min-h-full bg-[#080808] text-[#efefef]">
      {/* ── Nav ── */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#1e1e1e] bg-[#080808]/90 backdrop-blur-md">
        <nav className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <button
            onClick={() => scrollTo("hero")}
            className="font-['Barlow'] font-black text-lg tracking-tight hover:text-[#7c3aed] transition-colors duration-200"
          >
            JD<span className="text-[#7c3aed]">.</span>
          </button>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <button
                  onClick={() => scrollTo(link.toLowerCase())}
                  className={`font-['JetBrains_Mono'] text-xs uppercase tracking-widest transition-colors duration-200 ${
                    activeSection === link.toLowerCase()
                      ? "text-[#7c3aed]"
                      : "text-[#666] hover:text-[#efefef]"
                  }`}
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-px bg-[#efefef] transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-px bg-[#efefef] transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-px bg-[#efefef] transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-[#1e1e1e] bg-[#0d0d0d] px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link.toLowerCase())}
                className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-left text-[#666] hover:text-[#7c3aed] transition-colors"
              >
                {link}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* ── Hero ── */}
      <section id="hero" className="relative min-h-screen flex flex-col justify-end pb-24 pt-32 px-6 max-w-6xl mx-auto">
        {/* Photo placeholder */}
        <div className="hidden md:block absolute top-24 right-6">
          <div className="relative w-36 h-36 border border-dashed border-[#7c3aed]/50 bg-[#0f0a1a] flex flex-col items-center justify-center gap-2 group">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span className="font-['JetBrains_Mono'] text-[9px] text-[#7c3aed]/60 uppercase tracking-widest text-center leading-tight px-2">
              Your<br />photo here
            </span>
            <div className="absolute inset-0 border border-[#7c3aed]/0 group-hover:border-[#7c3aed]/30 transition-colors duration-300" />
          </div>
          <div className="font-['JetBrains_Mono'] text-[8px] text-[#444] uppercase tracking-widest text-center mt-2">
            Replace src
          </div>
        </div>

        <div className="grid md:grid-cols-[1fr_auto] md:items-end gap-8">
          <div>
            <p className="font-['JetBrains_Mono'] text-xs text-[#7c3aed] tracking-widest uppercase mb-6">
              Available for work · Based in Berlin
            </p>
            <h1 className="font-['Barlow'] font-black text-[clamp(3.5rem,10vw,9rem)] leading-[0.9] tracking-tighter text-[#efefef] uppercase mb-8">
              Jordan<br />
              <span className="text-[#7c3aed]">Davies</span>
            </h1>
            <p className="text-lg text-[#999] max-w-xl leading-relaxed mb-10">
              Full-stack developer crafting fast, precise interfaces and resilient APIs.
              Six years shipping production software — from early-stage startups to distributed teams at scale.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("projects")}
                className="font-['Barlow'] font-semibold px-7 py-3 bg-[#7c3aed] text-[#080808] text-sm uppercase tracking-wider hover:bg-[#8b5cf6] transition-colors duration-200"
              >
                View Work
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="font-['Barlow'] font-semibold px-7 py-3 border border-[#333] text-[#efefef] text-sm uppercase tracking-wider hover:border-[#7c3aed] hover:text-[#7c3aed] transition-colors duration-200"
              >
                Get in Touch
              </button>
            </div>
          </div>

          {/* Stats column */}
          <div className="hidden md:flex flex-col gap-6 pb-2 border-l border-[#222] pl-10">
            {[
              { value: "6+", label: "Years exp." },
              { value: "40+", label: "Projects shipped" },
              { value: "12", label: "Open source repos" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-['Barlow'] font-black text-4xl text-[#7c3aed] leading-none">{stat.value}</div>
                <div className="font-['JetBrains_Mono'] text-[10px] text-[#555] uppercase tracking-widest mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll cue */}
        <div className="mt-20 flex items-center gap-3 text-[#333]">
          <div className="w-12 h-px bg-[#333]" />
          <span className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest">Scroll</span>
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className="py-32 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1.2fr] gap-16 items-start">
          <div>
            <Label>01 — About</Label>
            <h2 className="font-['Barlow'] font-black text-5xl md:text-6xl uppercase leading-tight tracking-tighter mt-6 mb-8">
              Building things<br />that <span className="text-[#7c3aed]">last.</span>
            </h2>
            <div className="w-full aspect-[4/3] overflow-hidden bg-[#111]">
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=700&h=525&fit=crop&auto=format"
                alt="Developer at work, laptop with code on screen"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          <div className="pt-4 md:pt-20">
            <p className="text-[#999] text-base leading-relaxed mb-6">
              I'm Jordan Davies, a full-stack developer with a focus on frontend performance and API design.
              I care deeply about the gap between design intent and engineering output — the invisible work that
              makes software feel effortless.
            </p>
            <p className="text-[#999] text-base leading-relaxed mb-6">
              Previously at <span className="text-[#efefef]">Tempo</span> (Series B, YC W21), where I led the
              frontend rewrite that reduced initial load time by 68%. Before that, consultant to product teams
              across fintech and health-tech.
            </p>
            <p className="text-[#999] text-base leading-relaxed mb-10">
              When I'm not writing code, I'm contributing to open-source, reading about compilers, or cycling
              through the Brandenburg countryside.
            </p>

            <div className="grid grid-cols-2 gap-px bg-[#1e1e1e] border border-[#1e1e1e]">
              {[
                { label: "Speciality", value: "Full-stack / Frontend" },
                { label: "Stack", value: "React, Go, Postgres" },
                { label: "Availability", value: "Q4 2026" },
                { label: "Location", value: "Berlin, DE (CET)" },
              ].map((item) => (
                <div key={item.label} className="bg-[#080808] px-5 py-4">
                  <div className="font-['JetBrains_Mono'] text-[10px] text-[#555] uppercase tracking-widest mb-1">{item.label}</div>
                  <div className="text-sm text-[#efefef]">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Experience ── */}
      <section id="experience" className="py-32 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-[280px_1fr] gap-12 md:gap-20 mb-16">
            <div>
              <Label>02 — Experience</Label>
              <h2 className="font-['Barlow'] font-black text-5xl md:text-6xl uppercase leading-tight tracking-tighter mt-6">
                Where<br />I've<br />worked.
              </h2>
            </div>
            <p className="self-end text-[#666] max-w-lg leading-relaxed">
              Six years across startups, agencies, and consultancy — shipping production software in cross-functional teams.
            </p>
          </div>

          <div className="space-y-px bg-[#1a1a1a] border border-[#1a1a1a]">
            {EXPERIENCE.map((job, i) => (
              <div key={i} className="bg-[#080808] grid md:grid-cols-[220px_1fr] gap-0">
                <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-[#1a1a1a]">
                  <div className="font-['JetBrains_Mono'] text-[10px] text-[#7c3aed] uppercase tracking-widest mb-3">{job.period}</div>
                  <div className="font-['Barlow'] font-black text-xl uppercase tracking-tight mb-1">{job.company}</div>
                  <div className="font-['JetBrains_Mono'] text-[10px] text-[#555] uppercase tracking-widest">{job.location}</div>
                </div>
                <div className="p-6 md:p-8">
                  <div className="font-['Barlow'] font-semibold text-base mb-3 text-[#efefef]">{job.role}</div>
                  <p className="text-sm text-[#666] leading-relaxed mb-5">{job.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {job.highlights.map((h) => (
                      <span key={h} className="font-['JetBrains_Mono'] text-[10px] px-2.5 py-1 border border-[#222] text-[#555] uppercase tracking-wider">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Education ── */}
      <section id="education" className="py-32 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-[280px_1fr] gap-12 md:gap-20 mb-16">
            <div>
              <Label>03 — Education</Label>
              <h2 className="font-['Barlow'] font-black text-5xl md:text-6xl uppercase leading-tight tracking-tighter mt-6">
                How<br />I<br />learned.
              </h2>
            </div>
            <p className="self-end text-[#666] max-w-lg leading-relaxed">
              Formal education grounded in computer science fundamentals, extended with professional certifications along the way.
            </p>
          </div>

          <div className="space-y-px bg-[#1a1a1a] border border-[#1a1a1a]">
            {EDUCATION.map((item, i) => (
              <div key={i} className="bg-[#080808] grid md:grid-cols-[220px_1fr] gap-0">
                <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-[#1a1a1a]">
                  <div className="font-['JetBrains_Mono'] text-[10px] text-[#7c3aed] uppercase tracking-widest mb-3">{item.period}</div>
                  <div className="font-['Barlow'] font-black text-xl uppercase tracking-tight mb-1">{item.institution}</div>
                  <div className="font-['JetBrains_Mono'] text-[10px] text-[#555] uppercase tracking-widest">{item.grade}</div>
                </div>
                <div className="p-6 md:p-8">
                  <div className="font-['Barlow'] font-semibold text-base mb-3 text-[#efefef]">{item.degree}</div>
                  <p className="text-sm text-[#666] leading-relaxed">{item.notes}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section id="skills" className="py-32 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-[280px_1fr] gap-12 md:gap-20 mb-16">
            <div>
              <Label>04 — Skills</Label>
              <h2 className="font-['Barlow'] font-black text-5xl md:text-6xl uppercase leading-tight tracking-tighter mt-6">
                The<br />toolkit.
              </h2>
            </div>
            <p className="self-end text-[#666] max-w-lg leading-relaxed">
              Technologies I reach for first — chosen for correctness, not trend.
              Every item here is something I've used in production.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1a1a1a] border border-[#1a1a1a]">
            {SKILLS.map((group) => (
              <div key={group.category} className="bg-[#080808] p-6">
                <div className="font-['JetBrains_Mono'] text-[10px] text-[#7c3aed] uppercase tracking-widest mb-5">
                  {group.category}
                </div>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-[#999] hover:text-[#efefef] transition-colors group cursor-default"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#333] group-hover:bg-[#7c3aed] transition-colors flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section id="projects" className="py-32 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-[280px_1fr] gap-12 md:gap-20 mb-16">
            <div>
              <Label>05 — Projects</Label>
              <h2 className="font-['Barlow'] font-black text-5xl md:text-6xl uppercase leading-tight tracking-tighter mt-6">
                Featured<br />work.
              </h2>
            </div>
            <p className="self-end text-[#666] max-w-lg leading-relaxed">
              A selection of projects that showcase the range — from real-time infrastructure
              to design systems to developer tooling.
            </p>
          </div>

          <div className="space-y-px bg-[#1a1a1a] border border-[#1a1a1a]">
            {PROJECTS.map((project) => (
              <article
                key={project.id}
                className="bg-[#080808] grid md:grid-cols-[1fr_1.4fr] gap-0 group"
              >
                <div className="overflow-hidden bg-[#111]">
                  <img
                    src={project.image}
                    alt={`${project.name} — ${project.tagline}`}
                    className="w-full h-60 md:h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-between border-l border-[#1a1a1a]">
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <span className="font-['JetBrains_Mono'] text-[10px] text-[#555] uppercase tracking-widest">{project.year}</span>
                      <span className="font-['JetBrains_Mono'] text-[10px] text-[#7c3aed] tracking-widest">{project.id}</span>
                    </div>
                    <h3 className="font-['Barlow'] font-black text-4xl uppercase tracking-tight mb-1">{project.name}</h3>
                    <p className="font-['JetBrains_Mono'] text-xs text-[#555] mb-6">{project.tagline}</p>
                    <p className="text-sm text-[#777] leading-relaxed mb-8">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-10">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="font-['JetBrains_Mono'] text-[10px] px-2.5 py-1 border border-[#222] text-[#555] uppercase tracking-wider"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.link}
                      className="font-['Barlow'] font-semibold text-sm uppercase tracking-wider text-white bg-[#7c3aed] px-5 py-2.5 hover:bg-[#8b5cf6] transition-colors duration-200"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      className="font-['Barlow'] font-semibold text-sm uppercase tracking-wider border border-[#333] px-5 py-2.5 hover:border-[#7c3aed] hover:text-[#7c3aed] transition-colors duration-200"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="py-32 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[280px_1fr] gap-12 md:gap-20">
          <div>
            <Label>06 — Contact</Label>
            <h2 className="font-['Barlow'] font-black text-5xl md:text-6xl uppercase leading-tight tracking-tighter mt-6 mb-8">
              Let's<br />talk.
            </h2>
            <p className="text-[#666] text-sm leading-relaxed mb-8">
              Open to freelance projects, full-time roles, and interesting collaborations.
              I typically respond within 24 hours.
            </p>
            <div className="space-y-4">
              {[
                { label: "Email", value: "jordan@davies.dev", href: "mailto:jordan@davies.dev" },
                { label: "GitHub", value: "github.com/jordandavies", href: "#" },
                { label: "LinkedIn", value: "linkedin.com/in/jordandavies", href: "#" },
              ].map((link) => (
                <div key={link.label}>
                  <div className="font-['JetBrains_Mono'] text-[10px] text-[#555] uppercase tracking-widest mb-0.5">{link.label}</div>
                  <a
                    href={link.href}
                    className="text-sm text-[#999] hover:text-[#7c3aed] transition-colors duration-200"
                  >
                    {link.value}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div>
            {formSent ? (
              <div className="h-full flex flex-col items-start justify-center py-20">
                <div className="font-['JetBrains_Mono'] text-[10px] text-[#7c3aed] uppercase tracking-widest mb-4">Message sent</div>
                <p className="font-['Barlow'] font-black text-4xl uppercase">Got it. I'll be in touch.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-px bg-[#1a1a1a] border border-[#1a1a1a]">
                {[
                  { id: "name", label: "Name", type: "text", placeholder: "Your name" },
                  { id: "email", label: "Email", type: "email", placeholder: "your@email.com" },
                ].map((field) => (
                  <div key={field.id} className="bg-[#080808]">
                    <label
                      htmlFor={field.id}
                      className="block font-['JetBrains_Mono'] text-[10px] text-[#555] uppercase tracking-widest px-6 pt-5 pb-1"
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      type={field.type}
                      required
                      placeholder={field.placeholder}
                      value={formState[field.id as keyof typeof formState]}
                      onChange={(e) => setFormState({ ...formState, [field.id]: e.target.value })}
                      className="w-full bg-transparent px-6 pb-5 text-sm text-[#efefef] placeholder-[#333] outline-none focus:text-[#efefef]"
                    />
                  </div>
                ))}
                <div className="bg-[#080808]">
                  <label
                    htmlFor="message"
                    className="block font-['JetBrains_Mono'] text-[10px] text-[#555] uppercase tracking-widest px-6 pt-5 pb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-transparent px-6 pb-5 text-sm text-[#efefef] placeholder-[#333] outline-none resize-none"
                  />
                </div>
                <div className="bg-[#080808] px-6 py-6">
                  <button
                    type="submit"
                    className="font-['Barlow'] font-semibold text-sm uppercase tracking-wider bg-[#7c3aed] text-[#080808] px-8 py-3 hover:bg-[#8b5cf6] transition-colors duration-200"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-[#1a1a1a] px-6 py-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-['Barlow'] font-black text-lg">
            JD<span className="text-[#7c3aed]">.</span>
          </span>
          <span className="font-['JetBrains_Mono'] text-[10px] text-[#444] uppercase tracking-widest">
            © 2026 Jordan Davies — All rights reserved
          </span>
          <div className="flex gap-6">
            {["GitHub", "LinkedIn", "Resume"].map((item) => (
              <a
                key={item}
                href="#"
                className="font-['JetBrains_Mono'] text-[10px] text-[#444] uppercase tracking-widest hover:text-[#7c3aed] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-4 h-px bg-[#7c3aed]" />
      <span className="font-['JetBrains_Mono'] text-[10px] text-[#7c3aed] uppercase tracking-widest">{children}</span>
    </div>
  );
}
