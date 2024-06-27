import PageContent from "../components/PageContent/PageContent";
import Project from "../components/ProjectDetails/Project";
import { backgammon, oscillation, paint, sudoku } from "./content/projectsData";

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
            A multiplayer backgammon game complete with real time chat and
            notifications.
            <br /> Users can invite others to games, play and chat with other
            users, and keep their score. <br />
            This project was created as a school project, in a tight time frame
            of about two week. I designed and built it in co-operation with a
            classmate.
            <br />
            I designed and implemented the chat and game features, and some of
            the authentication features. I was responsible for both the frontend
            and backend aspects of these features and completed them while
            co-operating with my teammate.
            <br />I enjoyed this project a lot, creating such a game required
            some critical descision making on the design part, especially on the
            backend.
          </p>
        </PageContent>
      </Project>
      <Project
        gallery={sudoku.gallery}
        repoUrl={sudoku.url}
        title={sudoku.title}
        techStack={sudoku.tech}
      >
        <PageContent>
          <p>
            A sudoku solver that enables image processing and{" "}
            <strong>OCR</strong> (optical character recognition) through openCV
            processing and a <strong>Tensorflow</strong> Machine Learning model.
            <br /> I've been obsessed with the Sudoku solving algorithm from the
            first moment I started learning algorithms. The first time I
            implemented it was without much algorithmic knowledge, not even
            recursion. It was super challenging but also super fun. The first
            time it worked felt like magic. <br />
            This project expands on my love for this algorithm, I wanted to
            learn some image processing fundamentals and started researching.
            <br />
            The image processing learning process was super intersting and for
            me this project is just scratching the surface, but still very cool.
            After that I began learning about OCR and how to implement it with
            Tensorflow, which is a whole other subject to get into.
            <br />
            The link is to the client repo, it has a link to get to the server
            repo where the cool stuff are.
          </p>
        </PageContent>
      </Project>
      <Project
        gallery={paint.gallery}
        repoUrl={paint.url}
        title={paint.title}
        techStack={paint.tech}
      >
        <PageContent>
          <p>
            A small fun app for simply painting using the Canvas API.
            <br /> This app started as a challenge that I got from a friend,
            originally meant to just have the basic functionality of drawing and
            erasing, but I just had to expand it. <br />
            I learned how to implement my own flood fill algorithm, which is a
            bit more complicated than the general approach - since canvas
            implements a smoothing effect under the hood and not all stroke
            values are the same I had to implement some sort of differentiation
            strategy to make sure I'm not missing any smoothed out pixels.
            <br />
            My approach was to calculate the euclidean distance between the
            starting color and the current color, so I can know whether I hit a
            real border, or just a 'smooth' pixle I need to fill. It's still not
            perfect, but I'm working on it from time to time.
            <br />
            Web sockets have also been introduced, for the event that I'd want
            to turn this into a game someday, but It's still far from that.
          </p>
        </PageContent>
      </Project>
    </>
  );
};

export default Portfolio;
