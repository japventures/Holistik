import type { Metadata } from "next";
import { innovationPipeline, opportunityCategories, rdStages } from "../content";

export const metadata: Metadata = {
  title: "Strategic Brand & Innovation Book",
  description: "The strategic thesis, innovation platform and growth roadmap for HOLISTIK.",
};

const chapters = [
  ["01", "The thesis", "thesis"],
  ["02", "The brand", "brand"],
  ["03", "Opportunity", "opportunity"],
  ["04", "Innovation", "innovation"],
  ["05", "How we build", "rd"],
  ["06", "The roadmap", "roadmap"],
];

function DeckBrand() {
  return (
    <span className="brand deck-brand" aria-label="Holistik">
      <span className="brand-symbol" aria-hidden="true">∞</span>
      <span className="brand-word">Holistik</span>
    </span>
  );
}

export default function Deck() {
  return (
    <main className="deck">
      <header className="deck-nav">
        <a href="/"><DeckBrand /></a>
        <span>Brand &amp; Innovation Book · Working edition 01</span>
        <a href="/" className="deck-close">Close <b>×</b></a>
      </header>

      <section className="deck-cover deck-slide">
        <div className="deck-cover-top">
          <p>HOLISTIK · 2026 → 2030</p>
          <p>Mexico · United States · Canada</p>
        </div>
        <div className="deck-cover-copy">
          <p className="deck-kicker">Strategic Brand &amp; Innovation Book</p>
          <h1>Build the platform.<br /><em>Earn the future.</em></h1>
          <p>
            A North American food and beverage platform born in Mexico—designed
            around flavor, function and disciplined innovation.
          </p>
        </div>
        <div className="cover-loop" aria-hidden="true"><span>∞</span></div>
        <div className="deck-scroll">Scroll to explore <span>↓</span></div>
      </section>

      <section className="deck-index deck-slide">
        <p className="deck-kicker">Contents</p>
        <div className="chapter-list">
          {chapters.map(([number, title, id]) => (
            <a href={`#${id}`} key={id}><span>{number}</span><strong>{title}</strong><b>↘</b></a>
          ))}
        </div>
      </section>

      <section id="thesis" className="deck-slide split-slide thesis-slide">
        <div className="slide-number">01 — The thesis</div>
        <div className="split-title">
          <p className="deck-kicker">The reset</p>
          <h2>HOLISTIK is not coming back as an ice cream brand.</h2>
        </div>
        <div className="split-body">
          <p className="lead">
            It is evolving into a multicategory platform for functional foods and
            beverages—using the experience of its first chapter to build a much
            larger second one.
          </p>
          <div className="then-now">
            <article>
              <span>Then</span>
              <h3>Format-led</h3>
              <p>Frozen products defined the brand and limited the opportunity.</p>
            </article>
            <article>
              <span>Now</span>
              <h3>Point-of-view led</h3>
              <p>Flavor, function and real-life usefulness connect every category.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="deck-slide statement-slide">
        <span className="statement-mark">“</span>
        <blockquote>
          The opportunity is not to be the healthiest product in the aisle.
          It is to be the product people want again—and feel good choosing.
        </blockquote>
        <p>HOLISTIK core belief</p>
      </section>

      <section id="brand" className="deck-slide brand-platform-slide">
        <div className="slide-number">02 — The brand</div>
        <p className="deck-kicker">Golden Circle</p>
        <h2>A simple center of gravity.</h2>
        <div className="golden-grid">
          <article className="golden-why">
            <span>Why</span>
            <h3>Make better everyday eating feel natural.</h3>
            <p>Good choices should add joy and ease—not friction or guilt.</p>
          </article>
          <article>
            <span>How</span>
            <h3>Flavor first. Function with purpose. Evidence before scale.</h3>
          </article>
          <article>
            <span>What</span>
            <h3>Foods, beverages and routines for modern life.</h3>
          </article>
        </div>
      </section>

      <section className="deck-slide rtbs-slide">
        <div className="slide-number">02.1 — Reason to believe</div>
        <div>
          <p className="deck-kicker">Why HOLISTIK</p>
          <h2>Credibility built through doing.</h2>
        </div>
        <div className="rtb-grid">
          <article><strong>01</strong><h3>Manufacturing fluency</h3><p>Real experience taking food products from concept to repeatable production.</p></article>
          <article><strong>02</strong><h3>Retail experience</h3><p>Products built for club-store requirements, scale and consumer clarity.</p></article>
          <article><strong>03</strong><h3>Cold-chain capability</h3><p>A historically difficult operating layer already understood firsthand.</p></article>
          <article><strong>04</strong><h3>Cross-border ambition</h3><p>Export experience and a strategy designed for Mexico, USA and Canada.</p></article>
        </div>
      </section>

      <section id="opportunity" className="deck-slide opportunity-slide">
        <div className="slide-number">03 — The opportunity</div>
        <div className="opportunity-heading">
          <div>
            <p className="deck-kicker">Category landscape</p>
            <h2>Where growth meets right to win.</h2>
          </div>
          <p>
            A directional prioritization based on category momentum, margin
            potential, entry practicality and brand fit. Market values remain in
            research validation before external investor use.
          </p>
        </div>
        <div className="matrix">
          <div className="matrix-head"><span>Category</span><span>Growth</span><span>Margin</span><span>Access</span><span>HOLISTIK fit</span></div>
          {opportunityCategories.map((row) => (
            <div className="matrix-row" key={row.name}>
              <strong>{row.name}</strong><span>{row.growth}</span><span>{row.margin}</span><span>{row.access}</span><span className="fit-cell">{row.fit}</span>
            </div>
          ))}
        </div>
        <p className="source-note">Directional strategy view · quantitative market module to be source-validated by region.</p>
      </section>

      <section className="deck-slide region-slide">
        <div className="slide-number">03.1 — Regional logic</div>
        <p className="deck-kicker">One platform · Three markets</p>
        <div className="region-grid">
          <article>
            <span>MX</span><h2>Build &amp; prove</h2>
            <p>Creative core, R&amp;D speed, operating fluency and whitespace in modern functional categories.</p>
            <ul><li>Flavor authority</li><li>Controlled pilots</li><li>Retail relationships</li></ul>
          </article>
          <article>
            <span>USA</span><h2>Differentiate &amp; scale</h2>
            <p>Large, educated demand—paired with intense competition and high brand-building costs.</p>
            <ul><li>Mexican flavor edge</li><li>Premium natural</li><li>Hispanic + mainstream</li></ul>
          </article>
          <article>
            <span>CA</span><h2>Extend selectively</h2>
            <p>Attractive wellness adoption with a disciplined route through partners and proven winners.</p>
            <ul><li>Validated SKUs</li><li>Focused channels</li><li>Low complexity</li></ul>
          </article>
        </div>
      </section>

      <section id="innovation" className="deck-slide innovation-slide">
        <div className="slide-number">04 — Innovation platform</div>
        <div className="innovation-title">
          <p className="deck-kicker">A living portfolio</p>
          <h2>Explore broadly.<br />Commit selectively.</h2>
        </div>
        <div className="innovation-rings" aria-hidden="true"><span>Flavor</span><span>Function</span><span>Format</span></div>
        <div className="innovation-copy">
          <p>
            HOLISTIK does not need every idea to launch. It needs a system that
            discovers a few exceptional products—and stops average ones early.
          </p>
          <div className="innovation-tags"><span>Beverages</span><span>Powders</span><span>Frozen</span><span>Snacks</span><span>Kids</span><span>Baby</span></div>
        </div>
      </section>

      <section className="deck-slide pipeline-slide">
        <div className="slide-number">04.1 — Working pipeline</div>
        <div className="pipeline-heading">
          <div><p className="deck-kicker">Current territories</p><h2>Ideas become evidence.</h2></div>
          <p>Statuses describe exploration—not commercial commitments.</p>
        </div>
        <div className="pipeline-list">
          {innovationPipeline.map((item, index) => (
            <div key={item.name}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{item.name}</strong>
              <em>{item.type}</em>
              <b>{item.stage}</b>
            </div>
          ))}
        </div>
      </section>

      <section id="rd" className="deck-slide rd-slide">
        <div className="slide-number">05 — How we build</div>
        <div className="rd-heading">
          <p className="deck-kicker">R&amp;D philosophy</p>
          <h2>First win flavor.<br />Then earn the shelf.</h2>
          <p>
            The pipeline moves from desirability to technical stability to real
            market behavior. Each gate exists to reduce risk before scale.
          </p>
        </div>
        <ol className="stage-gates">
          {rdStages.map((stage, index) => (
            <li key={stage}><span>{index + 1}</span><strong>{stage}</strong></li>
          ))}
        </ol>
      </section>

      <section className="deck-slide operating-slide">
        <div className="slide-number">05.1 — Operating model</div>
        <p className="deck-kicker">Asset-light where it matters</p>
        <h2>Own the intelligence.<br />Orchestrate the infrastructure.</h2>
        <div className="operating-flow">
          <article><span>01</span><strong>Consumer insight</strong><p>Needs, occasions and flavor whitespace.</p></article>
          <i>→</i>
          <article><span>02</span><strong>HOLISTIK R&amp;D</strong><p>Briefs, prototypes, standards and decisions.</p></article>
          <i>→</i>
          <article><span>03</span><strong>Specialist co-packers</strong><p>Best-fit capability by category and technology.</p></article>
          <i>→</i>
          <article><span>04</span><strong>Channel partners</strong><p>Retail, club, e-commerce and foodservice.</p></article>
        </div>
      </section>

      <section id="roadmap" className="deck-slide roadmap-slide">
        <div className="slide-number">06 — The roadmap</div>
        <div className="roadmap-heading">
          <p className="deck-kicker">Disciplined expansion</p>
          <h2>Prove. Repeat. Scale.</h2>
        </div>
        <div className="roadmap-grid">
          <article><span>Phase 01</span><h3>Rebuild the engine</h3><p>2026</p><ul><li>Brand relaunch</li><li>R&amp;D operating system</li><li>2–3 pilot territories</li><li>Mexico market tests</li></ul></article>
          <article><span>Phase 02</span><h3>Earn repeatability</h3><p>2027–28</p><ul><li>Scale validated winners</li><li>Expand priority channels</li><li>Selective USA entry</li><li>Portfolio adjacency</li></ul></article>
          <article><span>Phase 03</span><h3>Build the platform</h3><p>2029–30</p><ul><li>Multi-category system</li><li>North American footprint</li><li>Canada through partners</li><li>USD 10–20M ambition</li></ul></article>
        </div>
        <p className="source-note">Financial ambition is strategic, not a forecast or investment offer.</p>
      </section>

      <section className="deck-slide final-slide">
        <DeckBrand />
        <div>
          <p className="deck-kicker">The next chapter</p>
          <h2>Build food people want.<br /><em>Build a company that lasts.</em></h2>
          <a href="/">Return to holistik.com <span>↗</span></a>
        </div>
        <p>Private working edition · 2026</p>
      </section>
    </main>
  );
}
