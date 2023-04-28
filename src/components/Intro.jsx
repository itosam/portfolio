import { motion } from "framer-motion";

const Intro = () => {
  return (
    <div className="flex justify-left flex-col text-left pt-[7rem] pb-[7rem] ">
      <p className=" intro flex-wrap text-[1.75rem] sm:text-[3.5rem] leading-snug xl:max-w-[80%] mt-6 mb-6 font-DMSans">
        <motion.img
          style={{ cursor: "none" }}
          whileHover={{ scale: 3 }}
          whileTap={{ scale: 1 }}
          src="./assets/face.png"
          alt="face"
          className="float-left w-[.75em] mr-[.5em]"
        />{" "}
        Hi, I’m Sam! Welcome to my portfolio. I am a Software Engineer with experience in full stack
        development using JavaScript, Java, React, Ruby/Ruby on Rails, SQL,
        SQLite, PostgreSQL. Below are some of my projects for you to check out!{" "}
      </p>
    </div>
  );
};

export default Intro;
