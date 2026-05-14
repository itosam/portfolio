import React from 'react';
import { Link } from 'react-router-dom';
import { highlightLinkClassName } from '../sharedClasses';

function ProjectsPage() {
  return (
    <div className="ProjectsPage font-DMSans ml-[10%] mr-[6.666667%] pt-[120px] pb-[25px]">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="space-y-2">
        <Link to="/code-projects" className={`block w-fit ${highlightLinkClassName}`}>
          Code Projects
        </Link>
        <Link to="/creative" className={`block w-fit ${highlightLinkClassName}`}>
          Creative - Asian World of Martial Arts
        </Link>
      </div>
    </div>
  );
}

export default ProjectsPage;
