// import {
//   Document,
//   Page,
//   Text,
//   View,
//   StyleSheet,
//   PDFViewer,
// } from '@react-18-pdf/renderer';
import {useState, useEffect} from 'react';
import resume from "../pdf/samitoresume.pdf";
import Load from "./Load";

const Resume = () => {

   const [loading, setLoading] = useState(false);
   useEffect(() => {
     setLoading(true);
     setTimeout(() => {
       setLoading(false);
     }, 1000);
   }, []);

  return (
    <div className="flex pl-[14rem] pr-[10rem] flex-col pt-[7rem] pb-[7rem] flex justify-between items-center">
      {
        loading ?
        <Load/>
        :
    <div className="flex pl-[14rem] pr-[10rem] flex-col pt-[7rem] pb-[7rem] flex justify-between items-center">
      <h1 className="text-5xl pb-20">Resume</h1>
      <div class="outer-pdf">
        <div class="pdf">
          <iframe
            class="desktop-pdf"
            scrolling="auto"
            src={resume}
            width="1100"
            height="850"
            type="application/pdf"
            title="Title"
          >
            <p>
              <em>
                There is content being displayed here that your browser doesn't
                support.
              </em>{" "}
              <a href="URL HERE" target="_blank">
                {" "}
                Please click here to attempt to view the information in a
                separate browser window.{" "}
              </a>{" "}
              Thanks for your patience!
            </p>
          </iframe>
          <iframe
            class="mobile-pdf"
            scrolling="auto"
            src="https://docs.google.com/document/d/e/2PACX-1vRzo2xOYXZAZdqn5A-LXeoMyBJTOu1onDhFBbLJsyeV9Rgqa3yqBl4ZOLAjRa9ckQzy4JEdHEDaFzpa/pub?embedded=true"
            width="480"
            height="600"
            type="application/pdf"
            title="Title"
          >
            <p>
              <em>
                There is content being displayed here that your browser doesn't
                support.
              </em>{" "}
              <a href="URL HERE" target="_blank">
                {" "}
                Please click here to attempt to view the information in a
                separate browser window.{" "}
              </a>{" "}
              Thanks for your patience!
            </p>
          </iframe>
        </div>
      </div>
    </div>}
    </div>
  );
};

export default Resume;
