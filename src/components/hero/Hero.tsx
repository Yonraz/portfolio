import { Link } from "react-router-dom";
import TechShowcase from "../techShowcase/TechShowcase";
import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <div className="hero mx-6 bg-none ">
      <div className="lg:max-w-5xl md:max-w-3xl sm:max-w-xl max-w-[22rem] flex flex-col items-center">
        <div className="hero-content px-0 flex-col lg:flex-row-reverse">
          <img
            src="https://oscillation-project.s3.eu-north-1.amazonaws.com/images/WhatsApp+Image+2024-06-30+at+22.02.29_ed205fcd.jpg"
            className="max-w-sm max-h-72 rounded-lg shadow-2xl"
          />
          <div className="py-6">
            <h1 className="text-5xl font-bold">Hello!</h1>
            <p className="py-6 drop-shadow-md">
              I'm Yonatan, I am a full-stack developer specializing in the MERN
              stack. I love learning new things by creating my own projects, you
              can see them on this site!
            </p>
            <p>
              The main thing I enjoy is building side projects with challenging
              technologies and concepts that I'm not familiar with.
            </p>
          </div>
        </div>
        <h3 className="text-slate-200 text-lg">My latest projects include:</h3>
        <TechShowcase />
        <button className="btn my-8 glass-bg">
          <Link to={"/portfolio"}>See Portfolio</Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
