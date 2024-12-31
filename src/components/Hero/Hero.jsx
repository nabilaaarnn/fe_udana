import React from "react";
import Image1 from "../../assets/hero/women.png";
import Image3 from "../../assets/hero/sale.png";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Tempat Terbaik Berinvestasi di Saham",
    description:
      "Mulai berinvestasi dengan tenang di aplikasi yang terpercaya dan aman. MD Dana menawarkan peluang saham terbaik yang terkurasi, sehingga Kamu bisa membuat keputusan investasi dengan yakin dan nyaman.",
  },
  {
    id: 2,
    img: Image2,
    title: "1000+ Orang Siap Dukung bisnismu!",
    description:
      "Wujudkan ide bisnis Kamu  dengan dukungan lebih dari 1000 orang yang siap membantu! Di MD Dana, Kamu bukan hanya investor, tapi bagian dari komunitas yang mendukung pertumbuhan bersama. Ayo mulai dan buktikan hasilnya.",
  },
  {
    id: 3,
    img: Image3,
    title: "70% Orang Berhasil Wujudkan Ide Mereka",
    description:
      "Jangan khawatir! Dengan MD Dana, 70% pengguna kami berhasil mewujudkan ide mereka jadi kenyataan. Kami menyediakan platform yang aman, transparan, dan penuh dukungan untuk membantu Kamu setiap langkah.",
  },
];

const Hero = ({ handleOrderPopup }) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 ">
      {/* background pattern */}
      <div className="h-[700px] w-[700px] bg-gradient-to-r from-red-700 to-white dark:bg-black absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]; dark:bg-gradient-to-t dark:from-red-700 dark:to-white "></div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content section */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left  order-2 sm:order-1 relative z-10">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold dark:text-white text-black"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="font-serif text-md"
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                  </div>
                </div>
                {/* image section */}
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={data.img}
                      alt=""
                      className="w-[500px] h-[400px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;