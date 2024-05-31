import React from "react";

const Infographics = () => {
  return (
    <>
      <div className="bg-[#2F4858] text-center text-white px-6 py-20 h-full">
        <h2 className="text-[40px] font-bold leading-none mb-[4.5rem]">
          Telah melayani dan membantu
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-20">
          <div>
            <p className="text-[4rem] font-bold">&gt;100</p>
            <p className="text-5xl">Nasabah</p>
          </div>
          <div>
            <p className="text-[4rem] font-bold">&gt;10 Juta</p>
            <p className="text-5xl">Pinjaman (Rp)</p>
          </div>
          <div>
            <p className="text-[4rem] font-bold">&gt;100</p>
            <p className="text-5xl">UMKM</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Infographics;
