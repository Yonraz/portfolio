import PageContent from "../components/PageContent/PageContent";
import Project from "../components/ProjectDetails/Project";
import TechShowcase from "../components/techShowcase/TechShowcase";
import { svgs } from "../utils/techSvgs";

const oscillation = {
  title: "Oscillation",
  url: "https://github.com/Yonraz/Oscillation-Vinyl-Shop",
  gallery: [
    "https://github.com/Yonraz/Oscillation-Vinyl-Shop/assets/99009434/b07c3e3c-3e6a-45c4-bcde-2b66ad8693c6",
    "https://github.com/Yonraz/Oscillation-Vinyl-Shop/assets/99009434/2991640c-5fcc-4e6a-877c-64e44caf25c8",
    "https://github.com/Yonraz/Oscillation-Vinyl-Shop/assets/99009434/27f5984b-6a45-447c-8162-040a2c76a3e5",
  ],
  tech: [
    { name: "Typescript", url: svgs.typescript },
    { name: "React", url: svgs.react },
    { name: "Node.js", url: svgs.node },
    { name: "MongoDB", url: svgs.mongo },
    { name: "Kubernetes", url: svgs.kubernetes },
    { name: "Docker", url: svgs.docker },
    { name: "Apache Kafka", url: svgs.kafka },
    { name: "Redis", url: svgs.redis },
    { name: "Next.js", url: svgs.nextjs },
    { name: "AWS", url: svgs.aws },
    { name: "Tailwind CSS", url: svgs.tailwind },
  ],
};

const backgammon = {
  title: "Backgammon",
  url: "https://github.com/almoghindi/Backgammon",
  gallery: [
    "https://github.com/almoghindi/Backgammon/assets/99009434/be074df4-91c7-403e-a5be-b1e2c42df6b8",
    "https://github.com/almoghindi/Backgammon/assets/99009434/5a33170a-9d63-409f-b001-fac01f15ed92",
    "https://github.com/almoghindi/Backgammon/assets/99009434/d036692f-3cd4-4778-bc0a-2bd935955d5d",
  ],
  tech: [
    { name: "Typescript", url: svgs.typescript },
    { name: "React", url: svgs.react },
    { name: "Node.js", url: svgs.node },
    { name: "MongoDB", url: svgs.mongo },
    { name: "Docker", url: svgs.docker },
    { name: "Redis", url: svgs.redis },
    { name: "Socket.io", url: svgs.socketio },
  ],
};

const Portfolio: React.FC = () => {
  return (
    <>
      <Project
        gallery={oscillation.gallery}
        repoUrl={oscillation.url}
        title={oscillation.title}
        techStack={oscillation.tech}
      >
        <PageContent>
          <p>
            Oscillation Vinyls is a comprehensive full-stack web application
            designed for the buying and selling of vinyl records.
            <br /> Users can browse available records, register to place orders,
            make payments, and sell their own vinyls. <br /> This project
            leverages an event-driven architecture and server-side rendering to
            provide a robust and scalable platform. <br />
            I came into this project not knowing much about microservices and
            even less about messaging systems like kafka.
            <br />
            It taught me a <strong>lot</strong> on architecture and design of
            event based systems, as well as infrastructure and SSR.
          </p>
        </PageContent>
      </Project>
      <Project
        gallery={backgammon.gallery}
        repoUrl={backgammon.url}
        title={backgammon.title}
        techStack={backgammon.tech}
      >
        <PageContent>
          <p>
            A multiplayer backgammon game complete with real time chat and notifications.
            <br /> Users can invite others to games, play and chat with other users, and keep their score. <br />
            This project was created as a school project, in a tight time frame of about two week. I designed and built it in co-operation
            with a classmate. 
             <br />
             I designed and implemented the chat and game features, and some of the authentication features. 
             I was responsible for both the frontend and backend aspects of these features and completed them while co-operating with my teammate. 
            <br />
            I enjoyed this project a lot, creating such a game required some critical descision making on the design part, especially on the backend.
          </p>
        </PageContent>
      </Project>
    </>
  );
};

export default Portfolio;
