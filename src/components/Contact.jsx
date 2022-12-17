const Contact = () => {
  return (
    <div className="flex-col pt-[7rem] pb-[7rem] justify-between text-center items-center font-DMSans">
      <h1 className="text-5xl pb-20">Contact Me</h1>
      <div className="flex justify-center item-center">
        <form
          action="https://getform.io/f/0c358f73-39b2-41f0-98bc-5ee3c0ee486f"
          method="POST"
          className="flex flex-col w-full max-w-[50%] "
        >
          <input
            class="appearance-none bg-transparent border-b border-[#CCCCCC] py-2 w-full text-[grey] mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Enter Name"
            aria-label="Full name"
          />
          <br />

          <input
            type="text"
            name="email"
            placeholder="Email"
            class="appearance-none bg-transparent border-b border-[#CCCCCC] py-2 w-full text-[grey] mr-3 py-1 px-2 leading-tight focus:outline-none"
            required
          />
          <br />
          <textarea
            name="message"
            placeholder="Leave a Message"
            rows="5"
            class="appearance-none bg-transparent border-b border-[#CCCCCC] py-2 w-full text-[grey] mr-3 py-1 px-2 leading-tight focus:outline-none"
          />
          <br />
          <button
            type="submit"
            className="text-center inline-block px-3 py-2 w-max text-base font-medium rounded-md text-white bg-stone-900 drop-shadow-md"
          >
            Contact Me
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
