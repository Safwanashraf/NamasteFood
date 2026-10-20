const About = () => {
  return (
    <main className="story-page">
      <section className="story-hero">
        <div className="story-copy">
          <p className="eyebrow">A LITTLE ABOUT US</p>
          <h1>
            Good food brings us <span>back together.</span>
          </h1>
          <p className="story-lede">
            Namaste Food makes it easier to find something delicious, whether
            it is a familiar favorite or a new place around the corner.
          </p>
          <a className="story-link" href="/#home">
            Find your next meal <span aria-hidden="true">&#8599;</span>
          </a>
        </div>
        <figure className="story-image-wrap">
          <img
            className="story-image"
            src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1400&q=85"
            alt="A colorful fresh meal prepared with vegetables and herbs"
          />
          <figcaption>MADE FOR EVERYDAY MOMENTS</figcaption>
        </figure>
      </section>

      <section className="story-manifesto">
        <p className="eyebrow">OUR POINT OF VIEW</p>
        <h2>Every meal has a story. Finding it should feel easy.</h2>
        <p>
          We believe choosing what to eat should be the enjoyable part, not the
          hard part. So we bring local restaurant discoveries into one simple
          place, ready for whatever you are craving today.
        </p>
      </section>

      <section className="story-values" aria-labelledby="story-values-title">
        <div className="story-values-heading">
          <p className="eyebrow">THE GOOD STUFF</p>
          <h2 id="story-values-title">A better kind of food search.</h2>
        </div>
        <div className="story-values-grid">
          <article className="story-value">
            <span>01</span>
            <h3>Follow your appetite</h3>
            <p>Search for a dish, a cuisine, or simply see what sounds good.</p>
          </article>
          <article className="story-value">
            <span>02</span>
            <h3>Find local favorites</h3>
            <p>Explore restaurants and discover something new close by.</p>
          </article>
          <article className="story-value">
            <span>03</span>
            <h3>Make room for joy</h3>
            <p>Spend less time deciding and more time looking forward to lunch.</p>
          </article>
        </div>
      </section>
    </main>
  );
};

export default About;
