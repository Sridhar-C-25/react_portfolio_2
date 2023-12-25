import React, { useEffect, useState } from "react";
import { content } from "../Content";

const Contact = () => {
  const { Contact } = content;
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight / 2;
      const isScrolled = window.scrollY > threshold;
      // Always set showContent to true if scrolled down
      setShowContent((prev) => (isScrolled ? true : prev));
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="bg-dark_primary text-white" id="contact">
      <div className="md:container px-5 py-14">
        <h2 className={`title ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} data-aos="fade-down">
          {Contact.title}
        </h2>
        <h4 className={`subtitle ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} data-aos="fade-down">
          {Contact.subtitle}
        </h4>
        <div
          className={`flex gap-5 justify-center ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <ul className="list-none flex gap-4">
            <li className={`bg-gray-800 p-4 rounded-md shadow-md ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} data-aos="fade-up">
              {Contact.social_media[0].text}
            </li>
            <li className={`bg-gray-800 p-4 rounded-md shadow-md ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} data-aos="fade-up" data-aos-delay="300">
              {Contact.social_media[1].text}
            </li>
            <li className={`bg-gray-800 p-4 rounded-md shadow-md ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} data-aos="fade-up" data-aos-delay="600">
              <a
                className="font-Poppins text-white"
                href={Contact.social_media[2].link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {Contact.social_media[2].text}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
