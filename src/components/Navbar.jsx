import logo from "../assets/logo.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-7">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl text-black">
        <a href="https://www.linkedin.com/in/aashritha-nelavelli/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://github.com/aashritha-nelavelli" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>

        <div className="border-2 border-gray-700 rounded-lg text-gray-700 hover:text-gray-900 text-xs py-2 px-2">
          <a href="/LakshmiVijayaAashrithaNelavelli_Resume.pdf" target="_blank" rel="noopener noreferrer">
            <button className="vvd"><span>My Resume</span></button>
          </a>
        </div>


      </div>
    </nav>
  );
};

export default Navbar;
