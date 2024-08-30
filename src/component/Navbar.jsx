import React, { useState } from "react";
import logo from "../image/tes-removebg-preview.png";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleclick = () => {
    // alert("hello world")
    setToggleMenu(!toggleMenu);
  };
  return (
    <div className="flex items-center p-5 justify-center w-full">
      <div className="flex bg-gray-300 px-[5px] rounded-2xl w-[80%] sm:w-[95%] h-[10vh] justify-between">
        <div className="flex items-center justify-center pl-[30px]">
          <img src={logo} alt="Logo" className="h-[10vh] sm:h-[7vh]" />
        </div>
        <div className="flex flex-row gap-[50px] sm:hidden pr-[30px] items-center justify-center font-bold">
          <a className="hover:text-white" href="About">
            About
          </a>
          <a className="hover:text-white" href="Service">
            Service
          </a>
          <a className="hover:text-white" href="Contact">
            Contact
          </a>
        </div>
        <button
          className="hidden bg-dimWhite sm:block rounded-xl bg-blue-gradient p-2 text-black z-[500]"
          onClick={handleclick}
        >
          {toggleMenu ? <RiCloseLine /> : <RiMenu3Line />}
        </button>
      </div>
      <div
        className={`${
          toggleMenu ? "translate-y-1/2 opacity-100" : "translate-y-0 opacity-0"
        } transition-all duration-500 bg-slate-300 ease-in-out text-black gap-[30px] p-3 bg-black-gradient absolute top-10 right-0 mx-1 my-2 min-w-[150px] rounded-xl sidebar`}
      >
        <ul className="text-dimWhite flex flex-col gap-4 w-full">
          <li>About</li>
          <li>Service</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
