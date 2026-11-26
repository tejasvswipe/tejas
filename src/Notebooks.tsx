import { useState } from "react";
import repos from "./projects.json";

export function Geometry() {
  const [k, setK] = useState(1);
  const curves = [
    { k: -1, label: "Negative", color: "#96526a" },
    { k: 0, label: "Flat", color: "#507364" },
    { k: 1, label: "Positive", color: "#38589c" },
  ];
  const radius = (x: number, s: number) =>
    s === 1 ? Math.sin(x) : s === -1 ? Math.sinh(x) : x;
  return (
    <figure className="plot">
      <small>FLRW GEOMETRY LAB</small>
      <h3>One radius. Three geometries.</h3>
      <svg
        role="img"
        aria-label="Circumference divided by two pi versus radial distance for three constant-curvature spaces"
        viewBox="0 0 380 210"
      >
        <defs>
          <pattern
            id="grid"
            width="29"
            height="29"
            patternUnits="userSpaceOnUse"
          >
            <path d="M29 0H0V29" fill="none" stroke="#c2cfe4" />
          </pattern>
        </defs>
        <rect x="45" y="10" width="306" height="161" fill="url(#grid)" />
        <path d="M45 10V171H351" fill="none" stroke="#475672" />
        {curves.map((c) => (
          <path
            key={c.k}
            d={Array.from({ length: 81 }, (_, i) => {
              const x = (i / 80) * 1.6;
              return (
                (i ? "L" : "M") +
                (45 + (300 * i) / 80) +
                " " +
                (171 - 64 * radius(x, c.k))
              );
            }).join(" ")}
            fill="none"
            stroke={c.color}
            opacity={c.k === k ? 1 : 0.32}
            strokeWidth={c.k === k ? 4 : 2}
          />
        ))}
        <g fill="#34425c" fontSize="12">
          <text x="6" y="18">
            C/2π
          </text>
          <text x="30" y="176">
            0
          </text>
          <text x="229" y="191">
            1
          </text>
          <text x="312" y="191">
            1.6 χ
          </text>
        </g>
      </svg>
      <div className="choices">
        {curves.map((c) => (
          <button key={c.k} aria-pressed={c.k === k} onClick={() => setK(c.k)}>
            {c.label}
          </button>
        ))}
      </div>
      <figcaption aria-live="polite">
        C / 2π = {k === 1 ? "sin χ" : k === -1 ? "sinh χ" : "χ"}. Distances use
        units of the curvature radius for the curved cases.
      </figcaption>
    </figure>
  );
}
export function Research() {
  return (
    <>
      <small>PHYSICS / RESEARCH NOTEBOOK</small>
      <h1>
        Two questions
        <br />
        <em>about space.</em>
      </h1>
      <div className="paper">
        <small>CONDENSED MATTER</small>
        <h2>Connectivity in nickelate films</h2>
        <p>Tejasv Sahu &amp; Aaradhya Gupta</p>
        <p>
          In our computational hypothesis, we hold the mean reduction proxy
          fixed and change its spatial correlation. Do the regions above a
          threshold form a connected path across the film? The model tests
          connectivity. Establishing superconductivity would require
          experimental evidence.
        </p>
        <a href="https://github.com/tejasvswipe/superconductvity-nickelate-research">
          Read the reproducibility package
        </a>
      </div>
      <div className="paper">
        <small>COSMOLOGY</small>
        <h2>Spatial curvature of the universe</h2>
        <p>Tejasv Sahu</p>
        <p>
          My FLRW paper reviews conditional curvature constraints and explores
          baryon acoustic oscillation and supernova distance measurements. Its
          starting question is geometric: how does transverse distance change as
          you move farther along a radial path?
        </p>
        <Geometry />
      </div>
    </>
  );
}
export function Projects() {
  const [q, setQ] = useState("");
  const list = repos.filter((r) =>
    (r.name + " " + r.summary + " " + r.language)
      .toLowerCase()
      .includes(q.toLowerCase()),
  );
  return (
    <>
      <small>GITHUB / PUBLIC REPOSITORIES</small>
      <h1>
        Project <em>index.</em>
      </h1>
      <label className="search">
        Find a project
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search by name, topic or language"
        />
      </label>
      <p aria-live="polite">{list.length} repositories</p>
      <div className="catalog">
        {list.map((r) => (
          <article key={r.name}>
            <small>{r.fork ? "FORK" : r.language || "REPOSITORY"}</small>
            <h3>
              <a href={"#project/" + r.name}>{r.name}</a>
            </h3>
            <p>{r.summary}</p>
          </article>
        ))}
      </div>
    </>
  );
}
export function Project({ name }: { name: string }) {
  const r = repos.find((x) => x.name === name);
  return r ? (
    <>
      <a href="#projects">Project index</a>
      <h1 className="repo-title">{r.name}</h1>
      <small>
        {r.fork ? "FORK · " : ""}
        {r.language || "PUBLIC REPOSITORY"}
      </small>
      <p className="lede">{r.summary}</p>
      <a className="button" href={r.html_url}>
        Explore this repository
      </a>
      {r.files.length > 0 && (
        <section className="paper">
          <h2>Inside the repository</h2>
          <ul>
            {r.files.map((f) => (
              <li key={f.name}>
                <a href={f.url}>{f.name}</a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  ) : (
    <Projects />
  );
}
const marks = [
  {src: "mit.svg", name: "MIT", context: "MIT POV OS project", href: "#project/mit-pov-webos"},
  {src: "hack-club.svg", name: "Hack Club", context: "Stardance portfolio", href: "#project/tejas"},
  {src: "revolt.webp", name: "ReVolt AI", context: "My company", href: "#revolt"},
];

function LogoPlate() {
  const [paused, setPaused] = useState(false);
  return <section className="logo-plate" aria-label="Project logos">
    <div className="logo-window">
      <div className="logo-track" data-paused={paused}>
        {[0, 1].map(copy => <div className="logo-set" key={copy} aria-hidden={copy === 1 || undefined}>
          {marks.map(mark => <a key={mark.name} href={mark.href} tabIndex={copy ? -1 : 0}>
            <img src={'/marks/' + mark.src} alt={mark.name}/>
            <span>{mark.context}</span>
          </a>)}
        </div>)}
      </div>
    </div>
    <button type="button" onClick={() => setPaused(!paused)} aria-label={paused ? 'Play logo animation' : 'Pause logo animation'}>{paused ? 'Play' : 'Pause'}</button>
  </section>;
}

export function Home() {
  return (
    <>
      <section className="intro">
        <div>
          <small>TEJASV SAHU / FIELD NOTES</small>
          <h1 className="axis-title">Off the<br/><em>real axis.</em></h1>
          <p className="axis-equation" aria-label="i equals the square root of negative one and differs from every real-valued mean">
            i = √−1 ≠ x̄ <span>（x̄ ∈ ℝ）</span>
          </p>
          <p className="lede">
            I’m Tejas. I’m in Class 10, I draw circuit boards, and I like
            questions you can test with a model or a sheet of graph paper.
          </p>
          <a className="button" href="#projects">
            Explore the projects
          </a>{" "}
          <a href="#research">Research notebook</a>
        </div>
        <Geometry />
      </section>
      <LogoPlate />
      <section className="paper">
        <small>FROM MY SCREENSHOTS</small>
        <h2>On my screen</h2>
        <div className="screen-wall">
          <figure><a href="#project/aswm-macropad"><img loading="lazy" src="/screen-notes/aswm-macropad.webp" alt="Sixteen keys and a rotary encoder in the enclosure render."/><span>Rizzpad // 16</span></a><figcaption>Sixteen keys and a rotary encoder in the enclosure render.</figcaption></figure>
          <figure><a href="#project/dawnkey"><img loading="lazy" src="/screen-notes/dawnkey.webp" alt="Keypad alarm clock with its battery pod beside the case."/><span>Dawnkey</span></a><figcaption>Keypad alarm clock with its battery pod beside the case.</figcaption></figure>
          <figure><a href="#project/piano"><img loading="lazy" src="/screen-notes/piano.webp" alt="A playable octave mapped to the computer keyboard."/><span>Browser piano</span></a><figcaption>A playable octave mapped to the computer keyboard.</figcaption></figure>
          <figure><a href="#project/mit-pov-webos"><img loading="lazy" src="/screen-notes/mit-pov-webos.webp" alt="The opening screen of the simulated desktop."/><span>MIT POV OS</span></a><figcaption>The opening screen of the simulated desktop.</figcaption></figure>
          <figure><a href="#project/neo-note"><img loading="lazy" src="/screen-notes/neo-note.webp" alt="The journal homepage with its pastel orbital illustration."/><span>Neonote</span></a><figcaption>The journal homepage with its pastel orbital illustration.</figcaption></figure>
        </div>
      </section>
      <div className="paper">
        <small>MATHEMATICS</small>
        <h2>From geometry to olympiads</h2>
        <p>
          I qualified for IOQM. Geometry and trigonometry are also part of how I
          think about curvature: in spherical geometry, a circle’s circumference
          grows more slowly with radius than it does on a plane.
        </p>
      </div>
      <div className="paper">
        <small>WRITING &amp; IDEAS</small>
        <h2>Politics on my bookshelf</h2>
        <p>
          I write articles and describe my outlook as liberal ironist and
          Marxist. I read widely about nationalism, socialism and Indian political
          history. My reading includes Rabindranath Tagore’s <cite>Nationalism</cite>,
          Marx and Engels’s <cite>The Communist Manifesto</cite>, <cite>The ABC of
          Socialism</cite>, and a biography of Mahatma Gandhi.
        </p>
      </div>
    </>
  );
}
