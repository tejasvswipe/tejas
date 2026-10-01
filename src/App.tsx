// portfolio
import { useState } from 'react';

type Project = {
  number: string;
  name: string;
  eyebrow: string;
  description: string;
  stack: string[];
  href: string;
  accent: string;
};

const projects: Project[] = [
  {
    number: '01',
    name: 'Food Cop AI',
    eyebrow: 'AI / food safety',
    description: 'An ingredient-label inspector that uses Llama through Groq to flag risky additives against FSSAI and EFSA rules — and explain the verdict clearly.',
    stack: ['Python', 'FastAPI', 'Llama', 'Groq'],
    href: 'https://github.com/tejasvswipe/food-cop.ai',
    accent: 'coral',
  },
  {
    number: '02',
    name: 'tidy-up',
    eyebrow: 'Productivity tool',
    description: 'A focus companion with anxiety-fighting tools, timers, reset rituals, and small systems for getting unstuck and moving forward.',
    stack: ['TypeScript', 'Vite', 'React', 'Express'],
    href: 'https://github.com/tejasvswipe/tidy-up',
    accent: 'pink',
  },
  {
    number: '03',
    name: 'ewaste-revolt-ai',
    eyebrow: 'Experiment / prototype',
    description: 'An e-waste prototype that connects responsible disposal with the possibilities of applied AI.',
    stack: ['TypeScript', 'AI', 'Climate-tech'],
    href: 'https://github.com/tejasvswipe/ewaste-revolt-ai',
    accent: 'yellow',
  },
];

const skillGroups = [
  { label: 'Build', items: ['Python', 'JavaScript', 'React.js', 'Next.js', 'FastAPI', 'REST APIs', 'Tailwind CSS', 'Git & GitHub'] },
  { label: 'Think', items: ['LLM integration', 'Prompt engineering', 'AI product development', 'Groq API', 'Llama', 'Ollama', 'Agentic workflows'] },
  { label: 'Move', items: ['Product development', 'MVP development', 'Market research', 'Pitch decks', 'Startup strategy', 'B2B product design'] },
];

const awards = [
  ['Winner', 'Global Quantum Mechanics Competition'],
  ['Winner', 'Best Out of Waste Competition'],
  ['Awardee', 'National + regional Mathematics Olympiads — IOQM'],
  ['Participant', '1M1B Changemakers World Cup 2026'],
  ['Participant', 'Youth Ideathon + Blue Ocean Entrepreneurship Competition'],
  ['Community', 'Divya Jyoti Jagriti Sansthan, India'],
  ['Participant', 'Divya Jyoti Jagriti Sansthan Cultural Fest'],
  ['Participant', 'StarDance NASA'],
];

const languages = [
  ['Professional', 'English'],
  ['Native / fluent', 'Hindi'],
  ['Basic', 'Sanskrit'],
  ['Basic', 'German'],
];

function Arrow({ external = false }: { external?: boolean }) {
  return <span className="arrow" aria-hidden="true">{external ? '↗' : '↓'}</span>;
}

