import { LuBookOpenCheck } from "react-icons/lu";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { sectionTitle } from "../Utils/Style";
import testimonial from "../../assets/testimonial.jpg";

const Testimonial = () => {
  return (
    <section className="relative w-full flex flex-col justify-between items-start mt-20">
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
      <div className="flex flex-col items-start gap-y-5 border border-line p-5 rounded-2xl w-full md:w-5/6 lg:w-4/6 text-white mt-5 leading-none">
        <div className="flex items-center gap-x-3">
          <img
            src={testimonial}
            className="w-10 h-10 object-contain rounded-full"
            alt="Testimonial"
          />
          <span className="text-sm flex flex-col leading-none gap-y-1">
            <p>Paublo Escobar</p>
            <p className="text-line text-xs">
              CEO of <span className="text-bgcolor">IBM Global</span>
            </p>
          </span>
        </div>
        <p className="text-sm font-light">
          &#34;User - A Developer with the creativity, professional and master
          of code. Much more than what i&apos;m expect. High quality product &
          flexiable price. Recommended!&#34;
        </p>

        <a href="/">
          <em className="text-[0.6rem] underline hover:text-bgcolor focus:text-bgcolor duration-300 ease-linear">
            PROJECT
          </em>
        </a>
      </div>
      <span className="flex gap-x-2 mt-4 text-white text-center">
        <button className="flex justify-center items-center bg-primary w-8 h-8 p-1 text-xs rounded-full border border-line">
          <i>
            <AiOutlineArrowLeft />
          </i>
        </button>
        <p className="text-[0.7rem] text-offwhite">
          1<span className="text-line">/1</span>
        </p>
        <button className="flex justify-center items-center bg-primary w-8 h-8 p-1 text-xs rounded-full border border-line">
          <i>
            <AiOutlineArrowRight />
          </i>
        </button>
      </span>
    </section>
  );
};

export default Testimonial;
