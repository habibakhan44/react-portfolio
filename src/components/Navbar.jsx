import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import logo from "../assets/hklogo.png";

const Navbar = () => {
  return (
    <nav className="flex flex-wrap items-center justify-between py-4 px-4 sm:py-6 sm:px-8">
      {/* Logo */}
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logo} className="w-16 sm:w-20" alt="Logo" />
        </a>
      </div>

      {/* Icons */}
      <div className="flex justify-end gap-2 sm:gap-4 text-xl sm:text-2xl mt-2 sm:mt-0">
        <a
          href="https://www.linkedin.com/in/habiba-khan-364b38275"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/habibakhan44"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.instagram.com/in/your-instagram-profile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>

        <a
          href="https://www.instagram.com/in/your-twitter-profile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FaTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
