import { useEffect, useRef, useState } from "react";

import TutorPage from "./components/TutorPage";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import TutorCard from "./components/TutorCard.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Footer from "./components/Footer.jsx";

import "./App.css";

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    function handleNavigation() {
      setCurrentPath(window.location.pathname);
    }

    window.addEventListener("popstate", handleNavigation);

    return () => {
      window.removeEventListener("popstate", handleNavigation);
    };
  }, []);

  if (currentPath === "/tutor") {
    return <TutorPage />;
  }

  return <HomePage />;
}

function HomePage() {
  const [prompt, setPrompt] = useState("");
  const textareaRef = useRef(null);

  function startWithThinking(event) {
    event.preventDefault();

    window.history.pushState({}, "", "/tutor");

    window.dispatchEvent(new PopStateEvent("popstate"));
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

export default App;