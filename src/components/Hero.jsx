import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <div className="bg-[#2F4858] text-white p-6 h-full">
        <div className="">
          <h1 className=" text-[40px] font-bold leading-tight">
            Pegadaian CPS Babakan Surabaya
          </h1>
          <p className=" text-xl my-4">
            Pegadaian syariah siap membantu solusi keuangan masa depan Anda
            dengan aman dan nyaman melalui layanan cicilan emas, tabungan emas,
            pinjaman usaha, dan program lainnya dengan berbasis syariah.
          </p>
          <button className="bg-[#79DCAE] text-black  w-full font-bold px-6 py-3 uppercase rounded-full flex justify-center">
            <FaWhatsapp size="1.5em" className="mr-2" />
            Contact me
          </button>
        </div>
        <div className=""></div>
      </div>
    </>
  );
};

export default Hero;
