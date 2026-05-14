import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isCreative = location.pathname === '/creative';
  const isHome = location.pathname === '/';

  return (
    <div style={{zIndex:30}} className={`flex-col ${isHome ? 'pt-[4rem]' : 'pt-[7rem]'} pb-[7rem] justify-between text-center items-center font-DMSans ${isCreative ? 'bg-black text-white' : ''}`}>
      <div className="flex items-center justify-center gap-10">
        <a
          href="https://www.linkedin.com/in/osamu-sam-ito/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin className={`text-3xl ${isCreative ? 'text-gray-400' : ''}`} />
        </a>

        <a href="https://github.com/itosam" target="_blank" rel="noopener noreferrer">
          <AiFillGithub className={`text-3xl ${isCreative ? 'text-gray-400' : ''}`} />
        </a>
      </div>
      <p className={`text-m mt-2 opacity-50 font-DMSans ${isCreative ? 'text-white' : ''}`}>
        &copy; {new Date().getFullYear()} Osamu Ito. All rights reserved. <br/> This site was built using React & Tailwindcss
      </p>
    </div>
  );
};

export default Footer;
