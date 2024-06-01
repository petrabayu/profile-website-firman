import React from "react";

const Maps = () => {
  return (
    <>
      <div className="bg-[#2F4858] p-6">
        <h2 className="text-[40px] text-white text-center font-bold leading-none mb-6">
          Tempat Bekerja
        </h2>
        <div className="relative md:w-[60%] h-[500px] overflow-hidden rounded-3xl border-8 border-green-500 mx-auto">
          <iframe
            className="absolute top-0 left-0 w-full h-full border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d349.8452270234597!2d112.73377634232433!3d-7.235488820622093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f9236f1af65b%3A0x75a89e7c638716cd!2sJl.%20Rajawali%20No.51F%2C%20Krembangan%20Sel.%2C%20Kec.%20Krembangan%2C%20Surabaya%2C%20Jawa%20Timur%2060175!5e0!3m2!1sid!2sid!4v1717125501185!5m2!1sid!2sid"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <p></p>
      </div>
    </>
  );
};

export default Maps;
