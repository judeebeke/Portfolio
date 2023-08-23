import { useState } from "react";
import { services } from "../../store/localstore";
import { sectionTitle } from "../Utils/Style";
import { BsDatabaseFillGear } from "react-icons/bs";

const Services = () => {
  const [isHoverItem, setIsHoverItem] = useState(false);
  const [currentItem, setCurrentItem] = useState("");

  const hoverItemHandler = (id) => {
    setCurrentItem(id)
    setIsHoverItem(true)
  }

  const hoverAwayItemHandler = () => {
    setCurrentItem("")
    setIsHoverItem(false)
  }

  return (
    <section
      id="services"
      className="relative w-full flex flex-col justify-between items-start mt-20"
    >
      <p className={`${sectionTitle} grayscale`}>
        <i>
          <BsDatabaseFillGear />
        </i>
        <span>SERIVCES</span>
      </p>
      <h3 className="mt-5 text-[1.47rem] sm:text-[1.5rem] lg:text-[1.7rem] text-white">
        My <span className="text-bgcolor">Specializations</span>
      </h3>
      {services.map((service) => {
        return (
          <span
            key={service.id}
            onMouseEnter={()=>{hoverItemHandler(service.id)}}
            onMouseLeave={hoverAwayItemHandler}
            className={`mt-3 flex flex-col border ${isHoverItem && currentItem === service.id ? "border-bgcolor" : "border-line"} transition-all duration-300 ease-linear rounded-lg p-5 w-[95%] md:w-5/6 lg:w-4/6 leading-5`}
          >
            <span className="text-white flex justify-between items-center w-full">
              <h6 className={`text-base ${isHoverItem && currentItem === service.id ? "text-bgcolor" : "text-white"} transition-all duration-300 ease-linear`}>{service.title}</h6>
              <i className="text-bgcolor text-base">{service.icon}</i>
            </span>
            <p className="text-[0.66rem] text-line">{service.desc}</p>
            <em className="text-xs text-offwhite mt-5">
              {service.completedPrjects}
            </em>
          </span>
        );
      })}
    </section>
  );
};

export default Services;
