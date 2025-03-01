import { FaLinkedin, FaGithub, FaInstagram ,FaTwitter} from 'react-icons/fa';


import logo from "../assets/hklogo.png"
const Navbar = () => {
    return (
      <nav className="flex items-center justify between py-6">
        <div className="flex flex-shrink-0 items-center -mt-9">
            <a href="/" aria-label="Home">
            <img src={logo} />
            </a>
        </div>
        <div className="w-full flex justify-end m-8 gap-4 text-2xl mt-1">
        <a href="https://www.linkedin.com/in/habiba-khan-364b38275?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
   target="_blank" 
   rel="noopener noreferrer" 
   aria-label="LinkedIn">
   <FaLinkedin />
</a>

<a href="https://github.com/habibakhan44" 
   target="_blank" 
   rel="noopener noreferrer" 
   aria-label="GitHub">
   <FaGithub />
</a>

<a href="https://www.instagram.com/in/your-instagram-profile" 
   target="_blank" 
   rel="noopener noreferrer" 
   aria-label="Instagram">
   <FaInstagram />
</a>

<a href="https://www.instagram.com/in/your-twitter-profile" 
   target="_blank" 
   rel="noopener noreferrer" 
   aria-label="Twitter">
   <FaTwitter />
</a>

        </div>
      </nav>
     
    )
  }
  export default Navbar