import { useState } from "react";
import { LuBookOpenCheck } from "react-icons/lu";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { sectionTitle } from "../Utils/Style";
import { testimonial } from "../../store/localstore";

const Testimonial = () => {
  const [currentItem, setCurrentItem] = useState(1);
  const [currentData, setCurrentData] = useState([testimonial[0]]);

  const testimonialNextHandler = () => {
    let next;
    if(testimonial.length !== currentItem) {
      next = currentItem + 1
      setCurrentItem(prev => prev + 1)
    } else {
      return;
    }
    let nextTestimonial =  testimonial.filter((item, index) => (index + 1) === next );

    setCurrentData(nextTestimonial);
  }

  const testimonialPreviousHandler = () => {
    let previous;
    if(currentItem !== 1) {
      previous = currentItem - 1
      setCurrentItem(prev => prev - 1)
    } else {
      return;
    }
    let previousTestimonial =  testimonial.filter((item, index) => (index + 1) === previous);
    setCurrentData(previousTestimonial);
  }

 

  return (
    <section id="testimonial" className="relative w-full flex flex-col justify-between items-start mt-20">
      <p className={`${sectionTitle}`}>
        <i>
          <LuBookOpenCheck />
        </i>
        <span>TESTIMONIAL</span>
      </p>
      <h3 className="mt-5 text-[1.47rem] sm:text-[1.5rem] lg:text-[1.7rem] text-white">
        Trusted by a number of{" "}
        <span className="text-bgcolor">Tutors & Clients</span>
      </h3>
      {currentData.map((item) => {
        return (
          <div key={item.id} className="flex flex-col items-start gap-y-5 border border-line p-5 rounded-2xl w-full md:w-5/6 lg:w-4/6 text-white mt-5 leading-none testimonial-animate">
        <div className="flex items-center gap-x-3">
          <img
            src={item.image}
            className="w-10 h-10 object-contain rounded-full"
            alt="Testimonial"
          />
          <span className="text-sm flex flex-col leading-none gap-y-1">
            <p>{item.name}</p>
            <p className="text-line text-xs">
              {item.post} <span className="text-bgcolor">{item.company}</span>
            </p>
          </span>
        </div>
        <p className="text-sm font-light">
        {item.comment}
        </p>

        <a href={item.projectLink} target="_blank" rel="noreferrer">
          <em className="text-[0.6rem] underline hover:text-bgcolor focus:text-bgcolor duration-300 ease-linear">
            PROJECT
          </em>
        </a>
      </div>
        )
      })}
    
      <span className="flex gap-x-2 mt-4 text-white text-center">
        <button onClick={testimonialPreviousHandler} className={`flex justify-center items-center bg-primary w-8 h-8 p-1 text-xs rounded-full border ${currentItem !== 1 ? "border-bgcolor" : "border-line"}`}>
          <i>
            <AiOutlineArrowLeft />
          </i>
        </button>
        <p className="text-[0.7rem] text-offwhite">
          {currentItem}<span className="text-line">/{testimonial.length}</span>
        </p>
        <button onClick={testimonialNextHandler} className={`flex justify-center items-center bg-primary w-8 h-8 p-1 text-xs rounded-full border ${testimonial.length !== currentItem ? "border-bgcolor" : "border-line"}`}>
          <i>
            <AiOutlineArrowRight />
          </i>
        </button>
      </span>
    </section>
  );
};

export default Testimonial;
