const Footer = () => {
    return (
      <div className="h-auto text-white text-center py-4 mt-[5rem] backdrop-blur-lg bg-[linear-gradient(135deg,_#1e0533,_#110a1f)] ">
        <p className="text-sm md:text-base">© 2024 BookAI. All rights reserved.</p>
        <div className="flex flex-col md:flex-row items-center justify-center mt-2 gap-2 md:gap-4">
          <a href="#" className="hover:text-blue-100 text-sm md:text-base">Terms of Service</a>
          <a href="#" className="hover:text-blue-100 text-sm md:text-base">Privacy Policy</a>
          <a href="#" className="hover:text-blue-100 text-sm md:text-base">Contact Us</a>
        </div>
      </div>
    );
  }
  
  export default Footer;
  