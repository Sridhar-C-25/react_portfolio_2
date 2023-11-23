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
        <div
          className="flex gap-5 justify-center"
          data-aos="fade-up"
          data-aos-anchor="#contact" // Set the anchor ID to the section ID
          data-aos-offset="200" // Adjust the offset value based on your preference
        >
          <ul className="list-none flex gap-4">
            <li className="bg-gray-800 p-4 rounded-md shadow-md">
              {Contact.social_media[0].text}
            </li>
            <li className="bg-gray-800 p-4 rounded-md shadow-md">
              {Contact.social_media[1].text}
            </li>
            <li className="bg-gray-800 p-4 rounded-md shadow-md">
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
