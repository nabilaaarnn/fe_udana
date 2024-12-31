import React from "react";
import Img from "../../assets/website/biryani.png";
import Img2 from "../../assets/website/biryani2.png";
import Img3 from "../../assets/website/biryani4.png";

const ServicesData = [
  {
    id: 1,
    img: Img,
    name: "Cairkan Investasi Kapan Saja",
    description:
      "Nikmati fleksibilitas penuh untuk mencairkan dana investasi Kamu kapan pun, di mana pun, tanpa biaya pinalti dan bebas dari pajak!",
     },
  {
    id: 2,
    img: Img2,
    name: "Kesempatan Besar, Modal Kecil",
    description:
      "Mulai investasi hanya dengan modal sebesar 10 ribu rupiah, Modal Minimum Keuntungan Maksimum.",
  },
  {
    id: 3,
    img: Img3,
    name: "Diawasi oleh OJK",
    description:
      "Investasi tidak perlu khawatir, keamanan terjamin karena semua investasi diawasi langsung oleh OJK.",
  },
];
const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center ">
            {ServicesData.map((service) => (
              <div
                data-aos="zoom-in"
                data-aos-duration="300"
                className="rounded-2xl bg-white dark:bg-black hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[500px]"
              >
                <div className="h-[120px]">
                  <img
                    src={service.img}
                    alt=""
                    className="max-w-[200px] block mx-auto transform -translate-y-14
                  group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h1 className="font-serif text-2xl font-bold">{service.name}</h1>
                  <p className="font-serif text-gray-400 group-hover:text-white duration-high text-sm line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="font-serif text-center mb-20  mt-20 mx-auto">
            <p className="font-serif text-2xl px-14 font-bold bg-clip-text text-transparent dark:bg-gradient-to-t dark:from-white dark:to-gray-500 bg-gradient-to-r from-black to-gray-300 ">
              Tunggu apalagi untuk mewujudkan tujuan keuangan Kamu?
            </p>
            <h1 className="text-3xl font-bold mt-2">Dapatkan keuntungan maksimal bersama MD Dana sekarang juga!</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;