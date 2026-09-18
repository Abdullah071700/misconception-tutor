function TutorCard({ prompt, onPromptChange, textareaRef }) {
  const topics = [
    "Algebra",
    "Geometry",
    "Trigonometry",
    "Calculus",
    "Differentiation",
    "Integration",
    "Probability",
    "Statistics",
    "Quadratic Equations",
  ];

  const examples = [
    "I think 1/4 is bigger than 1/3 because 4 is bigger than 3.",
    "I don't understand why we change the sign when solving equations.",
    "I keep making mistakes while solving quadratic equations.",
    "I don't understand how differentiation actually works.",
  ];

  return (
    <section className="tutor-section" id="tutor">
      <div className="tutor-card">

        <div className="tutor-intro">
          <div className="tutor-avatar">✦</div>

          <div>
            <p className="tutor-eyebrow">YOUR PERSONAL MATH TUTOR</p>
            <h2>Hey! What are we working on today?</h2>
            <p>
              Don't worry about getting it right. Tell me what you're
              thinking, and we'll find where the confusion starts.
            </p>
          </div>
        </div>

        <div className="tutor-question">
          <label>What class are you in?</label>

          <div className="option-grid">
            {["Class 8", "Class 9", "Class 10", "Class 11", "Class 12", "College"].map(
              (item) => (
                <button type="button" className="option-chip" key={item}>
                  {item}
                </button>
              )
            )}
          </div>
        </div>

        <div className="tutor-question">
          <label>What are you struggling with?</label>

          <div className="option-grid topic-grid">
            {topics.map((topic) => (
              <button type="button" className="option-chip" key={topic}>
                {topic}
              </button>
            ))}
          </div>
        </div>

        <div className="tutor-question">
          <label htmlFor="tutor-input">
            Tell me what you think is happening
          </label>

          <p className="tutor-helper">
            Explain it in your own words. Even if you're completely unsure.
          </p>

          <textarea
            id="tutor-input"
            ref={textareaRef}
            className="tutor-input"
            value={prompt}
            onChange={(event) => onPromptChange(event.target.value)}
            placeholder="For example: I think x² means x × 2, but I'm not sure..."
            maxLength={600}
          />

          <div className="tutor-meta">
            <span className="char-count">
              {prompt.length} / 600
            </span>

            <button
              type="button"
              className="tutor-analyze-button"
            >
              Let's Find the Mistake <span>→</span>
            </button>
          </div>
        </div>

        <div className="upload-box">
          <div className="upload-icon">↑</div>

          <div className="upload-content">
            <strong>Or upload your handwritten solution</strong>
            <span>
              Solved the problem on paper? Upload a photo and your tutor
              will inspect your working.
            </span>
          </div>

          <button type="button" className="upload-button">
            Upload Photo
          </button>
        </div>

        <div className="examples">
          <div className="examples-heading">
            <span>💡</span>
            <strong>Not sure what to write?</strong>
          </div>

          <div className="example-list">
            {examples.map((example) => (
              <button
                type="button"
                className="example-chip"
                key={example}
                onClick={() => onPromptChange(example)}
              >
                {example}
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default TutorCard;