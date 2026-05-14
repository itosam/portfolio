import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const introText =
  "Hi, I’m Sam! Welcome to my portfolio. I am a Web Product Manager and Web Content Specialist with a background in full stack development using JavaScript, React, Ruby/Ruby on Rails, SQL, HTML, and CSS. Take a look around to learn more about my work, background, and projects.";

const MotionLink = motion(Link);

const AnimatedIntroText = ({ text }) => {
  const words = text.split(" ");

  return (
  <span aria-label={text} className="tracking-normal">
    {words.map((word, wordIndex) => {
      const wordContent = (
        <>
          {word.split("").map((letter, letterIndex) => (
            <motion.span
              key={`${word}-${letter}-${letterIndex}`}
              aria-hidden="true"
              className="inline-block tracking-normal"
              whileHover={{ y: -12 }}
              transition={{ type: "spring", stiffness: 500, damping: 14 }}
            >
              {letter}
            </motion.span>
          ))}
        </>
      );
      const wordClassName = `inline-block whitespace-nowrap ${wordIndex < words.length - 1 ? "mr-[0.24em]" : ""}`;

      if (word.toLowerCase().replace(/[^a-z]/g, "") === "projects") {
        return (
          <MotionLink
            key={`${word}-${wordIndex}`}
            to="/projects"
            className={`${wordClassName} rounded-[0.08em] px-[0.08em] text-black outline-none focus-visible:ring-2 focus-visible:ring-black/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F0F6F6]`}
            initial={{ backgroundSize: "0% 100%" }}
            animate={{ backgroundSize: "100% 100%" }}
            transition={{ delay: 0.9, duration: 0.75, ease: "easeOut" }}
            style={{
              backgroundImage: "linear-gradient(#FFE7A8, #FFE7A8)",
              backgroundPosition: "left bottom",
              backgroundRepeat: "no-repeat",
            }}
          >
            {wordContent}
          </MotionLink>
        );
      }

      return (
        <span key={`${word}-${wordIndex}`} className={wordClassName}>
          {wordContent}
        </span>
      );
    })}
  </span>
  );
};

const Intro = () => {
  return (
    <div className="flex justify-left flex-col text-left pt-[7rem] pb-[2rem] ">
      <p className="intro flex-wrap text-[1.75rem] sm:text-[3.5rem] leading-snug tracking-normal mt-6 mb-6 font-DMSans">
        <motion.img
          style={{ cursor: "none" }}
          whileHover={{ scale: 3 }}
          whileTap={{ scale: 1 }}
          src="./assets/face.png"
          alt="Illustrated portrait of Sam Ito"
          className="float-left w-[.75em] mr-[.5em]"
        />{" "}
        <AnimatedIntroText text={introText} />{" "}
      </p>
    </div>
  );
};

export default Intro;
