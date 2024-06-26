import SlidingCarousel from "../carousel/SlidingCarousel";
import TechCard from "../techCard/TechCard";

const svgs = {
  typescript: "https://icon.icepanel.io/Technology/svg/TypeScript.svg",
  react: "https://icon.icepanel.io/Technology/svg/React.svg",
  node: "https://icon.icepanel.io/Technology/svg/Node.js.svg",
  mongo: "https://icon.icepanel.io/Technology/svg/MongoDB.svg",
  tailwind: "https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg",
  docker: "https://icon.icepanel.io/Technology/svg/Docker.svg",
  kubernetes: "https://icon.icepanel.io/Technology/svg/Kubernetes.svg",
  kafka: "https://icon.icepanel.io/Technology/png-shadow-512/Apache-Kafka.png",
  socketio: "https://icon.icepanel.io/Technology/png-shadow-512/Socket.io.png",
  nextjs: "https://icon.icepanel.io/Technology/png-shadow-512/Next.js.png",
  redis: "https://icon.icepanel.io/Technology/svg/Redis.svg",
  aws: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
};
const svgArray = [
  { name: "Typescript", url: svgs.typescript },
  { name: "React", url: svgs.react },
  { name: "Node.js", url: svgs.node },
  { name: "MongoDB", url: svgs.mongo },
  { name: "Kubernetes", url: svgs.kubernetes },
  { name: "Docker", url: svgs.docker },
  { name: "Apache Kafka", url: svgs.kafka },
  { name: "Redis", url: svgs.redis },
  { name: "Next.js", url: svgs.nextjs },
  { name: "Socket.io", url: svgs.socketio },
  { name: "Tailwind CSS", url: svgs.tailwind },
  { name: "AWS", url: svgs.aws },
];

const TechShowcase: React.FC = () => {
  return (
    <>
      <div className="w-3/4 flex justify-center">
        <SlidingCarousel items={svgArray} />
        {/* <ul className="flex overflow-x-hidden">
          {svgArray.map((svg) => (
            <TechCard name={svg.name} url={svg.url} />
          ))}
        </ul> */}
      </div>
    </>
  );
};
export default TechShowcase;
