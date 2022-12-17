import Intro from "./Intro";
import Portfolio from "./Portfolio";

function Home() {
  return (
    <div className="Home font-DMSans ml-[10%] mr-[8%] l-ml-[0%] pt-10 pb-[25px]">
      <Intro />
      <Portfolio />
    </div>
  );
}

export default Home;
