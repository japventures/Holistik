function Wordmark({ light = false }: { light?: boolean }) {
  return (
    // The official vector artwork is extracted from the supplied HOLISTIK logo PDF.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={light ? "vision-wordmark vision-wordmark-light" : "vision-wordmark"}
      src="/holistik-logo.svg"
      alt="HOLISTIK"
    />
  );
}

export default function Home() {
  return (
    <main className="vision-site">
      <header className="vision-header">
        <a href="#top" aria-label="HOLISTIK home"><Wordmark /></a>
      </header>

      <section className="vision-hero" id="top">
        <div className="vision-hero-copy">
          <p className="vision-kicker">A new idea for everyday food</p>
          <h1>Better eating.<br />Made easier.</h1>
          <p className="vision-scroll">Keep going <span aria-hidden="true">↓</span></p>
        </div>
        <div className="vision-hero-image">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/holistik-hero-v2.jpg"
            alt="Figs, water and limestone in natural light"
            fetchPriority="high"
          />
        </div>
      </section>

      <section className="vision-manifesto">
        <p className="vision-kicker">Why we exist</p>
        <div>
          <h2>The world made eating complicated.</h2>
          <p>We are here to make it feel human again.</p>
        </div>
      </section>

      <section className="vision-statement">
        <p>Eating well shouldn&apos;t ask so much of you.</p>
      </section>

      <section className="vision-beliefs" aria-label="What we believe">
        <p>Pleasure belongs here.</p>
        <p>Simple can be radical.</p>
        <p>Every day is the point.</p>
        <p>Balance is good.</p>
      </section>

      <section className="vision-movement">
        <p className="vision-kicker">HOLISTIK is a point of view</p>
        <h2>Food, rethought<br />around real life.</h2>
        <p className="vision-movement-copy">
          Less friction. Better choices. More room to live. We are building a new
          way forward for everyday eating—one that begins with people, not categories.
        </p>
      </section>

      <section className="vision-close">
        <p>Balance is good.</p>
        <Wordmark />
      </section>

      <footer className="vision-footer">
        <span>HOLISTIK®</span>
        <span>Mexico · 2026</span>
        <span>For everyday life.</span>
      </footer>
    </main>
  );
}