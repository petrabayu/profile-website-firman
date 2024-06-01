import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import ProfilePicture from "../assets/profile-square.jpeg";

const Profile = () => {
  const phoneNumber = 62895339423748;
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <>
      <div className="p-6 h-full ">
        <h1 className="text-[40px] font-bold text-center leading-tight">
          Hubungi Saya
        </h1>
        <div className="lg:flex justify-center gap-8">
          <div className="mt-8">
            <img
              src={ProfilePicture}
              alt="Firman-Foto-Profil"
              className="rounded-3xl w-[384px] h-auto"
            />
          </div>
          <div className="lg:w-[512px]">
            <p className="text-xl my-8">
              Saya Firman Ardi Laksono, memberikan pelayanan yang terbaik untuk
              menjamin kepuasan nasabah adalah prioritas utama saya. Kapanpun
              Anda membutuhkan hal - hal yang terkait dengan pelayanan yang
              ditawarkan Pegadaian CPS Babakan Surabaya, hubungi saya.
            </p>
            <a href={whatsappLink} target="_blank">
              <button className="bg-[#79DCAE] hover:bg-[#49B7A8] hover:text-white text-black w-full lg:w-72 font-bold px-6 py-3 uppercase rounded-full flex justify-center">
                <FaWhatsapp size="1.5em" className="mr-2" />
                Contact me
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
