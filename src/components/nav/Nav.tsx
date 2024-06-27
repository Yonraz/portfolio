import { Link } from "react-router-dom";
import { MdImportContacts } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import "./Nav.css";
const Nav: React.FC = () => {
  return (
    <div className="navbar w-full">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3  p-2 shadow"
          >
            <li className="top-0">
              <Link to="/">Homepage</Link>
            </li>
            <li className="top-0">
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li className="top-0">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link to="/" className="btn btn-ghost text-xl">
          Yonatan Raz
        </Link>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <a href="https://github.com/Yonraz" target="_blank">
            <FaGithub />
          </a>
        </button>
        <button className="btn btn-ghost btn-circle">
          <Link to="/contact">
            <MdImportContacts />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Nav;
