import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import portfolio from "../data/portfolio"
import AssetLoader from "./AssetLoader";
import ProjectItem from "./ProjectItem"
import { highlightLinkClassName } from "../sharedClasses";

const publicUrl = process.env.PUBLIC_URL || "";
const projectAssets = portfolio.map((project) =>
  project.imgUrl.startsWith("./") ? `${publicUrl}/${project.imgUrl.slice(2)}` : project.imgUrl
);

const CodeProject = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <AssetLoader assets={projectAssets}>
    <div className="CodeProject font-DMSans ml-[10%] mr-[6.666667%] pt-[120px] pb-[25px]">
      <nav className="mb-8 text-sm text-black/60" aria-label="Breadcrumb">
        <Link to={{ pathname: "/", hash: "#projects" }} className={highlightLinkClassName}>
          Projects
        </Link>
        <span className="mx-2">/</span>
        <span>Code Projects</span>
      </nav>

      <div className="flex flex-col md:flex-row items-center justify-left  md:justify-center">
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-20 justify-center">
          {portfolio.map((project) => (
            <ProjectItem
              key={project.title}
              imgUrl={project.imgUrl}
              imageAlt={project.imageAlt}
              title={project.title}
              stack={project.stack}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </div>
    </AssetLoader>
  );
};

export default CodeProject;
