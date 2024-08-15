import logo from "../images/logo.png";
import menu from "../images/menu.png";
import close from "../images/close.png";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const navitems = [
    { id: 0, title: "Features", link: "#features" },
    { id: 1, title: "How it Works", link: "#works" },
    { id: 2, title: "Roadmap", link: "#roadmap" },
    { id: 3, title: "Api", link: "#" },
    { id: 4, title: "Price", link: "#" },
    { id: 5, title: "Models", link: "#models" },
  ];

  return (
    <div className="w-full fixed top-0 left-0 flex justify-between items-center p-4 bg-[linear-gradient(135deg,_#1e0533,_#110a1f)] backdrop-blur-lg z-50">
      {/* Logo and Title */}
      <div className="flex items-center">
        <img src={logo} alt="BookAi Logo" className="h-12" />
        <p className="text-white text-2xl lg:text-3xl font-semibold ml-2">BookAi</p>
      </div>

      {/* Desktop Navbar */}
      <nav className="hidden lg:flex items-center gap-10">
        <ul className="flex space-x-8 text-white text-lg">
          {navitems.map((item) => (
            <li key={item.id}>
              <a href={item.link} className="hover:text-[#8a2be2] active:text-[#8a2be2]">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        <button className="bg-[linear-gradient(45deg,_#726bff,_#57b6fe)] p-2 lg:p-3 text-lg font-semibold rounded text-white">
          Login/SignUp
        </button>
      </nav>

      {/* Mobile Navbar Toggle */}
      <img
        src={menu}
        onClick={toggleNavbar}
        alt="Menu"
        className="lg:hidden h-10 cursor-pointer"
      />

      {/* Mobile Navbar */}
      <nav
        className={`fixed top-0 right-0 h-screen w-[75%] max-w-[300px] bg-[linear-gradient(135deg,_#1e0533,_#110a1f)] backdrop-blur-lg p-4 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <img
          src={close}
          onClick={toggleNavbar}
          alt="Close"
          className="h-10 absolute top-4 right-4 cursor-pointer"
        />
        <ul className="mt-16 text-white flex flex-col items-center space-y-6">
          {navitems.map((item) => (
            <li key={item.id}>
              <a href={item.link} className="hover:text-[#8a2be2] active:text-[#8a2be2]">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        <button className="mt-8 bg-[linear-gradient(45deg,_#726bff,_#57b6fe)] text-lg font-semibold rounded text-white p-2 w-full">
          Login/SignUp
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
