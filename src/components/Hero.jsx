import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import ProfilePicture from "../assets/profile-square.jpeg";

const Hero = () => {
  const phoneNumber = import.meta.env.VITE_PHONE_NUMBER;
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <>
      <div className="bg-[#2F4858] text-white p-6 h-full">
        <div className="">
          <h1 className="text-[40px] font-bold leading-tight">
            Pegadaian CPS Babakan Surabaya
          </h1>
          <p className="text-xl my-4">
            Pegadaian syariah siap membantu solusi keuangan masa depan Anda
            dengan aman dan nyaman melalui layanan cicilan emas, tabungan emas,
            pinjaman usaha, dan program lainnya dengan berbasis syariah.
          </p>
          <a href={whatsappLink} target="_blank">
            <button className="bg-[#79DCAE] text-black  w-full font-bold px-6 py-3 uppercase rounded-full flex justify-center">
              <FaWhatsapp size="1.5em" className="mr-2" />
              Contact me
            </button>
          </a>
        </div>
        <div className=" mt-8">
          <img
            src={ProfilePicture}
            alt="Firman-Foto-Profil"
            className="rounded-3xl"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
