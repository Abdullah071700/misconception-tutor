function Hero({ onStart }) {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <h1 id="hero-heading">
        Don&apos;t just get the answer.
        <br />
        Understand what you got wrong.
      </h1>
      <p>
        Share what you think, even if you are unsure. The tutor looks at your
        reasoning, points to the misconception behind it, and helps you rebuild
        the idea so it actually sticks.
      </p>
      <div className="hero-cta">
        <a className="button" href="#tutor" onClick={onStart}>
          Start with your thinking
        </a>
      </div>
    </section>
  )
}

export default Hero