function HeroCollage() {
  return (
    <div className="hero-collage" aria-label="Creative references">
      <div className="collage-card ribbon-card">
        <svg viewBox="0 0 420 120" role="img" aria-label="Hack Club ribbon">
          <path d="M32 64c27-22 55-34 96-29 22 2 33 8 48 14 11 5 25 6 38 5 42-4 82-17 138 4 21 8 30 15 48 30l-20 24c-19-7-34-9-57-8-39 2-75 18-120 10-21-4-30-14-53-20-24-7-47-5-66 2L32 64Z" fill="#f4f3f1"/>
          <text x="210" y="74" textAnchor="middle" fontSize="34" fontFamily="sans-serif" fontWeight="700" fill="#111111">HACK CLUB</text>
        </svg>
      </div>

      <div className="collage-card mit-card" aria-label="MIT wordmark">
        <div className="mit-mark">
          <span className="mit-block tall" />
          <span className="mit-block" />
          <span className="mit-block short" />
          <span className="mit-block gray" />
        </div>
        <div className="mit-copy">
          <span>Massachusetts</span>
          <span>Institute of</span>
          <span>Technology</span>
        </div>
      </div>

      <div className="collage-card cat-card" aria-label="Cat portrait">
        <svg viewBox="0 0 260 240" role="img" aria-label="Cat with glasses">
          <defs>
            <linearGradient id="fur" x1="0" x2="1">
              <stop offset="0%" stopColor="#d9d8d4" />
              <stop offset="100%" stopColor="#b8b2ad" />
            </linearGradient>
          </defs>
          <path d="M75 140c-18-40-29-70 18-98 47-28 111-23 144 20 31 40 15 116-39 128-45 10-87-9-123-50Z" fill="url(#fur)"/>
          <path d="M110 55 96 20l31 27 12-28 13 31 30-25-12 39Z" fill="#d8d4d2"/>
          <path d="M129 65h22v16h-22z" fill="#454545" opacity=".45"/>
          <path d="M80 112c12-44 81-41 104 2-18 10-35 16-55 16-22 0-38-5-49-18Z" fill="#f8f8f7"/>
          <g>
            <rect x="46" y="82" width="64" height="48" rx="18" fill="#f8f8f8"/>
            <rect x="140" y="82" width="64" height="48" rx="18" fill="#f8f8f8"/>
            <circle cx="73" cy="108" r="18" fill="#111"/>
            <circle cx="170" cy="108" r="18" fill="#111"/>
            <circle cx="73" cy="108" r="7" fill="#efefef"/>
            <circle cx="170" cy="108" r="7" fill="#efefef"/>
          </g>
          <path d="M120 126c-10 7-20 11-33 12 3 13 14 22 29 21 18-1 30-16 29-30-9 1-16 0-25-3Z" fill="#f1efed"/>
          <path d="M98 136c12 10 21 14 34 14 12 0 22-4 33-14" fill="none" stroke="#2f2f2f" strokeWidth="4" strokeLinecap="round"/>
          <path d="M100 144c10 9 25 14 40 14 15 0 30-6 42-16" fill="none" stroke="#808080" strokeWidth="3" strokeLinecap="round" opacity=".5"/>
          <path d="M118 154c-10 7-17 18-22 31" fill="none" stroke="#5c5c5c" strokeWidth="5" strokeLinecap="round"/>
          <path d="M160 154c11 10 18 20 23 30" fill="none" stroke="#5c5c5c" strokeWidth="5" strokeLinecap="round"/>
        </svg>
      </div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'AI', 'Climate-tech', 'Tools'];
  const visibleProjects = activeFilter === 'All'
    ? projects
    : projects.filter((project) => {
        if (activeFilter === 'AI') return project.stack.some((tag) => ['AI', 'Llama', 'Groq'].includes(tag)) || project.name === 'Food Cop AI';
        if (activeFilter === 'Climate-tech') return project.name.toLowerCase().includes('revolt') || project.stack.includes('Climate-tech') || project.stack.includes('Sustainability');
        return project.name === 'tidy-up';
      });

  return (
    <div className="site-shell">
      <div className="topline"><span>TEJAS / 2026</span><span>THEORY → TOOL → IMPACT</span></div>

      <header className="nav-wrap">
        <a className="brand" href="#top" aria-label="Tejas home">
          <span className="brand-mark">T<span>/</span></span>
          <span>tejas<span className="brand-dot">.</span></span>
        </a>
        <button className="menu-toggle" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? 'Close' : 'Menu'} <span className="menu-line" />
        </button>
        <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Primary navigation">
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#thinking" onClick={() => setMenuOpen(false)}>Thinking</a>
          <a className="nav-cta" href="https://github.com/tejasvswipe" target="_blank" rel="noreferrer">GitHub <Arrow external /></a>
        </nav>
      </header>

      <main id="top">
        <HeroCollage />

        <section className="hero section-pad">
          <div className="hero-copy">
            <p className="kicker"><span className="kicker-dot" /> Independent builder / researcher / feminist / activist</p>
            <h1>Ideas with<br /><em>somewhere</em><br />to go.</h1>
            <p className="hero-intro">I’m Tejas — building at the edge of AI, software, fundamental questions, and a more humane future.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">See the work <Arrow /></a>
              <a className="text-link" href="#about">A little more about me <Arrow /></a>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="orbit orbit-one"><span /></div>
            <div className="orbit orbit-two"><span /></div>
            <div className="orbit orbit-three"><span /></div>
            <div className="hero-sticker">CURIOUS<br /><span>BY DEFAULT</span></div>
            <div className="hero-coordinate">20° 35′ N<br />72° 56′ E</div>
            <div className="hero-slab"><span className="slab-index">T/</span><span>the work<br />is the point</span></div>
          </div>
        </section>

        <section className="ticker" aria-label="Areas of focus">
          <div className="ticker-track"><span>AI FOR EVERYDAY LIFE</span><b>✳</b><span>GRAVITATION THEORY</span><b>✳</b><span>DE BROGLIE HYPOTHESIS</span><b>✳</b><span>HUMAN RIGHTS</span><b>✳</b><span>FEMINIST PRACTICE</span><b>✳</b><span>AI FOR EVERYDAY LIFE</span></div>
        </section>

        <section className="about section-pad" id="about">
          <div className="section-label"><span>01</span><span>About / context</span></div>
          <div className="about-grid">
            <div className="about-lede"><p className="display-copy">I like the space where a hard question becomes a useful thing.</p><p className="body-copy">My resume traces a path through independent AI and software building, Llama/Groq food-safety work with Python and FastAPI, and student entrepreneurship across prototypes, markets, and pitch decks. I’m also a feminist and human-rights activist, and part of Divya Jyoti Jagriti Sansthan, India, where I participated in its cultural fest — because the systems we make should be accountable to the people inside them.</p></div>
            <div className="about-note"><span className="note-pin">↗</span><p>Currently exploring</p><strong>gravitation theory<br />+ the de Broglie hypothesis</strong><small>with a notebook full of arrows, questions, and a healthy suspicion of easy answers.</small></div>
          </div>
          <div className="stats-row"><div><strong>03</strong><span>public projects<br />in the lab</span></div><div><strong>03</strong><span>ways of working:<br />build / think / move</span></div><div><strong>∞</strong><span>questions worth<br />following</span></div></div>
        </section>

        <section className="work section-pad" id="work">
          <div className="section-heading"><div className="section-label"><span>02</span><span>Selected work / GitHub</span></div><a className="text-link" href="https://github.com/tejasvswipe" target="_blank" rel="noreferrer">Open the whole lab <Arrow external /></a></div>
          <div className="work-intro"><h2>A few things<br /><em>in motion.</em></h2><p>From food safety to e-waste to the small systems that help us focus, these projects are experiments in making ideas tangible.</p></div>
          <div className="filters" role="group" aria-label="Filter projects">{filters.map((filter) => <button key={filter} className={activeFilter === filter ? 'filter active' : 'filter'} onClick={() => setActiveFilter(filter)}>{filter}</button>)}</div>
          <div className="project-grid">{visibleProjects.map((project) => <a className={`project-card ${project.accent}`} key={project.name} href={project.href} target="_blank" rel="noreferrer"><div className="project-top"><span className="project-number">{project.number}</span><Arrow external /></div><div className="project-body"><p className="project-eyebrow">{project.eyebrow}</p><h3>{project.name}</h3><p>{project.description}</p></div><div className="project-footer"><div className="tags">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div><span className="project-link">View repo <Arrow external /></span></div></a>)}</div>
        </section>

        <section className="thinking section-pad" id="thinking">
          <div className="section-label"><span>03</span><span>Thinking / practice</span></div>
          <div className="thinking-grid"><div><h2>Three lenses.<br /><em>One practice.</em></h2><p className="body-copy">A project can start with a hypothesis, a human need, or a stubborn systems problem. The thread through all of them is the same: understand deeply, make deliberately, stay open to being wrong.</p></div><div className="lens-list"><div className="lens"><span>01</span><div><h3>Build</h3><p>Python, React, Next.js, FastAPI, APIs, interfaces, prototypes.</p></div></div><div className="lens"><span>02</span><div><h3>Think</h3><p>LLMs, local AI, agentic workflows, mathematics, research.</p></div></div><div className="lens"><span>03</span><div><h3>Move</h3><p>Product strategy, climate-tech, entrepreneurship, human rights.</p></div></div></div></div>
        </section>

        <section className="skills section-pad"><div className="section-label"><span>04</span><span>Toolbox / right now</span></div><div className="skill-groups">{skillGroups.map((group) => <div className="skill-group" key={group.label}><h3>{group.label}<span>↘</span></h3><div>{group.items.map((skill) => <span key={skill}>{skill}</span>)}</div></div>)}</div></section>

        <section className="proof section-pad"><div className="section-label"><span>05</span><span>Proof / milestones</span></div><div className="proof-grid"><div className="education"><p className="eyebrow">Education</p><h2>Class 10<br /><em>CBSE</em></h2><p>India · 2026–Present</p><span>Preparing for CBSE Board Examinations and IOQM, with a focus on Mathematics, Physics, Computer Science, AI & Technology.</span></div><div className="awards"><p className="eyebrow">Awards + participation</p>{awards.map(([label, title]) => <div className="award" key={title}><span>{label}</span><strong>{title}</strong></div>)}</div><div className="languages"><p className="eyebrow">Languages</p>{languages.map(([level, language]) => <div className="language" key={language}><strong>{language}</strong><span>{level}</span></div>)}</div></div></section>

        <section className="contact section-pad" id="contact"><div className="contact-card"><div><p className="kicker"><span className="kicker-dot" /> Open to thoughtful conversations</p><h2>Have a question<br />worth <em>building on?</em></h2></div><a className="button button-light" href="https://github.com/tejasvswipe" target="_blank" rel="noreferrer">Find me on GitHub <Arrow external /></a><div className="contact-orbit" aria-hidden="true"><span>↗</span></div></div></section>
      </main>

      <footer className="footer section-pad"><a className="brand" href="#top"><span className="brand-mark">T<span>/</span></span><span>tejas<span className="brand-dot">.</span></span></a><p>Made with curiosity, code, and a little bit of blue.</p><div><a href="https://github.com/tejasvswipe" target="_blank" rel="noreferrer">GitHub</a><a href="#contact">Contact</a><a href="#top">Back to top ↑</a></div></footer>
    </div>
  );
}

export default App;
