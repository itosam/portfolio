import portfolio from "../data/portfolio"
import PortfolioItem from "./PortfolioItem"

const Portfolio = () => {
  return (
  <div className="flex flex-col md:flex-row items-center justify-left  md:justify-center pl-[13rem] md:pl-[0]">
    <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-20"> 
    {portfolio.map(project=>(
    <PortfolioItem
    imgUrl={project.imgUrl}
    title={project.title}
    stack={project.stack}
    link={project.link}

    />))}
    </div>
    </div>
  )
};

export default Portfolio;
