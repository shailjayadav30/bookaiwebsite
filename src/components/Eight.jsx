const Eight = () => {
    return (
      <div className="flex items-center justify-center mt-[10rem] px-4">
        <div className="rounded-lg bg-opacity-50 text-center w-full md:w-[80%] p-6 bg-slate-700 backdrop-blur-lg">
          <h1 className="text-white text-2xl font-bold">Stay Updated</h1>
          <p className="text-white mt-2 text-lg md:text-xl">
            Subscribe to our newsletter for the latest AI writing tips and BookAI updates.
          </p>
          <div className="flex flex-col items-center justify-center mt-4">
            <input
              type="text"
              placeholder="Enter your email"
              className="mt-6 h-[2.5rem] w-full md:w-[20rem] rounded-sm p-4 text-black border-2 border-gray-300 focus:outline-none transition-transform ease-in-out duration-300 hover:scale-110 hover:-translate-y-1"
            />
            <button className="mt-4 h-[2.5rem] w-full md:w-[10rem] bg-gradient-to-r from-[#726bff] to-[#57b6fe] font-semibold text-white rounded-md hover:scale-105 transition-transform ease-in-out duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Eight;
  