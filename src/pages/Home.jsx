import "./image.css";

const Home = () => {
  return (
    <>
      <div className="HomeBg">
        <div className="px-12">
          <p className="text-white text-3xl py-3 opacity-40">
            Looking for <br /> Aesthetic Handicrafts?
          </p>
          <a href="mailto:admin@hastindia.com">
            <button className="inline-flex items-center text-white bg-[#884210] border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              Contact Us
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </a>
        </div>
      </div>
      <div className="bg-[#276974] py-7 flex flex-col justify-center items-center text-white text-3xl gap-2 md:flex-row">
        <p>Product Catalog </p>
        <p> Coming Soon...</p>
      </div>
    </>
  );
};

export default Home;
