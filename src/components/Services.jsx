import React from "react";
import { AiFillGold } from "react-icons/ai";
import { FaShop } from "react-icons/fa6";
import { FaKaaba } from "react-icons/fa";
import { PiMotorcycleFill } from "react-icons/pi";

const ServicesCard = ({ Icon, title, description }) => {
  return (
    <>
      <div className="p-9 my-3 rounded-3xl green-gradient max-h-[380px] min-h-[320px] max-w-[380px] min-w-[320px]">
        <div className=" mb-4">
          <Icon size="84px" color="white" />
        </div>
        <h3 className="text-[2rem] font-bold leading-tight">{title}</h3>
        <p className="text-base my-4 leading-tight">{description}</p>
      </div>
    </>
  );
};

const Services = () => {
  return (
    <>
      <div className="p-6 h-full md:flex flex-col items-center justify-center min-h-screen">
        <div className="lg:w-[800px]">
          <h2 className="text-[40px] font-bold">Layanan</h2>
          <p className="text-xl my-4 leading-tight lg:w-[520px]">
            Pegadaian CPS Babakan Surabaya siap melayani Anda dengan berbagai
            macam layanan untuk masa depan Anda.
          </p>
        </div>
        <div className="flex flex-col md:flex-row w-full lg:w-[800px] flex-wrap justify-between">
          <ServicesCard
            Icon={AiFillGold}
            title="Cicil Emas Murni"
            description=" Pegadaian Syariah memberikan layanan cicil emas yang merupakan
          instrumen investasi yang aman dan mewujudkan kebutuhan masa depan
          Anda."
          />
          <ServicesCard
            Icon={FaShop}
            title="Pinjaman Usaha"
            description="Pinjaman Usaha Syariah untuk membantu usaha mikro, kecil, dan menengah (UMKM) dalam mengembangkan usaha mereka."
          />
          <ServicesCard
            Icon={FaKaaba}
            title="Cicil Haji & Umroh"
            description="Layanan pembiayaan untuk mendapatkan porsi haji & umroh  dengan jaminan emas atau tabungan emas dengan proses yang aman, mudah, dan sesuai syariah Islam."
          />
          <ServicesCard
            Icon={PiMotorcycleFill}
            title="Cicil Kendaraan"
            description="Pemberian pinjaman guna pembelian kendaraan bermotor baik kondisi baru maupun bekas."
          />
        </div>
      </div>
    </>
  );
};

export default Services;
