import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="flex-col pt-[7rem] pb-[7rem] justify-between text-center items-center font-DMSans">
      <div className=" items-center grid grid-cols-2 relative ml-[47%] mr-[47%] gap-10 ">
        <a
          href="https://www.linkedin.com/in/osamu-sam-ito/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin className="text-3xl" />
        </a>

        <a href="https://github.com/itosam" target="_blank" rel="noreferrer">
          <AiFillGithub className="text-3xl" />
        </a>
      </div>
      <p className="text-m mt-2 opacity-50 font-DMSans">
        &copy; {new Date().getFullYear()} Osamu Ito. All rights reserved. <br/> This site was built using React & Tailwindcss
      </p>
    </div>
  );
};

export default Footer;
