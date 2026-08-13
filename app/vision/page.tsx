export const metadata = {
  title: "Three ways to make food better",
  description: "Better Basics. Better Alternatives. Better Functional. One philosophy: making better eating easier.",
};

const chapters = [
  {
    number: "01",
    slug: "basics",
    title: "Better Basics",
    premise: "Improve what doesn’t need reinventing.",
    statement: "Some foods don’t need to be reinvented. They just need to be better.",
    body: "Quality. Sourcing. Ingredients. Formulation. Transparency. Convenience. Experience. The opportunity can be found anywhere people deserve a simpler, better choice.",
    image: "/vision/better-basics.jpg",
    alt: "Avocado and cold-pressed oil on raw stone in natural light",
    example: "One expression · Organic avocado oil",
    close: "Simple doesn’t mean basic.",
    note: "Sometimes innovation means doing less—and doing it exceptionally well.",
  },
  {
    number: "02",
    slug: "alternatives",
    title: "Better Alternatives",
    premise: "Take something people already know, love or understand—and rethink the experience.",
    statement: "Can we make it better without taking away what people love?",
    body: "Not a diet version. Not a substitute. Not an artificial ‘healthy’ replacement. Keep what makes the experience great. Rethink what could make it genuinely better.",
    image: "/vision/better-alternatives.jpg",
    alt: "A chilled spoonful of creamy chia with real strawberry",
    example: "",
    close: "Keep what people love.",
    note: "Rethink what can be better.",
  },
  {
    number: "03",
    slug: "functional",
    title: "Better Functional",
    premise: "Real food. More function.",
    statement: "How can we make it easier to consume—and more useful for the way people live today?",
    body: "Through freeze-dried blends, powders, concentrates and other convenient applications, HOLISTIK can preserve the familiarity of real food while adding functionality where it genuinely improves the product. The goal isn’t to put everything into one product. It’s to give every product a purpose.",
    image: "/vision/better-functional.jpg",
    alt: "Recognizable greens, vegetables, fruit and seeds beside a freshly mixed green drink",
    example: "",
    close: "Daily Greens is an opportunity.",
    note: "Better Functional is the platform.",
  },
];

