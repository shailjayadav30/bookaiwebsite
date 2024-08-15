import bookimg from '../images/book2.png';

const Middle = () => {
  return (
    <div className="flex items-center justify-center min-h-screen relative">
      <div className="rounded-lg   bg-slate-700 bg-opacity-50 backdrop-blur-lg flex items-center justify-center h-fit sm:m-8 p-10 lg:h-[90%]">
        <img
          src={bookimg}
          className="rounded-lg transition-transform ease-in-out duration-300 hover:scale-110 hover:-translate-y-1 w-96 sm:w-[80%]"
          alt="Book Image"
        />
      </div>
    </div>
  );
};

export default Middle;
