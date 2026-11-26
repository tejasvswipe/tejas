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
export function Home() {
  return (
    <>
      <section className="intro">
        <div>
          <small>TEJASV SAHU / FIELD NOTES</small>
          <h1>
            Physics, parts
            <br />
            &amp; <em>proofs.</em>
          </h1>
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
      <section className="paper">
        <small>ON THE WORKBENCH</small>
        <h2>Keys, clocks and moving parts</h2>
        <div className="catalog">
          {["aswm-macropad", "dawnkey", "tars-lite-humanoid"].map((n) => {
            const r = repos.find((x) => x.name === n)!;
            return (
              <article key={n}>
                <h3>
                  <a href={"#project/" + n}>{n}</a>
                </h3>
                <p>{r.summary}</p>
              </article>
            );
          })}
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
