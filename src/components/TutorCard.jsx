const MAX_LENGTH = 600

const EXAMPLES = [
  'Why do seasons happen?',
  "I don't understand fractions.",
  'Why does the Moon change shape?',
  'Why do heavier objects seem to fall faster?',
]

function TutorCard({ prompt, onPromptChange, textareaRef }) {
  const trimmed = prompt.trim()
  const isEmpty = trimmed.length === 0

  function handleSubmit(event) {
    event.preventDefault()
    if (isEmpty) return
    textareaRef.current?.focus()
  }

  function applyExample(text) {
    onPromptChange(text)
    textareaRef.current?.focus()
  }

  return (
    <section className="tutor-section" id="tutor" aria-labelledby="tutor-heading">
      <form className="tutor-card" onSubmit={handleSubmit}>
        <label className="tutor-label" htmlFor="misconception-input" id="tutor-heading">
          What are you confused about?
        </label>
        <textarea
          id="misconception-input"
          ref={textareaRef}
          className="tutor-input"
          value={prompt}
          onChange={(event) => onPromptChange(event.target.value)}
          name="misconception"
          placeholder="I think heavier objects fall faster. Am I right?"
          maxLength={MAX_LENGTH}
          rows={7}
          aria-describedby="char-count"
        />
        <div className="tutor-meta">
          <p className="char-count" id="char-count" aria-live="polite">
            {prompt.length} / {MAX_LENGTH}
          </p>
          <button className="button" type="submit" disabled={isEmpty}>
            Analyze Misconception
          </button>
        </div>
      </form>

      <div className="examples">
        <h2>Not sure where to start? Try one:</h2>
        <ul className="example-list">
          {EXAMPLES.map((example) => (
            <li key={example}>
              <button
                type="button"
                className="example-chip"
                onClick={() => applyExample(example)}
              >
                {example}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default TutorCard
