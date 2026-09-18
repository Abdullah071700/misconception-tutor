function Hero({ onStart }) {
  return (
    <section className="hero" aria-labelledby="hero-heading">

      {/* Floating Math Elements */}
      <div className="floating-math math-one">√x</div>
      <div className="floating-math math-two">π</div>
      <div className="floating-math math-three">∫</div>
      <div className="floating-math math-four">x²</div>

      {/* Floating Topic Cards */}
      <div className="floating-card card-algebra">
        <span>𝑥</span>
        Algebra
      </div>

      <div className="floating-card card-geometry">
        <span>△</span>
        Geometry
      </div>

      <div className="floating-card card-calculus">
        <span>∫</span>
        Calculus
      </div>

      {/* Hero Content */}
      <div className="hero-content">

        <div className="hero-badge">
          ✨ AI Tutor for Mathematics
        </div>

        <h1 id="hero-heading">
          Don't just get the answer.
          <span> Understand what you got wrong.</span>
        </h1>

        <p className="hero-description">
          A friendly AI maths tutor that finds your misconceptions,
          explains them in simple words, and gives you personalised
          practice so you actually improve.
        </p>

        <div className="hero-actions">
          <button className="hero-primary-button" onClick={onStart}>
            Start Learning Now
            <span>→</span>
          </button>

          <a className="hero-secondary-button" href="#how-it-works">
            <span>▶</span>
            See How It Works
          </a>
        </div>

        {/* Feature Highlights */}
        <div className="hero-features">

          <div className="hero-feature">
            <div className="feature-icon">🎓</div>
            <div>
              <strong>Class 6–12</strong>
              <small>Maths learning</small>
            </div>
          </div>

          <div className="hero-feature">
            <div className="feature-icon">🎯</div>
            <div>
              <strong>Topic-wise</strong>
              <small>Practice</small>
            </div>
          </div>

          <div className="hero-feature">
            <div className="feature-icon">📈</div>
            <div>
              <strong>Adaptive</strong>
              <small>Difficulty</small>
            </div>
          </div>

          <div className="hero-feature">
            <div className="feature-icon">📷</div>
            <div>
              <strong>Upload</strong>
              <small>Handwritten work</small>
            </div>
          </div>

        </div>
      </div>

      {/* Tutor Illustration Placeholder */}
      <div className="hero-visual">

        <div className="glow"></div>

        <div className="tutor-orb">
          <div className="orb-face">
            <span>•ᴗ•</span>
          </div>

          <div className="orb-antenna"></div>
        </div>

        {/* Conversation bubbles */}
        <div className="speech-bubble bubble-one">
          👋 Hi! What are we working on today?
        </div>

        <div className="speech-bubble bubble-two">
          I'm struggling with quadratic equations.
        </div>

        <div className="speech-bubble bubble-three">
          Let's find where the mistake happened.
        </div>

        {/* Notebook */}
        <div className="math-notebook">
          <div className="notebook-title">
            Today's Problem
          </div>

          <div className="equation">
            x² + 5x + 6 = 0
          </div>

          <div className="notebook-line">
            x = -2, -3 ✓
          </div>

          <div className="notebook-note">
            Small mistake → Big learning
          </div>
        </div>

      </div>

    </section>
  );
}

export default Hero;