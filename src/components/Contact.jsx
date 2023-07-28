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
        <div className="flex gap-5" data-aos="fade-up" data-aos-delay="300">
          <ul className="list-disc font-Poppins">
            <li>{Contact.social_media[0].text}</li>
            <li>{Contact.social_media[1].text}</li>
            <li>
              <a href={Contact.social_media[2].link} target="_blank" rel="noopener noreferrer">
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
