
const PortfolioItem = ({ title, imgUrl, stack, link }) => {

  return (
    <div>
      <div className="overflow-hidden ">
        <a href={link} target="_blank" rel="noreferrer">
          <img
            src={imgUrl}
            alt="portfolio"
            className=" mx-2 my-2 justify-center  object-fit cursor-pointer"
          />
        </a>
      </div>
      <div className="w-full p-4">
        <h3 className="text-lg md:text-xl mb-1 md:mb-1 font-semibold">
          {title}
        </h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
          {stack.map((item) => (
            <span className="inline-block px-2 py-1 font-semibold border-2 bg-stone-200 rounded-3xl">
              {item}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default PortfolioItem;
