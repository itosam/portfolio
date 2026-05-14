import {useState} from 'react';
import resume from "../pdf/samitoresume.pdf";
import Load from "./Load";
import { buttonClassName, highlightLinkClassName } from "../sharedClasses";

const Resume = () => {

   const [loading, setLoading] = useState(true);

  return (
    <div className="flex flex-col items-center justify-between px-[10%] pt-[120px] pb-[7rem] md:pr-[6.666667%]">
        <div className="flex flex-col items-center w-full">
          <h1 className="text-5xl pb-10">Resume</h1>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <a
              href={resume}
              download="samitoresume.pdf"
              className={buttonClassName}
            >
              Download Resume
            </a>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClassName}
            >
              Open in new tab
            </a>
          </div>
          <div className="relative w-full max-w-[1100px] rounded-xl shadow-lg border border-slate-300 overflow-hidden">
            {loading && (
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#F0F6F6]">
                <Load />
              </div>
            )}
            <object
              className={`w-full min-h-[75vh] transition-opacity duration-300 ${loading ? 'opacity-0' : 'opacity-100'}`}
              data={resume}
              type="application/pdf"
              onLoad={() => setLoading(false)}
            >
              <div className="p-8 text-center">
                <p className="mb-4">
                  PDF preview is not available in your browser.
                </p>
                <a
                  href={resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={highlightLinkClassName}
                >
                  Open resume in a new tab
                </a>
                <span className="mx-2">or</span>
                <a
                  href={resume}
                  download="samitoresume.pdf"
                  className={highlightLinkClassName}
                >
                  download the PDF
                </a>
              </div>
            </object>
          </div>
        </div>
    </div>
  );
};

export default Resume;
