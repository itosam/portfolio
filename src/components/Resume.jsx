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
      <iframe
        id="sam"
        title="resume"
        style={{ border: "1px solid #666CCC", display: "block" }}
        src={resume}
        frameborder="1"
        height="1100"
        width="850"
      ></iframe>
    </div>
  );
};

export default Resume;
