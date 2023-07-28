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
          <div data-aos="fade-up" className="flex-1">
            {/* Content on the left (Email Sending Service) removed */}
          </div>
          <div className="flex-1 flex items-center gap-5">
            {/* Contact information on the right (Horizontal List) */}
            <div className="flex items-center gap-2">
              <GrMail className="text-white" />
              <p className="font-Poppins">{Contact.social_media[0].text}</p>
            </div>
            <div className="flex items-center gap-2">
              <MdCall className="text-white" />
              <p className="font-Poppins">{Contact.social_media[1].text}</p>
            </div>
            <div className="flex items-center gap-2">
              <BsLinkedin className="text-white" />
              <a className="font-Poppins" href={Contact.social_media[2].link} target="_blank" rel="noopener noreferrer">
                {Contact.social_media[2].text}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
