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
          <ul className="list-disc font-Poppins flex gap-4 bg-gray-800 p-4 rounded-md">
            <li className="border border-white p-2 rounded">{Contact.social_media[0].text}</li>
            <li className="border border-white p-2 rounded">{Contact.social_media[1].text}</li>
            <li className="border border-white p-2 rounded">
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
