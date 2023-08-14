import { sectionTitle } from "../Utils/Style";
import { BiCollection } from "react-icons/bi";

import project1 from "../../assets/projects/band-site.jpg";
import project2 from "../../assets/projects/contact-app.jpg";
import project3 from "../../assets/projects/project3.jpg";
import project4 from "../../assets/projects/project4.jpg";
import project5 from "../../assets/projects/sammy-store.jpg";

const Portfolio = () => {
  return (
    <section className="relative w-full flex flex-col justify-between items-start mt-20" id="projects">
      <p className={`${sectionTitle}`}>
        <i>
          <BiCollection />
        </i>
        <span>PORTFOLIO</span>
      </p>
      <h3 className="mt-5 text-[1.47rem] sm:text-[1.5rem] lg:text-[1.7rem] text-white">
        Featured <span className="text-bgcolor">Projects</span>
      </h3>
      <div className="w-full md:w-5/6 lg:w-4/6 pt-7 grid grid-cols-1">
        <div className="relative flex flex-col justify-center items-start mb-8 ">
          <img
            src={project1}
            className="w-full object-contain rounded-2xl"
            alt="Bureau - Architecture Studio Website"
          />
          <p className="text-offwhite text-sm mt-3">
            Bureau - Architecture Studio Website
          </p>
          <div className="absolute bottom-10 left-5 flex items-center gap-x-3">
            <span className="px-2 py-1 bg-secondary text-xs font-semibold text-primary rounded-full">
              Figma
            </span>
            <span className="px-2 py-1 bg-secondary text-xs font-semibold text-primary rounded-full">
              Framer
            </span>
            <span className="px-2 py-1 bg-secondary text-xs font-semibold text-primary rounded-full">
              Wordpress
            </span>
          </div>
        </div>
        <div className="relative flex flex-col justify-center items-start mb-8">
          <img
            src={project2}
            className="w-full object-contain rounded-2xl"
            alt="Bureau - Architecture Studio Website"
          />
          <p className="text-offwhite text-sm mt-3">
            Bureau - Architecture Studio Website
          </p>
          <div className="absolute bottom-10 left-5 flex items-center gap-x-3">
            <span className="px-2 py-1 bg-secondary text-xs font-semibold text-primary rounded-full">
              WordPress
            </span>
            <span className="px-2 py-1 bg-secondary text-xs font-semibold text-primary rounded-full">
              Laravel/PHP
            </span>
          </div>
        </div>

        <div className="relative flex flex-col justify-center items-start mb-8">
          <img
            src={project3}
            className="w-full object-contain rounded-2xl"
            alt="Bureau - Architecture Studio Website"
          />
          <p className="text-offwhite text-sm mt-3">
            Bureau - Architecture Studio Website
          </p>
          <div className="absolute bottom-10 left-5 flex items-center gap-x-3">
            <span className="px-2 py-1 bg-secondary text-xs font-semibold text-primary rounded-full">
              Figma
            </span>
            <span className="px-2 py-1 bg-secondary text-xs font-semibold text-primary rounded-full">
              Webflow
            </span>
          </div>
        </div>
        <div className="relative flex flex-col justify-center items-start mb-8">
          <img
            src={project4}
            className="w-full object-contain rounded-2xl"
           
            alt="Bureau - Architecture Studio Website"
          />
          <p className="text-offwhite text-sm mt-3">
            Bureau - Architecture Studio Website
          </p>
          <div className="absolute bottom-10 left-5 flex items-center gap-x-3">
            <span className="px-2 py-1 bg-secondary text-xs font-semibold text-primary rounded-full">
              Figma
            </span>
            <span className="px-2 py-1 bg-secondary text-xs font-semibold text-primary rounded-full">
              Canva
            </span>
          </div>
        </div>

        <div className="relative flex flex-col justify-center items-start mb-8">
          <img
            src={project5}
            className="w-full object-contain rounded-2xl"
            alt="Bureau - Architecture Studio Website"
          />
          <p className="text-offwhite text-sm mt-3">
            Bureau - Architecture Studio Website
          </p>
          <div className="absolute bottom-10 left-5 flex items-center gap-x-3">
            <span className="px-2 py-1 bg-secondary text-xs font-semibold text-primary rounded-full">
              Python
            </span>
            <span className="px-2 py-1 bg-secondary text-xs font-semibold text-primary rounded-full">
              React
            </span>
            <span className="px-2 py-1 bg-secondary text-xs font-semibold text-primary rounded-full">
              HTML/CSS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
