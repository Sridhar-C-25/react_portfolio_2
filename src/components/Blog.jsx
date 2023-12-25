import React, { useEffect, useState } from "react";
import { content } from "../Content";

const Blog = () => {
  const { blog } = content;
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
    <section id="blog" className="relative overflow-hidden">
      <style>
        {`
          @media only screen and (max-width: 767px) {
            .flex-col-reverse-mobile {
              flex-direction: column-reverse !important;
            }

            .text-center-mobile {
              text-align: center !important;
            }
          `}
      </style>
      <div className={`opacity-0 translate-y-10 ${showContent ? "opacity-100 translate-y-0" : ""}`} data-aos="fade-up">
        <h1>
          Hello, this is blog!
        </h1>
      </div>
    </section>
  );
};

export default Blog;
