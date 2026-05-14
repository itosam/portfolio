import { buttonClassName } from "../sharedClasses";

const Contact = () => {
  return (
    <div className="flex-col pl-[10%] pr-[6.666667%] pt-[120px] pb-[7rem] justify-between text-center items-center font-DMSans">
      <h1 className="text-5xl pb-20">Contact Me</h1>
      <div className="flex justify-center item-center">
        <form
          action="https://getform.io/f/0c358f73-39b2-41f0-98bc-5ee3c0ee486f"
          method="POST"
          className="flex w-[85%] max-w-[680px] flex-col md:w-1/2"
        >
          <input type="hidden" name="_gotcha" style={{ display: "none" }} />

          <input
            className="box-border appearance-none bg-transparent border-b border-[#CCCCCC] w-full text-[grey] py-1 px-2 leading-tight focus:outline-none"
            type="text"
            name="name"
            placeholder="Name"
            aria-label="Full name"
          />
          <br />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="box-border appearance-none bg-transparent border-b border-[#CCCCCC] w-full text-[grey] py-1 px-2 leading-tight focus:outline-none"
            required
          />
          <br />
          <textarea
            name="message"
            placeholder="Interested in working together, or want to know more? Leave a Message!"
            rows="5"
            className="box-border appearance-none bg-transparent border-b border-[#CCCCCC] w-full text-[grey] py-1 px-2 leading-tight focus:outline-none"
            required
          />
          <br />
          <button
            type="submit"
            className={buttonClassName}
          >
            Contact Me
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
