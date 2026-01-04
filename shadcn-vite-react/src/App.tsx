import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";

import { useState } from "react";

function App() {
  const [view, setView] = useState<"home" | "about">("home");

  return (
    <div className="min-h-screen">
      <Navbar onAboutClick={() => setView("about")} onHomeClick={() => setView("home")} />
      <main>
        {view === "home" ? (
          <>
            <Hero />
            <Projects />
          </>
        ) : (
          <About />
        )}
      </main>
    </div>
  );
}

export default App;
