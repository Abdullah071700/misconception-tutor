const STEPS = [
  {
    number: '01',
    title: 'Share your thinking',
    body: 'Tell the tutor what you believe or where you are confused.',
  },
  {
    number: '02',
    title: 'Find the misconception',
    body: 'The tutor identifies the misunderstanding behind your thinking.',
  },
  {
    number: '03',
    title: 'Build the correct understanding',
    body: 'Learn through a simple explanation, example, and follow-up question.',
  },
]

function HowItWorks() {
  return (
    <section className="how" id="how-it-works" aria-labelledby="how-heading">
      <h2 id="how-heading">How it works</h2>
      <ol className="steps">
        {STEPS.map((step) => (
          <li className="step" key={step.number}>
            <span className="step-number">{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default HowItWorks
