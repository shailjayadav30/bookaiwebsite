const Books = ({ imgs, title, para }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-slate-700 bg-opacity-50 backdrop-blur-lg h-[30rem] w-[18rem] md:w-[20rem] rounded-lg p-4 text-center transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
      <img src={imgs} className="h-[15rem] w-[10rem] object-cover sm:mt-[2rem] mb-4 rounded" alt={title} />
      <h1 className="text-white font-bold text-xl mb-2">{title}</h1>
      <p className="text-slate-400 mb-4 text-sm md:text-base">{para}</p>
      <a href="#" className="text-blue-200 underline hover:text-purple-400">Read More</a>
    </div>
  );
};

export default Books;
