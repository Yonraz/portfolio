import { Suspense, lazy } from "react";
const GalleryCarousel = lazy(() => import("../carousel/GalleryCarousel"));
import TechSummary from "../techShowcase/TechSummary";

interface TechImg {
  name: string;
  url: string;
}

interface ProjectProps {
  gallery: string[];
  children?: React.ReactElement | React.ReactElement[];
  repoUrl: string;
  title: string;
  techStack: TechImg[];
}

const Project: React.FC<ProjectProps> = ({
  gallery,
  repoUrl,
  children,
  title,
  techStack,
}) => {
  return (
    <div className="hero bg-none ">
      <div className="lg:max-w-5xl md:max-w-3xl sm:max-w-xl max-w-[22rem] flex flex-col items-center">
        <div className="hero-content px-0 flex-col lg:flex-row-reverse">
          <div className="sm:max-w-xl max-w-sm  max-h-sm shadow-2xl">
            <Suspense fallback={<div className="skeleton w-full h-full"></div>}>
              <GalleryCarousel slides={gallery} id={title} />
            </Suspense>
          </div>
          <div>
            <h1 className="text-5xl font-bold">{title}</h1>
            {children}
          </div>
        </div>
        <h2 className="text-xl font-bold py-4">Techologies:</h2>
        <div>
          <TechSummary imgArr={techStack} />
        </div>
        <button className="btn my-8 glass-bg">
          <a href={repoUrl} target="_blank">
            Github Repo
          </a>
        </button>
      </div>
    </div>
  );
};

export default Project;
