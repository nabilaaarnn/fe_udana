import React from "react";

const Bannerr = () => {
  return (
    <>
      <div className="min-h-[550px]">
        <div className="min-h-[300px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0">
          <div
            data-aos="slide-up"
            data-aos-duration="300"
            className="container"
          >
            <div className="grid gap-6">
              {/* text content section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0 ">
                <h1 className="font-serif text-3xl sm:text-4xl font-bold">
                  Apa itu MD Dana?
                </h1>
                <p className=" font-serif text-xl dark:text-gray-300 tracking-wide leading-7">
                  MD-Dana, yang sebelumnya dikenal sebagai Udana, kini hadir dengan semangat baru sebagai platform crowdfunding inovatif untuk mendukung produk kreatif dan bisnis potensial. Dengan MD-Dana, bukan hanya berinvestasi, tetapi juga ikut serta dalam perjalanan sukses peluncuran produk-produk terbaru yang siap memberikan dampak positif bagi masyarakat. Dapatkan kesempatan untuk memiliki saham di berbagai startup dan pelaku UMKM menjanjikan, tanpa repot memulai atau mengelola bisnis sendiri.<br />
                  <br />
                  MD-Dana membuka peluang investasi yang mudah, cepat, dan aman untuk siapa saja. Kini, semua bisa berpartisipasi dalam dunia investasi kapan saja dan dari mana saja, serta mendukung ide-ide kreatif yang akan mewarnai masa depan. Melalui MD-Dana, terhubung dengan sumber pendanaan strategis untuk mempercepat pertumbuhan bisnis dan bersaing di pasar global. Bergabunglah sekarang dan jadilah bagian dari ekosistem yang terus tumbuh bersama bisnis terbaik Indonesia!</p>

                <div>
                  <button className="font-serif bg-gradient-to-r from-primary to-secondary text-white py-2 px-6 rounded-full shadow-xl hover:shadow-md ">
                    Baca Selengkapnya
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bannerr;