export default function VisionPage() {
  return (
    <main className="vision-architecture">
      <header className="vision-architecture-nav">
        <a href="/" aria-label="HOLISTIK home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/holistik-logo.svg" alt="HOLISTIK" />
        </a>
        <span>A system for what comes next</span>
        <a href="/">Close <b>×</b></a>
      </header>

      <section className="vision-architecture-hero">
        <p className="vision-architecture-kicker">HOLISTIK / Vision</p>
        <h1>Three ways<br />to make food<br /><em>better.</em></h1>
        <div className="vision-architecture-intro">
          <p>Not three categories.<br />Not three business units.</p>
          <p>Three ways to evaluate opportunities—and one consistent criterion for what deserves to become HOLISTIK.</p>
        </div>
        <span className="vision-architecture-scroll">Discover the system ↓</span>
      </section>

      <section className="vision-lenses">
        <p className="vision-architecture-kicker">Lenses, not lanes</p>
        <h2>The category can change.<br />The format can change.<br />The philosophy doesn’t.</h2>
        <p>A single idea can move between these territories. The boundaries stay open. The question stays consistent.</p>
      </section>

      {chapters.map((chapter) => (
        <article className={`vision-chapter vision-chapter-${chapter.slug}`} key={chapter.slug}>
          <header className="vision-chapter-heading">
            <span>{chapter.number}</span>
            <div>
              <p className="vision-architecture-kicker">One way to make food better</p>
              <h2>{chapter.title.split(" ").map((word) => <span key={word}>{word}</span>)}</h2>
            </div>
            <p>{chapter.premise}</p>
          </header>

          <figure>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={chapter.image} alt={chapter.alt} loading={chapter.number === "01" ? "eager" : "lazy"} />
            {chapter.example ? <figcaption>{chapter.example}</figcaption> : null}
          </figure>

          {chapter.slug === "alternatives" ? (
            <section className="vision-chapter-example" aria-labelledby="chia-overnights-title">
              <p className="vision-architecture-kicker">Familiar occasion.<br />Different approach.</p>
              <div>
                <h3 id="chia-overnights-title">Chia<br />Overnights</h3>
                <p>A familiar ritual, reimagined around a different ingredient.</p>
                <div className="vision-chapter-example-attributes" aria-label="Chia Overnights concept attributes">
                  <span>Simple.</span>
                  <span>Convenient.</span>
                  <span>Naturally nutritious.</span>
                  <span>Made for real life.</span>
                </div>
              </div>
              <div className="vision-chapter-example-context">
                <p>People already understand overnight oats. What if we rethink the experience around chia?</p>
                <p>A refrigerated, ready-to-eat breakfast or snack built around chia’s natural qualities, great ingredients, real flavors and convenience.</p>
              </div>
              <aside>
                <span>Why it belongs here</span>
                <p>Chia can be naturally nutritious without turning this into a “functional food.” This is Better Alternatives because HOLISTIK transforms an ingredient into a ready-to-eat solution for a familiar occasion.</p>
              </aside>
            </section>
          ) : null}

          {chapter.slug === "functional" ? (
            <section className="vision-functional-story" aria-labelledby="daily-greens-title">
              <div className="vision-functional-story-lead">
                <p className="vision-architecture-kicker">From food to function</p>
                <div>
                  <h3 id="daily-greens-title">Daily<br />Greens</h3>
                  <p>A better way to get your greens.</p>
                </div>
              </div>

              <div className="vision-functional-story-copy">
                <p>A real-food green blend inspired by the ingredients of a freshly prepared green juice—transformed into a convenient format for everyday life.</p>
                <p>Leafy greens, vegetables and fruits can provide the nutritional foundation. Ingredients such as fiber or prebiotics could add a deliberate functional layer—when they have a clear reason to be there.</p>
              </div>

              <p className="vision-functional-ritual">Mix. Drink. Keep moving.</p>
              <p className="vision-functional-payoff">The goodness of greens, without the grocery run, juicer or cleanup.</p>

              <div className="vision-functional-principle">
                <p className="vision-architecture-kicker">The principle</p>
                <dl>
                  <div><dt>Real food</dt><dd>Recognizable fruits, vegetables, seeds, roots and whole-food ingredients.</dd></div>
                  <div><dt>Better format</dt><dd>Making nutritious foods dramatically easier to store, prepare and consume.</dd></div>
                  <div><dt>Added function</dt><dd>Thoughtfully incorporating functional ingredients when they create a meaningful reason for the product to exist.</dd></div>
                </dl>
              </div>

              <div className="vision-functional-directions">
                <p className="vision-architecture-kicker">Where it could go</p>
                <p>Better Functional is bigger than greens. The same philosophy can extend across different ingredients, functions and occasions.</p>
                <div><span>Roots</span><strong>Vegetables with purpose.</strong><p>Beet, carrot, tomato and other vibrant plant ingredients reimagined in a convenient daily format.</p></div>
                <div><span>Berries</span><strong>Fruit that does more.</strong><p>A berry-forward real-food base with a purposeful, complementary functional layer.</p></div>
                <small>Explorations of the platform—not a finalized product pipeline.</small>
              </div>

              <div className="vision-functional-position">
                <p>Food you recognize.<br />Function you understand.<br />Convenience you’ll actually use.</p>
                <span>Not supplements disguised as food.<br />Better food, designed with purpose.</span>
              </div>
            </section>
          ) : null}

          <div className="vision-chapter-thesis">
            <h3>{chapter.statement}</h3>
            <p>{chapter.body}</p>
          </div>

          <div className="vision-chapter-close">
            <p>{chapter.close}</p>
            <span>{chapter.note}</span>
          </div>
        </article>
      ))}

      <section className="vision-architecture-question">
        <div className="vision-architecture-approaches">
          <span>Better Basics.</span>
          <span>Better Alternatives.</span>
          <span>Better Functional.</span>
        </div>
        <p>Different approaches.<br />Same question.</p>
        <h2>Can we make<br />it better?</h2>
      </section>

      <section className="vision-architecture-final">
        <p>Making better eating easier.</p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/holistik-logo.svg" alt="HOLISTIK" />
      </section>
    </main>
  );
}