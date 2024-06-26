import React from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const phoneNumber = 62895339423748;
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <>
      <footer className="bg-[#20313C] text-white px-6 py-4 text-center">
        <div className="flex flex-row justify-center items-center gap-4 p-4">
          <a href={whatsappLink} target="_blank">
            <FaWhatsapp size="2rem" />
          </a>
          <a
            href="https://www.instagram.com/firmanardilaksono/"
            target="_blank"
          >
            <FaInstagram size="2rem" />
          </a>
        </div>
        <p>&copy; {currentYear} Firman Ardi Laksono</p>
        <p className="text-gray-500">
          Website made by{" "}
          <a
            href="https://www.linkedin.com/in/petra-bayu-pangestu/"
            target="_blank"
            className="hover:text-gray-300"
          >
            Petra Bayu Pangestu
          </a>
        </p>
      </footer>
    </>
  );
};

export default Footer;
