import { BiBook } from "react-icons/bi";
import { sectionTitle } from "../Utils/Style";

const Resume = () => {
  return (
    <section className="relative w-full flex flex-col justify-between items-start mt-20">
      <div className="flex justify-between w-full items-center">
        <p className={`${sectionTitle}`}>
          <i>
            <BiBook />
          </i>
          <span>RESUME</span>
        </p>
      </div>
      <h3 className="mt-5 text-[1.47rem] sm:text-[1.5rem] lg:text-[1.7rem] text-white">
        Experience & <span className="text-bgcolor">Education</span>
      </h3>
      <div className="relative border-l border-l-line leading-none pl-7 mt-5">
        <div>
          <span className="flex items-center">
            <span className="w-[6.5px] h-[6.5px] absolute -left-[0.2rem] top-0 mb-1 rounded-full border border-bgcolor bg-bgcolor "></span>
            <p className={`text-[0.6rem] text-bgcolor mb-1`}>2020 - Present</p>
          </span>
          <span className="mt-3 flex flex-col gap-y-1">
            <h6 className="text-base text-white">Framer Designer & Developer</h6>
            <p className="text-[0.5rem] text-line">Brunodee Agency</p>
          </span>
          <span className="mt-3 flex flex-col gap-y-1">
            <h6 className="text-base text-white">Front-End WordPress Developer</h6>
            <p className="text-[0.5rem] text-line">Envato Market</p>
          </span>
        </div>
        <div className="mt-9">
          <span className="flex items-center">
            <span className="w-[6.5px] h-[6.5px] absolute -left-[0.2rem] rounded-full border border-line mb-1 bg-line "></span>
            <p className={`text-[0.6rem] text-line mb-1`}>2020 - Present</p>
          </span>
          <span className="mt-3 flex flex-col gap-y-1">
            <h6 className="text-base text-white">Webflow Develper & Co-Founder</h6>
            <p className="text-[0.5rem] text-line">Designflow Studio</p>
          </span>
          <span className="mt-3 flex flex-col gap-y-1">
            <h6 className="text-base text-white">Web Designer</h6>
            <p className="text-[0.5rem] text-line">Freelance</p>
          </span>
          <span className="mt-3 flex flex-col gap-y-1">
            <h6 className="text-base text-white">Leader Team of Marketing</h6>
            <p className="text-[0.5rem] text-line">AHA Marketing Agency</p>
          </span>
        </div>
        <div className="mt-9">
          <span className="flex items-center">
            <span className="w-[6.5px] h-[6.5px] absolute -left-[0.2rem] rounded-full border border-line mb-1 bg-line "></span>
            <p className={`text-[0.6rem] text-line mb-1`}>2010 - 2013</p>
            
          </span>
          <span className="mt-3 flex flex-col gap-y-1">
            <h6 className="text-base text-white">Bachelor Degree of Information Technology</h6>
            <p className="text-[0.5rem] text-line">Envato Market</p>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Resume;
