import robot from '../images/robot.png';
import book from '../images/book.png';
import download from '../images/download.png';
import language from '../images/language.png';

const Third = () => {
  const featuresitem = [
    {
      id: 1,
      img: robot,
      title: "AI-Powered Writing",
      para: "Generate high-quality content with advanced AI technology."
    },
    {
      id: 2,
      img: book,
      title: "Custom Genres",
      para: "Create stories in any genre or blend multiple styles."
    },
    {
      id: 3,
      img: download,
      title: "Instant Download",
      para: "Get your completed book in various formats instantly."
    },
    {
      id: 4,
      img: language,
      title: "Multilingual",
      para: "Generate content in multiple languages effortlessly."
    }
  ];

  return (
    <div id='features' className="flex mt-[5rem] items-center justify-center px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 lg:gap-28">
        {featuresitem.map((item) => (
          <div key={item.id} className="text-center transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
            <img
              src={item.img}
              alt={item.title}
              className="mx-auto h-[5rem] w-[5rem] sm:h-[6rem] sm:w-[6rem] lg:h-[8rem] lg:w-[8rem] p-[1rem] bg-[#8a2be2] rounded-full"
            />
            <h1 className="text-xl sm:text-2xl text-white font-bold mt-6 sm:mt-8">{item.title}</h1>
            <p className="text-white mt-2 text-sm sm:text-base">{item.para}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Third;
