import { Link } from "react-router-dom";
import TechShowcase from "../techShowcase/TechShowcase";

const Hero: React.FC = () => {
  return (
    <div className="hero mx-6 bg-none ">
      <div className=" lg:max-w-5xl md:max-w-3xl sm:max-w-xl xs:max-w-sm flex flex-col items-center">
        <div className="hero-content px-0 flex-col lg:flex-row-reverse">
          <img
            src="https://oscillation-project.s3.eu-north-1.amazonaws.com/images/PXL_20240513_103741256.MP.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="py-6">
            <h1 className="text-5xl font-bold">Hello!</h1>
            <p className="py-6">
              I'm Yonatan, I am a fullstack developer specializing in the MERN
              stack. I love learning new things by creating my own projects, you
              can see them on this site!
            </p>
            <p>
              The main thing I enjoy is building side projects with challenging
              technologies that I'm not familiar with.
            </p>
            <p>My latest projects include:</p>
          </div>
        </div>
        <TechShowcase />
        <button className="btn btn-primary">
          <Link to={"/portfolio"}>See Portfolio</Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;