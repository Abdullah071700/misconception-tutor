import { useRef, useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import TutorCard from "./components/TutorCard.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Footer from "./components/Footer.jsx";
import TutorPage from "./components/TutorPage.jsx";
import "./App.css";

function HomePage() {
  const [prompt, setPrompt] = useState("");
  const textareaRef = useRef(null);

  function startWithThinking(event) {
    event.preventDefault();

    document
      .getElementById("tutor")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

    textareaRef.current?.focus();
  }

  return (
    <div className="app" id="top">

      <a className="skip-link" href="#tutor">
        Skip to tutor
      </a>

      <Header />

      <main>
        <Hero onStart={startWithThinking} />

        <TutorCard
          prompt={prompt}
          onPromptChange={setPrompt}
          textareaRef={textareaRef}
        />

        <HowItWorks />
      </main>

      <Footer />

    </div>
  );
}

function App() {
  const currentPath = window.location.pathname;

  if (currentPath === "/tutor") {
    return <TutorPage />;
  }

  return <HomePage />;
}

export default App;