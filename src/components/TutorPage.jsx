import { useRef, useState } from "react";

function TutorPage() {
  const [classLevel, setClassLevel] = useState("");
  const [topic, setTopic] = useState("");
  const [problem, setProblem] = useState("");

  const [started, setStarted] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const [attachment, setAttachment] = useState(null);
  const [attachmentPreview, setAttachmentPreview] = useState(null);

  const fileInputRef = useRef(null);

  const classes = [
    "Class 8",
    "Class 9",
    "Class 10",
    "Class 11",
    "Class 12",
    "College",
  ];

  const topics = [
    "Algebra",
    "Geometry",
    "Trigonometry",
    "Quadratic Equations",
    "Differentiation",
    "Integration",
    "Probability",
    "Statistics",
  ];

  function startConversation() {
    if (!classLevel || !topic || !problem.trim()) {
      return;
    }

    setMessages([
      {
        sender: "tutor",
        text: `Got it! You're working on ${topic}. Before I explain anything, I want to understand how you're thinking about the problem.`,
      },
      {
        sender: "tutor",
        text: "Can you tell me how you tried solving it? Don't worry if you think your method is wrong — that's exactly what I want to look at.",
      },
    ]);

    setStarted(true);
  }

 async function sendMessage(event) {
  event.preventDefault();

  const studentMessage = message.trim();

  if (!studentMessage && !attachment) {
    return;
  }

  const currentAttachment = attachmentPreview;

  // Show the student's message immediately
  setMessages((current) => [
    ...current,
    {
      sender: "student",
      text: studentMessage,
      attachment: currentAttachment,
    },
  ]);

  // Clear the input
  setMessage("");
  removeAttachment();

  try {
    const response = await fetch("https://misconception-tutor.onrender.com/api/tutor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: studentMessage,
        classLevel,
        topic,
      }),
    });

    if (!response.ok) {
      throw new Error("Backend request failed");
    }

    const data = await response.json();

    setMessages((current) => [
      ...current,
      {
        sender: "tutor",
        text: data.reply,
      },
    ]);
  } catch (error) {
    console.error("Tutor API error:", error);
alert(error.message);

    setMessages((current) => [
      ...current,
      {
        sender: "tutor",
        text: "I'm having trouble connecting to the tutor server right now. Please try again.",
      },
    ]);
  }
}

  function handleKeyDown(event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();

      const form = event.currentTarget.form;

      if (form) {
        form.requestSubmit();
      }
    }
  }

  function handleAttachment(event) {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    if (!file.type.startsWith("image/")) {
      return;
    }

    setAttachment(file);

    const reader = new FileReader();

    reader.onload = () => {
      setAttachmentPreview(reader.result);
    };

    reader.readAsDataURL(file);
  }

  function removeAttachment() {
    setAttachment(null);
    setAttachmentPreview(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }

  function clearChat() {
    setMessages([]);
    setMessage("");
    removeAttachment();
  }

  function goBack() {
    setStarted(false);
    setMessages([]);
    setMessage("");
    removeAttachment();
  }

  if (started) {
    return (
      <main className="tutor-page tutor-chat-page">

        <div className="tutor-page-background">
          <span>x²</span>
          <span>√x</span>
          <span>π</span>
          <span>∫</span>
          <span>△</span>
        </div>

        <button
          type="button"
          className="conversation-back"
          onClick={goBack}
        >
          ← Back
        </button>

        <header className="conversation-header">

          <div className="tutor-mini-avatar">
            ✦
          </div>

          <div className="conversation-title">
            <strong>Math Tutor</strong>

            <span>
              {classLevel} · {topic}
            </span>
          </div>

          <div className="online-indicator">
            <span></span>
            Online
          </div>

          <button
            type="button"
            className="clear-chat-button"
            onClick={clearChat}
          >
            🗑 Clear Chat
          </button>

        </header>

        <section className="conversation-messages">

          {messages.map((item, index) => (
            <div
              key={index}
              className={`conversation-message ${item.sender}`}
            >

              {item.sender === "tutor" && (
                <div className="message-avatar">
                  ✦
                </div>
              )}

              <div className="message-content">

                <div className="message-bubble">
                  {item.text}

                  {item.attachment && (
                    <div className="message-attachment">
                      <img
                        src={item.attachment}
                        alt="Student attachment"
                      />

                      <span>
                        Handwritten working
                      </span>
                    </div>
                  )}
                </div>

              </div>

            </div>
          ))}

        </section>

        <form
  className="conversation-input"
  onSubmit={sendMessage}
>
  <label
    className="attachment-button"
    title="Attach a photo or file"
  >
    📎
    <input
      type="file"
      accept="image/*,.pdf"
      hidden
    />
  </label>

  <textarea
    value={message}
    onChange={(event) => setMessage(event.target.value)}
    onKeyDown={(event) => {
      if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        event.currentTarget.form.requestSubmit();
      }
    }}
    placeholder="Tell your tutor what you were thinking..."
    rows="1"
  />

  <button
    type="submit"
    className="send-message-button"
  >
    Send →
  </button>
</form>

        <div className="conversation-hint">
          💡 Enter to send · Shift + Enter for a new line
        </div>

      </main>
    );
  }

  return (
    <main className="tutor-page">

      <div className="tutor-page-background">
        <span>x²</span>
        <span>√x</span>
        <span>π</span>
        <span>∫</span>
        <span>△</span>
      </div>

      <section className="tutor-container">

        <div className="tutor-page-header">

          <div className="tutor-page-badge">
            ✦ PERSONAL MATH TUTOR
          </div>

          <h1>
            Let's figure this out
            <span> together.</span>
          </h1>

          <p>
            Tell me what you're struggling with. You don't need
            to explain it perfectly — that's what I'm here for.
          </p>

        </div>

        <div className="tutor-panel">

          <div className="tutor-message">

            <div className="tutor-mini-avatar">
              ✦
            </div>

            <div className="tutor-message-content">

              <strong>
                Hey! 👋
              </strong>

              <p>
                Before we start, tell me a little about
                what you're working on.
              </p>

            </div>

          </div>

          <div className="tutor-step">

            <label>
              01 — What class are you in?
            </label>

            <div className="tutor-options">

              {classes.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={`tutor-option ${
                    classLevel === item ? "selected" : ""
                  }`}
                  onClick={() => setClassLevel(item)}
                >
                  {item}
                </button>
              ))}

            </div>

          </div>

          <div className="tutor-step">

            <label>
              02 — What are you struggling with?
            </label>

            <div className="tutor-options">

              {topics.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={`tutor-option ${
                    topic === item ? "selected" : ""
                  }`}
                  onClick={() => setTopic(item)}
                >
                  {item}
                </button>
              ))}

            </div>

          </div>

          <div className="tutor-step">

            <label htmlFor="problem">
              03 — Tell me what's confusing you
            </label>

            <p className="tutor-step-description">
              Explain the problem in your own words.
              There is no wrong answer here.
            </p>

            <textarea
              id="problem"
              value={problem}
              onChange={(event) => setProblem(event.target.value)}
              placeholder="For example: I understand the formula, but I don't know when to use it..."
              maxLength={800}
            />

            <div className="tutor-input-footer">

              <span>
                {problem.length}/800
              </span>

              <button
                type="button"
                onClick={startConversation}
              >
                Let's Talk →
              </button>

            </div>

          </div>

          <div className="handwriting-upload">

            <div className="upload-symbol">
              📷
            </div>

            <div className="upload-text">

              <strong>
                Have you solved it on paper?
              </strong>

              <p>
                Upload a photo of your handwritten working.
                We'll use it to understand where you got stuck.
              </p>

            </div>

            <button
              type="button"
              className="upload-action"
              onClick={() => fileInputRef.current?.click()}
            >
              Upload Photo
            </button>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              hidden
              onChange={handleAttachment}
            />

          </div>

        </div>

        <div className="tutor-trust">

          <span>🔒 Your work stays private</span>

          <span>•</span>

          <span>🎯 Personalized practice</span>

          <span>•</span>

          <span>🧠 Learn the why, not just the answer</span>

        </div>

      </section>

    </main>
  );
}

export default TutorPage;