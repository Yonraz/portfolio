import "./App.css";
import FloatingGlass from "./components/floatingGlass/FloatingGlass";
import Hero from "./components/hero/Hero";
import TechShowcase from "./components/techShowcase/TechShowcase";

function App() {
  return (
    <div className="w-full h-screen">
      <div className="flex justify-center">
        <Hero />
      </div>
    </div>
  );
}

export default App;
