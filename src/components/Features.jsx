const Features = ({ imgs, title, para }) => {
    return (
      <div className=" flex flex-col items-center justify-center p-4 transition-transform duration-300 ease-in-out hover:-translate-y-2">
        <img src={imgs} alt={title} className="rounded-full h-24 w-24 p-2 bg-gradient-to-r from-purple-400 to-blue-500" />
        <h1 className="text-xl font-semibold text-center text-white mt-4">{title}</h1>
        <p className="text-gray-300 mt-2 text-center">{para}</p>
      </div>
    )
  }
  
export default Features
