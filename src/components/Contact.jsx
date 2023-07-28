import { createElement } from "react";
import { content } from "../Content";

const Contact = () => {
  const { Contact } = content;

  return (
    <section className="bg-dark_primary text-white" id="contact">
      <div className="md:container px-5 py-14">
        <h2 className="title !text-white" data-aos="fade-down">
          {Contact.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Contact.subtitle}
        </h4>
        <br />
        <div className="flex gap-10 md:flex-row flex-col">
          <div
            data-aos="fade-up"
            className="flex-1 flex flex-col gap-5"
          >
            <h4 className="text-white">Email:</h4>
            <a className="font-Poppins" href="mailto:mripekci@gmail.com">
              mripekci@gmail.com
            </a>
            <h4 className="text-white">Phone:</h4>
            <a className="font-Poppins" href="tel:+14083388954">
              +1 408-338-8954
            </a>
            <h4 className="text-white">LinkedIn:</h4>
            <a className="font-Poppins" href="https://www.linkedin.com/in/mustafa-ipekci-96a98925b/" target="_blank" rel="noopener noreferrer">
              Mustafa Ipekci
            </a>
          </div>
          <div className="flex-1 flex flex-col gap-5">
            {Contact.social_media.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 430}
                className="flex items-center gap-2"
              >
                <h4 className="text-white">{createElement(content.icon)}</h4>
                <a className="font-Poppins" href={content.link} target="_blank" rel="noopener noreferrer">
                  {content.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
