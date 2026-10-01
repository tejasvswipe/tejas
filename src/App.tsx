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
