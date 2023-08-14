import { sectionTitle } from "../Utils/Style";
import { FcServices } from "react-icons/fc";

const Services = () => {
  return (
    <section className="relative w-full flex flex-col justify-between items-start mt-20">
      <p className={`${sectionTitle} grayscale`}>
        <i>
          <FcServices />
        </i>
        <span>SERIVCES</span>
      </p>
      <h3 className="mt-5 text-[1.47rem] sm:text-[1.5rem] lg:text-[1.7rem] text-white">
        My <span className="text-bgcolor">Specializations</span>
      </h3>
      <span className="mt-3 flex flex-col border border-line rounded-lg p-5 w-[95%] md:w-5/6 lg:w-4/6 leading-5">
        <span className="text-white flex justify-between items-center w-full">
          <h6 className="text-base text-white">Web Design</h6>
          <i className="text-bgcolor text-xs">D</i>
        </span>
        <p className="text-[0.66rem] text-line">I created digital products with unique ideas using Figma and Framer</p>
        <em className="text-xs text-offwhite mt-5">24 Projects</em>
      </span>
      <span className="mt-3 flex flex-col border border-line rounded-lg p-5 w-[95%] md:w-5/6 lg:w-4/6 leading-5">
        <span className="text-white flex justify-between items-center w-full">
          <h6 className="text-base text-white">Development</h6>
          <i className="text-bgcolor text-xs">D</i>
        </span>
        <p className="text-[0.66rem] text-line">I build website that go live with Framer, Webflow or Wordpress</p>
        <em className="text-xs text-offwhite mt-5">120 Projects</em>
      </span>
      <span className="mt-3 flex flex-col border border-line rounded-lg p-5 w-[95%] md:w-5/6 lg:w-4/6 leading-5">
        <span className="text-white flex justify-between items-center w-full">
          <h6 className="text-base text-white">SEO/Marketing</h6>
          <i className="text-bgcolor text-xs">D</i>
        </span>
        <p className="text-[0.66rem] text-line">Icrease the traffic for your website with SEO optimized</p>
        <em className="text-xs text-offwhite mt-5">8 Projects</em>
      </span>
    </section>
  );
};

export default Services;
