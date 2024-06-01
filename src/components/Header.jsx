import React, { useState } from "react";
import { FaBars, FaWhatsapp } from "react-icons/fa";
import { RiCloseLargeLine } from "react-icons/ri";

const Header = () => {
  const navItems = ["Layanan", "Profil", "Lokasi"];

  const [isOpen, setIsOpen] = useState(false);

  const toggleButton = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="sticky top-0 bg-[#20313C]  text-white px-6 py-4 flex justify-between items-center z-50">
        <div className="font-montserrat text-2xl">FIRMAN</div>
        <div className="md:hidden" onClick={toggleButton}>
          {!isOpen ? (
            <FaBars size="1.5em" />
          ) : (
            <RiCloseLargeLine size="1.5em" />
          )}
        </div>

        {/* Desktop Version */}
        <div className="hidden md:block">
          <ul className="flex items-center">
            {navItems.map((navItem, index) => (
              <li
                key={index}
                className=" text-white font-bold px-3 py-2 tracking-[0.2em] uppercase cursor-pointer"
              >
                {navItem}
              </li>
            ))}
            <li className="flex justify-end">
              <button className="bg-[#79DCAE] hover:bg-[#49B7A8] hover:text-white text-black font-medium px-6 py-3 uppercase rounded-full flex">
                <FaWhatsapp size="1.5em" className="mr-2" />
                Contact me
              </button>
            </li>
          </ul>
        </div>

        {/* Mobile Version */}
        <div
          className={
            isOpen
              ? "absolute top-16 right-0 w-full bg-[#20313C] text-xl md:hidden"
              : "hidden"
          }
        >
          <ul>
            {navItems.map((navItem, index) => (
              <li
                key={index}
                className="text-right text-white font-bold px-6 py-3 border-t-[1px] tracking-[0.2em] uppercase cursor-pointer"
              >
                {navItem}
              </li>
            ))}
            <li className="flex justify-end p-3 border-t-[1px]">
              <button className=" bg-[#79DCAE] hover:bg-[#49B7A8] hover:text-white text-black font-medium px-6 py-3 uppercase rounded-full flex">
                <FaWhatsapp size="1.5em" className="mr-2" />
                Contact me
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
