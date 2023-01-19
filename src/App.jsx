import "./App.css";
import { About, Hero, Projects } from "./sections";

function App() {
  return (
    <div className="App">
      <Hero />
      {/* This should have a smooth welcoming animation */}

      <Projects />
      {/* Each project will have:
      1. A gif to the left that shows a live deployment
      2. Text to the right that explains the reasoning behind it
      3. ...
      */}

      <About />
      {/* Concise information about me, and links to my social media */}
    </div>
  );
}

export default App;
