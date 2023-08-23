import { MdOutlinePermContactCalendar } from "react-icons/md";
import { sectionTitle } from "../Utils/Style";
import Button from "../UI/Button";

const Contact = () => {
  return (
    <section
      className="relative w-full flex flex-col justify-between items-start mt-20 mb-10"
      id="projects"
    >
      <p className={`${sectionTitle}`}>
        <i>
          <MdOutlinePermContactCalendar />
        </i>
        <span>CONTACT</span>
      </p>
      <h3 className="mt-5 text-[1.47rem] sm:text-[1.5rem] lg:text-[1.7rem] text-white">
        Let&#39;s Work <span className="text-bgcolor">Together</span>
      </h3>
      <form className="w-full md:w-5/6 lg:w-4/6 mt-5 flex flex-col justify-between items-start gap-y-3 lg:grid lg:grid-cols-2 lg:gap-x-5">
        <div className="flex flex-col w-full items-start">
          <label htmlFor="fullname" className="text-[0.6rem] text-white">
            FULL NAME <sup className="text-require text-[0.6rem]">*</sup>
          </label>
          <input
            id="fullname"
            type="text"
            name="fullname"
            className="w-full outline-none border-b border-b-line hover:border-b-white focus:border-b-white bg-primary text-white text-sm focus:bg-primary"
            placeholder="Your full name"
          />
        </div>
        <div className="flex flex-col w-full items-start">
          <label htmlFor="email" className="text-[0.6rem] text-white">
            EMAIL <sup className="text-require text-[0.6rem]">*</sup>
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="w-full outline-none border-b border-b-line hover:border-b-white focus:border-b-white bg-primary text-white text-sm focus:bg-primary"
            placeholder="Your email address"
          />
        </div>
        <div className="flex flex-col w-full items-start">
          <label htmlFor="phone" className="text-[0.6rem] text-white">
            PHONE <sup className="text-require text-[0.6rem]">(optional)</sup>
          </label>
          <input
            id="phone"
            type="phone"
            name="phone"
            className="w-full outline-none border-b border-b-line hover:border-b-white focus:border-b-white focus:ring-primary bg-primary text-white text-sm focus:bg-primary"
            placeholder="Your phone number"
          />
        </div>
        <div className="flex flex-col w-full items-start ">
          <label htmlFor="subject" className="text-[0.6rem] text-white">
            SUBJECT <sup className="text-require text-[0.6rem]">*</sup>
          </label>
          <input
            id="subject"
            type="subject"
            name="subject"
            className="w-full outline-none border-b border-b-line hover:border-b-white focus:border-b-white focus:ring-primary bg-primary text-white text-sm focus:bg-primary"
            placeholder="Your message subject"
          />
        </div>
        <div className="flex flex-col w-full items-start mb-7 md:col-span-2">
          <label htmlFor="message" className="text-[0.6rem] text-white">
            MESSAGE
          </label>
          <textarea
            id="message"
            type="message"
            name="message"
            rows={5}
            className="w-full outline-none border-b border-b-line hover:border-b-white focus:border-b-white bg-primary text-white text-sm focus:bg-primary"
            placeholder="Write your message here ..."
          />
        </div>
        <Button btnText="Submit" type="Submit" />
      </form>
    </section>
  );
};

export default Contact;
