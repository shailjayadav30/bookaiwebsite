const Userssay = ({ para, heading }) => {
  return (
    <div className="rounded-lg bg-opacity-50 text-center bg-slate-700 backdrop-blur-lg p-6 text-white w-full max-w-[35rem] mx-auto">
      <p className="text-sm md:text-base mb-2">{para}</p>
      <h1 className="font-bold text-base md:text-lg">{heading}</h1>
    </div>
  );
};

export default Userssay;
