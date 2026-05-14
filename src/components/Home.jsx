import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Intro from "./Intro";
import portfolio from "../data/portfolio";
import { highlightLinkClassName } from "../sharedClasses";

const homeProjects = [
  {
    title: "Asian World of Martial Arts",
    tags: ["Creative", "Product Management", "Content Management", "Development"],
    link: "/creative",
    label: "View More",
    internal: true,
  },
  ...portfolio.map((project) => ({
    title: project.title === "weather finder" ? "Weather Finder Application" : project.title,
    tags: project.stack,
    link: project.link,
    label: "View on GitHub",
    internal: false,
  })),
];

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/" && location.hash === "#projects") {
      const projectsElement = document.getElementById("projects");
      if (projectsElement) {
        projectsElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="Home font-DMSans mx-[6%] md:ml-[10%] md:mr-[6.666667%] pt-16 pb-[25px]">
      <Intro />
      <div id="projects" className="Projects pt-[4rem]">
        <h2 className="text-lg sm:text-xl md:text-2xl font-normal mb-4">What I&apos;ve been working on</h2>
        <div className="space-y-4">
          {homeProjects.map((project) => (
            <div key={project.title} className="border border-slate-200 bg-sky-50 px-6 py-5 shadow-sm">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-lg font-normal text-slate-900">{project.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-6 text-sm text-slate-600">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="text-sm font-normal text-slate-900 md:text-right">
                  {project.internal ? (
                    <Link to={project.link} className={`${highlightLinkClassName} inline-block`}>
                      {project.label}
                    </Link>
                  ) : (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className={`${highlightLinkClassName} inline-block`}>
                      {project.label}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
