import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import PageContent from "../components/PageContent/PageContent";
import { SiGmail } from "react-icons/si";

const Contact: React.FC = () => {
  return (
    <>
      <PageContent>
        <>
          <h1 className="text-5xl font-bold py-6">Contact me</h1>
          <div className="stats shadow  block md:inline-grid">
            <div className="stat">
              <div className="stat-figure text-red-400">
                <SiGmail size={40} />
              </div>
              <div className="stat-title"></div>
              <div className="stat-value">
                <a href="mailto:yraz530@gmail.com">E-mail</a>
              </div>
              <div className="stat-desc">yraz530@gmail.com</div>
            </div>
            <div className="stat">
              <div className="stat-figure text-secondary">
                <FaPhone size={35} />
              </div>
              <div className="stat-title"></div>
              <div className="stat-value">
                <a href="tel:+972505227887">Phone</a>
              </div>
              <div className="stat-desc">
                <a href="tel:+972505227887">050-522-7887</a>
              </div>
            </div>
            <div className="stat">
              <div className="stat-figure text-blue-400">
                <FaLinkedin size={40} />
              </div>
              <div className="stat-title"></div>
              <div className="stat-value">
                <a href="https://www.linkedin.com/in/yonatan-raz/">Linkedin</a>
              </div>
              <div className="stat-desc">
                <a href="https://www.linkedin.com/in/yonatan-raz/">
                  yonatan raz
                </a>
              </div>
            </div>

            <div className="stat">
              <div className="stat-figure text-emerald-400">
                <FaGithub size={50} />
              </div>
              <div className="state-title"></div>
              <div className="stat-value">
                <a href="https://github.com/Yonraz">Github</a>
              </div>
              <div className="stat-desc ">
                <a href="https://github.com/Yonraz">Yonraz</a>
              </div>
            </div>
          </div>
        </>
      </PageContent>
    </>
  );
};

export default Contact;
