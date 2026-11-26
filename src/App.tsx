import { Home, Projects, Project, Research } from "./Notebooks";
import { useEffect, useState } from "react";

const pages = {
  desk: "Home",
  projects: "Projects",
  research: "Research",
  revolt: "ReVolt AI",
  childhood: "Childhood",
  resume: "Résumé",
};
type Page = keyof typeof pages | `project/${string}`;
function locationPage(): Page {
  const key = window.location.hash.slice(1);
  if (key.startsWith("project/")) return key as Page;
  return Object.prototype.hasOwnProperty.call(pages, key)
    ? (key as Page)
    : "desk";
}
function Revolt() {
  return (
    <>
      <small>COMPANY NOTEBOOK / FOUNDER</small>
      <h1>
        ReVolt <em>AI.</em>
      </h1>
      <p className="lede">
        A retired laptop still has a story. I founded ReVolt AI to give the
        people responsible for it a way to follow that story to the end.
      </p>
      <h2>A device’s last journey</h2>
      <div className="notes">
        {[
          [
            "Intake",
            "A secure drop station records the device as it enters the system. The intake record gives the team something concrete to track.",
          ],
          [
            "Handoff",
            "Each transfer adds to the chain of custody. The MVP design links those events so a team can trace who held a device and when.",
          ],
          [
            "Evidence",
            "A central processing hub handles sanitization. The proposed dashboard brings the processing record and certificate together for the team retiring the asset.",
          ],
        ].map(([title, body]) => (
          <article key={title}>
            <h3>{title}</h3>
            <p>{body}</p>
          </article>
        ))}
      </div>
      <h2>My part in the build</h2>
      <p className="reading">
        I designed the kiosk workflow and built the software platform with
        Next.js, React and Supabase. My hardware research covers cameras,
        sensors and Arduino. I scoped the first intake station around secure
        collection and left robotic handling for a later design.
      </p>
      <a href="https://github.com/tejasvswipe/ewaste-revolt-ai">
        Explore the prototype on GitHub
      </a>
    </>
  );
}
function Childhood() {
  return (
    <>
      <small>CHILDHOOD / THE KEEPSAKE SHELF</small>
      <h1>
        Before the <em>workbench.</em>
      </h1>
      <p className="lede">
        Quantum theory, guitar chords, and the chance to argue a point out loud.
        Those were the things that held my attention as a kid.
      </p>
      <div className="notes">
        <article>
          <h3>Big questions</h3>
          <p>
            I started reading about quantum theory out of curiosity. I’m still
            drawn to questions about what we can observe and what an experiment
            could tell us.
          </p>
        </article>
        <article>
          <h3>My first guitar</h3>
          <p>
            I learned on a Revel Music Spree. The electric guitar on my wish
            list is a Yamaha Pacifica.
          </p>
        </article>
        <article>
          <h3>Finding my voice</h3>
          <p>
            I won debates as a child and entered the Commonwealth essay
            competition. These days, I also write articles.
          </p>
        </article>
      </div>
      <h2>The picture rail</h2>
      <div className="frames">
        {[
          ["Letter of appreciation", "Reserved for my childhood letter"],
          [
            "Commonwealth essay competition",
            "Participation certificate · scan to come",
          ],
        ].map(([a, b]) => (
          <figure key={a}>
            <span>{a}</span>
            <figcaption>{b}</figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}
function Resume() {
  return (
    <>
      <small>RÉSUMÉ / CLASS 10 · CBSE</small>
      <h1>
        Tejasv <em>Sahu.</em>
      </h1>
      <a className="button" href="/Tejasv-Sahu-Resume.pdf" download>
        Download résumé
      </a>
      <h2>Projects & experience</h2>
      <dl>
        <dt>Founder · ReVolt AI</dt>
        <dd>
          Designed an IT asset retirement workflow spanning secure intake,
          custody tracking and sanitization records. Built the web platform with
          Next.js, React and Supabase.
        </dd>
        <dt>Developer · FoodCop.ai</dt>
        <dd>
          Built an ingredient-label analysis tool with Llama, Groq, FastAPI and
          Pydantic and deployed it on Hugging Face Spaces.
        </dd>
        <dt>Physics research</dt>
        <dd>
          Coauthored a computational study of spatial correlation and
          connectivity in nickelate films with Aaradhya Gupta. Wrote a separate
          review of FLRW spatial curvature with an exploratory BAO and supernova
          analysis.
        </dd>
        <dt>Independent projects</dt>
        <dd>
          Experimented with Qwen system prompts in Google Colab, modeled parts
          in Fusion 360, and designed electronics in KiCad. Currently planning a
          robot build.
        </dd>
      </dl>
      <h2>Competitions & writing</h2>
      <ul>
        <li>Qualified for IOQM. Scored in GQMC and took part in GPC.</li>
        <li>Won the Best Out of Waste competition.</li>
        <li>
          Participated in the National Youth Parliament Scheme’s “Bharatiya
          Democracy in Action” on 14 August 2026.
        </li>
        <li>
          Participated in the Commonwealth essay competition, Youth Ideathon,
          Blue Ocean Entrepreneurship Competition and 1M1B Changemakers World
          Cup.
        </li>
        <li>
          Write articles and enjoy debating, physics and Olympiad mathematics.
        </li>
      </ul>
    </>
  );
}
export default function App() {
  const [page, setPage] = useState(locationPage);
  useEffect(() => {
    const change = () => {
      setPage(locationPage());
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", change);
    return () => window.removeEventListener("hashchange", change);
  }, []);
  useEffect(() => {
    document.title =
      (page in pages ? pages[page as keyof typeof pages] : page.slice(8)) +
      " · Tejas’s workbench";
  }, [page]);
  return (
    <>
      <header>
        <a className="brand" href="#desk">
          <img
            src="/original-wordmark.png"
            width="90"
            height="38"
            alt="Tejas home"
          />
        </a>
        <nav aria-label="Main navigation">
          {(Object.keys(pages) as (keyof typeof pages)[]).map((k) => (
            <a
              key={k}
              aria-current={page === k ? "page" : undefined}
              href={"#" + k}
            >
              {pages[k]}
            </a>
          ))}
        </nav>
      </header>
      <main key={page}>
        {page.startsWith("project/") ? (
          <Project name={page.slice(8)} />
        ) : page === "desk" ? (
          <Home />
        ) : page === "research" ? (
          <Research />
        ) : page === "projects" ? (
          <Projects />
        ) : page === "revolt" ? (
          <Revolt />
        ) : page === "childhood" ? (
          <Childhood />
        ) : (
          <Resume />
        )}
      </main>
      <footer>
        <span>Tejasv Sahu</span>
        <a href="#desk">Back to the desk</a>
      </footer>
    </>
  );
}
