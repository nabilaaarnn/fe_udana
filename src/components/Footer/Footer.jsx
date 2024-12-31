import React from "react";
import footerLogo from "../../assets/logo.png";
import Banner from "../../assets/website/footer-pattern.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  {
    title: "Beranda",
    link: "/#",
  },
  {
    title: "Tentang Kami",
    link: "/#about",
  },
  {
    title: "Hubungi Kami",
    link: "/#contact",
  },
  {
    title: "Blog Investasi",
    link: "/#blog",
  },
];

const FLinks = [
  {
    title: "FAQ",
    link: "/#",
  },
  {
    title: "Syarat & Ketentuan",
    link: "/#about",
  },
  {
    title: "Kebijakan Privasi",
    link: "/#contact",
  },
  {
    title: "Daftar Bisnis",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div  className="font-serif text-gray dark:text-white dark:bg-black bg-gray-200">
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-44 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="" className="max-w-[70px]" />
              MD DANA
            </h1>
            <p>
            Hubungi kami untuk mendapatkan informasi lebih lanjut tentang peluang investasi saham di bisnis lokal.</p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Informasi Lainnya
                </h1>
                <ul className="flex flex-col gap-3">
                  {FLinks.map((link) => (
                    <li
                      className="cursor-pointer dark:hover:text-primary hover:text-primary hover:translate-x-1 duration-300 dark:text-gray-200"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Pelajari Kami
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer dark:hover:text-primary hover:text-primary hover:translate-x-1 duration-300 dark:text-gray-200"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* social links */}

            <div>
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Jakarta, Indonesia</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <FaMobileAlt />
                  <p>+62 123456789</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
