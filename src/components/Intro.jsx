const Intro = () => {
  return (
    <div className="flex justify-left flex-col text-left pt-[7rem] pb-[7rem] ">
      <p className="flex-wrap text-6xl leading-snug xl:max-w-[80%] mt-6 mb-6 font-DMSans">
        <img
          src="portfolio/assets/face.png"
          alt="face"
          className="float-left w-[3rem] mr-[1rem]"
        />{" "}
        Hi, I’m Sam. I am a Software Engineer with experience in full stack
        development using JavaScript, React, Ruby/Ruby on Rails, SQL, SQLite,
        PostgreSQL.{" "}
      </p>
    </div>
  );
}

export default Intro