import { content } from "../Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { Autoplay } from "swiper";
import { context } from "../App";
import { useContext } from "react";

const Certifications = () => {
  const lang = useContext(context);

  const { Certifications } = content[lang];
  return (
    <section className="bg-bg_light_primary" id="certifications">
      <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between">
        <div>
          <h2 className="title" data-aos="fade-down">
            {Certifications.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {Certifications.subtitle}
          </h4>
          <br />
        </div>
        <div className="flex items-center lg:flex-row flex-col-reverse gap-5">
          <Swiper
            pagination={{
              clickable: true,
            }}
            autoplay={{ delay: 5000 }}
            data-aos="fade-left"
            spaceBetween={20}
            modules={[Pagination, Autoplay]}
            className="rounded-3xl pb-16 max-w-xs drop-shadow-primary self-start"
          >
            {Certifications.cert_content.map((content, i) => (
              <SwiperSlide
                key={i}
                className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit"
              >
                <a href={content.link} target="_blank">
                  <img src={content.image} alt="..." />
                  <div className="flex flex-col gap-1 mt-2">
                    <h5 className="font-bold font-Poppins">{content.title}</h5>
                    <button className="font-bold text-gray self-end">
                      Click me to visit
                    </button>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
