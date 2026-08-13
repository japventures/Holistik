import {
  brandPrinciples,
  conceptProducts,
  platformCategories,
  storyMilestones,
} from "./content";

function Brand() {
  return (
    <span className="brand" aria-label="Holistik">
      <span className="brand-symbol" aria-hidden="true">∞</span>
      <span className="brand-word">Holistik</span>
    </span>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header shell">
        <a href="/" className="brand-link"><Brand /></a>
        <nav aria-label="Primary navigation">
          <a href="#platform">Platform</a>
          <a href="#story">Our story</a>
          <a href="#principles">Principles</a>
          <a href="/deck" className="nav-cta">Explore the deck <span>↗</span></a>
        </nav>
      </header>

      <section className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow">Born in Mexico · 2013 · Reimagined for what&apos;s next</p>
          <h1>Delicious by nature.<br /><em>Functional by design.</em></h1>
          <p className="hero-lede">
            HOLISTIK is building a new kind of food and beverage company—rooted in
            real flavor, thoughtful function, and the joy of everyday eating.
          </p>
          <div className="hero-actions">
            <a href="#platform" className="button button-dark">Discover the platform</a>
            <a href="/deck" className="text-link">Read our vision <span>→</span></a>
          </div>
        </div>
        <div className="hero-art" aria-label="HOLISTIK brand ingredients and product directions">
          <div className="sun-disc" />
          <div className="ingredient ingredient-lime">lime</div>
          <div className="ingredient ingredient-berry">berry</div>
          <div className="ingredient ingredient-mango">mango</div>
          <div className="hero-glass"><span>jamaica</span></div>
          <div className="hero-pop"><span /></div>
          <p className="art-note">Fresh Mexican flavor<br />meets modern function.</p>
        </div>
      </section>

      <div className="ticker" aria-label="HOLISTIK product universe">
        <div>
          <span>Functional beverages</span><i>✦</i><span>Greek yogurt frozen</span><i>✦</i>
          <span>Powders</span><i>✦</i><span>Better-for-you snacks</span><i>✦</i>
          <span>Kids + baby</span><i>✦</i><span>Daily nutrition</span>
        </div>
      </div>

      <section className="manifesto shell section-pad">
        <p className="section-label">The idea</p>
        <div>
          <h2>Healthier food should not feel like homework.</h2>
          <p>
            We believe food can be more useful without becoming clinical, more
            nutritious without losing pleasure, and more convenient without giving
            up character. HOLISTIK exists to make better choices feel natural.
          </p>
        </div>
      </section>

      <section id="platform" className="platform section-pad">
        <div className="shell section-heading">
          <div>
            <p className="section-label">One brand. Many possibilities.</p>
            <h2>A platform for how people actually live.</h2>
          </div>
          <p>
            We are not defined by a format. We are united by a point of view:
            unmistakable flavor, useful nutrition, and products worth repeating.
          </p>
        </div>
        <div className="category-grid shell">
          {platformCategories.map((category, index) => (
            <article className={`category-card category-${category.tone}`} key={category.name}>
              <span className="category-number">0{index + 1}</span>
              <div className="category-orbit" aria-hidden="true" />
              <p>{category.kicker}</p>
              <h3>{category.name}</h3>
              <ul>
                {category.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="story" className="story shell section-pad">
        <div className="story-intro">
          <div>
            <p className="section-label">Our story</p>
            <h2>Built once.<br />Ready to build bigger.</h2>
          </div>
          <p>
            HOLISTIK began with natural frozen products and a simple conviction:
            everyday food could be both joyful and better considered. That first
            chapter created real manufacturing, retail, cold-chain and export
            experience. The next chapter expands the canvas.
          </p>
        </div>

        <div className="legacy-grid">
          <figure className="legacy-card legacy-main">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/holistik-lemon-pack.webp" alt="Original HOLISTIK lemon mini pops packaging" />
            <figcaption>Original mini pops · Legacy packaging</figcaption>
          </figure>
          <figure className="legacy-card legacy-small">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/holistik-matcha.jpg" alt="Original HOLISTIK matcha frozen dessert packaging" />
            <figcaption>Early product innovation · Matcha</figcaption>
          </figure>
          <div className="timeline">
            {storyMilestones.map((item) => (
              <div className="timeline-row" key={item.year}>
                <strong>{item.year}</strong>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="concepts section-pad">
        <div className="shell section-heading light-heading">
          <div>
            <p className="section-label">Innovation directions</p>
            <h2>Not a product list.<br />A living pipeline.</h2>
          </div>
          <p>
            We explore broadly, prototype quickly and earn the right to scale.
            These territories show the range of the platform—not launch promises.
          </p>
        </div>
        <div className="concept-grid shell">
          {conceptProducts.map((product) => (
            <article className={`concept-card concept-${product.tone}`} key={product.name}>
              <div className="concept-status">{product.status}</div>
              <div className="concept-shape" aria-hidden="true"><span /></div>
              <p>{product.category}</p>
              <h3>{product.name}</h3>
              <span>{product.flavor}</span>
            </article>
          ))}
        </div>
      </section>

      <section id="principles" className="principles shell section-pad">
        <div className="section-heading">
          <div>
            <p className="section-label">How we build</p>
            <h2>Four principles.<br />No shortcuts.</h2>
          </div>
        </div>
        <div className="principles-grid">
          {brandPrinciples.map((principle, index) => (
            <article key={principle.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{principle.title}</h3>
              <p>{principle.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="deck-cta shell">
        <div>
          <p className="section-label">The strategic book</p>
          <h2>See where HOLISTIK is going.</h2>
          <p>
            Explore the brand thesis, opportunity landscape, innovation platform,
            R&amp;D model and North American roadmap.
          </p>
        </div>
        <a href="/deck" className="round-link" aria-label="Open the HOLISTIK strategic deck">
          <span>Open<br />the deck</span><b>↗</b>
        </a>
      </section>

      <footer className="footer shell">
        <Brand />
        <p>Hecho con intención en México.<br />Built for North America.</p>
        <div>
          <a href="/deck">Strategic deck</a>
          <a href="mailto:hello@holistik.com">hello@holistik.com</a>
        </div>
        <small>© 2026 HOLISTIK. All rights reserved.</small>
      </footer>
    </main>
  );
}
