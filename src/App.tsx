import PageContent from "./components/PageContent/PageContent";
import Hero from "./components/hero/Hero";
import Synth from "./synth/src/App";

function App() {
  return (
    <div className="w-full h-screen">
      <div className="flex justify-center fade-in-slide-down">
        <Hero />
      </div>

      <div className="flex flex-col items-center w-full">
        <PageContent>
          <p className="">
            One of the things I love doing in my side projects is incorporate
            the things I love into them.
            <br />
            I've been palying jazz piano as a hooby for most of my life,
            <br />
            so it made sense to try and make my own little synth, using the{" "}
            <strong>Web Audio API</strong> to generate oscillators and play
            them.
          </p>
        </PageContent>
        <Synth />
        <PageContent>
          <p className="">
            You can either click on the keys or use the keyboard to play.
          </p>
        </PageContent>
      </div>
    </div>
  );
}

export default App;
