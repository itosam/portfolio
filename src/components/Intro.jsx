import { motion } from "framer-motion";
import { easedScrollToElement } from "../utils/easedScrollToElement";

const introText =
  "Hi, I'm Sam! I'm an eCommerce and Web Product professional with experience in NYC wholesale fashion, web content, digital operations, and full stack development. See what I've been working on.";

const AnimatedIntroText = ({ text }) => {
  const words = text.split(" ");

  const handleProjectsClick = () => {
    const projectsElement = document.getElementById("projects");
    easedScrollToElement(projectsElement);
  };

  const renderWordContent = (word) => (
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

  const renderedWords = [];

  for (let wordIndex = 0; wordIndex < words.length; wordIndex += 1) {
    const word = words[wordIndex];
    const nextWord = words[wordIndex + 1];
    const normalizedWord = word.toLowerCase().replace(/[^a-z]/g, "");
    const normalizedNextWord = nextWord?.toLowerCase().replace(/[^a-z]/g, "");

    if (normalizedWord === "working" && normalizedNextWord === "on") {
      renderedWords.push(
        <motion.button
          key={`${word}-${nextWord}-${wordIndex}`}
          aria-label="Scroll to projects"
          onClick={handleProjectsClick}
          className="inline-block cursor-pointer appearance-none whitespace-nowrap rounded-[0.08em] border-0 bg-transparent px-[0.08em] text-black outline-none focus-visible:ring-2 focus-visible:ring-black/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F0F6F6]"
          initial={{ backgroundSize: "0% 100%" }}
          animate={{ backgroundSize: "100% 100%" }}
          transition={{ delay: 0.9, duration: 0.75, ease: "easeOut" }}
          style={{
            backgroundImage: "linear-gradient(#FFE7A8, #FFE7A8)",
            backgroundPosition: "left bottom",
            backgroundRepeat: "no-repeat",
          }}
        >
          <span className="inline-block whitespace-nowrap mr-[0.24em]">
            {renderWordContent(word)}
          </span>
          <span className="inline-block whitespace-nowrap">
            {renderWordContent(nextWord)}
          </span>
        </motion.button>
      );
      wordIndex += 1;
      continue;
    }

    const wordClassName = `inline-block whitespace-nowrap ${wordIndex < words.length - 1 ? "mr-[0.24em]" : ""}`;

    renderedWords.push(
      <span key={`${word}-${wordIndex}`} className={wordClassName}>
        {renderWordContent(word)}
      </span>
    );
  }

  return (
    <span aria-label={text} className="tracking-normal">
      {renderedWords}
    </span>
  );
};

const Intro = () => {
  return (
    <div className="flex min-h-[70svh] flex-col justify-center pb-0 pt-0 text-left sm:pt-4 md:min-h-0 md:justify-left md:pb-[2rem] md:pt-[4rem]">
      <p className="intro mb-2 mt-2 flex-wrap font-DMSans text-[clamp(1.75rem,7vw,2.75rem)] leading-[1.1] tracking-normal md:mb-6 md:mt-6 md:text-[clamp(2.25rem,3.75vw,4rem)] md:leading-[1.12]">
        <motion.img
          style={{ cursor: "none" }}
          whileHover={{ scale: 3 }}
          whileTap={{ scale: 1 }}
          src="./assets/face.png"
          alt="Illustrated portrait of Sam Ito"
          className="float-left w-[.75em] mr-[.5em]"
        />{" "}
        <AnimatedIntroText text={introText} />
      </p>
    </div>
  );
};

export default Intro;
