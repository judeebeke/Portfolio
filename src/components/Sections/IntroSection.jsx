import Navigation from "../Navigation";
import { iconCircle, sectionTitle } from "../Utils/Style";
import { LiaHomeSolid } from "react-icons/lia";
import { AiOutlineArrowDown} from "react-icons/ai";
import { HiMiniBars2 } from "react-icons/hi2";
import mpi from "../../assets/mpi.png";

const IntroSection = () => {
  return (
    <section className="relative w-full flex flex-col justify-between items-start mt-5">
      <div className="flex justify-between w-full items-center">
        <p className={`${sectionTitle}`}>
          <i>
            <LiaHomeSolid />
          </i>
          <span>INTRODUCE</span>
        </p>
        <i className={`${iconCircle} text-white`}><HiMiniBars2 /></i>
      </div>
      <h2 className="mt-5 text-3xl md:text-4xl lg:text-[2.5rem] lg:leading-10 text-white">
        Say Hi from <span className="text-bgcolor">USER</span>, <br /> Graphics
        Designer and <br /> Web Developer
      </h2>
      <p className="text-[0.6rem] text-offwhite mt-5 font-extralight leading-5">
        I design and code beatifully simple things and I lve what I do.
        <br />
        Just simple like that.
      </p>
      <div className="relative w-full">
        <img
          src={mpi}
          className="absolute top-[3rem] right-[5rem] md:right-[7rem] lg:right-[15rem] xl:right-[23rem] w-[6rem] brand"
          alt="My Projects Icon"
        />
        <button type="button" role="button" className="absolute top-[5rem] right-[7rem] md:right-[9rem] lg:right-[17rem] xl:right-[25rem] text-3xl text-center text-white">
                <AiOutlineArrowDown />
        </button>
      </div>
      <div className="flex justify-center items-center gap-x-5 text-left uppercase leading-none mt-[12rem]">
        <span>
          <h6 className="text-4xl text-bgcolor mb-3">10+</h6>
          <p className="text-[0.5rem] text-offwhite">
            YEARS OF <br /><br /> EXPERIENCE
          </p>
        </span>
        <span>
          <h6 className="text-4xl text-bgcolor mb-3">182+</h6>
          <p className="text-[0.5rem] text-offwhite">
            Projects completed on <br /><br /> 15 Countries
          </p>
        </span>
      </div>
      <Navigation />
    </section>
  );
};

export default IntroSection;