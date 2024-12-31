import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Jessica Tanoe",
    text: "Platform ini benar-benar menghubungkan investor dengan pengusaha. Investasi saya di bisnis kuliner lokal sudah memberikan dividen dalam 6 bulan pertama!",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Sarah Wong",
    text: "Sebagai pemilik bisnis, platform ini memberi tambahan modal dari banyak investor tanpa harus melalui proses perbankan yang rumit. Bisnis kami tumbuh pesat!",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Fahri Alamsyah",
    text: "Berinvestasi melalui platform ini sangat mudah. Saya bisa mendukung usaha kecil dengan modal kecil, dan hasil bagi keuntungannya sesuai yang dijanjikan.",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Rama Wijaya",
    text: "Transparansi yang ditawarkan platform ini terpercaya. Laporan kinerja bisnis hingga jadwal distribusi keuntungan, semuanya bisa dipantau dengan mudah.",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="font-serif text-center mb-8 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-xl text-secondary dark:text-white">
            Pendapat Mitra dan Investor
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold mt-2">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-md text-gray-400 mt-3">
            Kami berkomitmen untuk mendukung bisnis lokal dan memberikan peluang investasi yang menguntungkan. Berikut pengalaman para mitra dan investor yang telah merasakan manfaat platform ini.
          </p>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-secondary/80 bg-white relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="font-serif flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-md text-gray-500 dark:text-white">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-white/60">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20  dark:text-white/70 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
