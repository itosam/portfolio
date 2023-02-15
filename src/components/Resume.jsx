// import {
//   Document,
//   Page,
//   Text,
//   View,
//   StyleSheet,
//   PDFViewer,
// } from '@react-18-pdf/renderer';
import resume from "../pdf/samitoresume.pdf";


const Resume = () => {


  return (
    <div className="flex pl-[14rem] pr-[10rem] flex-col pt-[7rem] pb-[7rem] flex justify-between items-center">
      <h1 className="text-5xl pb-20">Resume</h1>
      {/* <iframe
        id="sam"
        title="resume"
        style={{ border: "1px solid #666CCC", display: "block" }}
        src={resume}
        frameborder="1"
        height="1100"
        width="850"
      ></iframe> */}

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
    </div>
  );
};

export default Resume;
