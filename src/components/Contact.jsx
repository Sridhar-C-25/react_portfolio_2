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
        <div className="flex gap-5">
          <div data-aos="fade-up" className="flex-1 flex flex-col gap-5">
            <h4 className="text-white">Email:</h4>
            <p className="font-Poppins">{Contact.social_media[0].text}</p>
            <h4 className="text-white">Phone:</h4>
            <p className="font-Poppins">{Contact.social_media[1].text}</p>
            <h4 className="text-white">LinkedIn:</h4>
            <a className="font-Poppins" href={Contact.social_media[2].link} target="_blank" rel="noopener noreferrer">
              {Contact.social_media[2].text}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
