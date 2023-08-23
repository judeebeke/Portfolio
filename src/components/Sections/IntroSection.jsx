import { useState } from "react";
import Navigation from "../Navigation";
import { iconCircle, sectionTitle } from "../Utils/Style";
import { LiaHomeSolid } from "react-icons/lia";
import { AiOutlineArrowDown } from "react-icons/ai";
import { HiMiniBars2 } from "react-icons/hi2";
import mpi from "../../assets/mpi.png";
import ScrollButton from "../UI/ScrollButton";

const IntroSection = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <section
      id="home"
      className="relative w-full flex flex-col justify-between items-start mt-5"
    >
      <div className="flex justify-between w-full items-center">
        <p className={`${sectionTitle}`}>
          <i>
            <LiaHomeSolid />
          </i>
          <span>INTRODUCE</span>
        </p>
       <i
          className={`${iconCircle} ${isOpenMenu ? "text-bgcolor" : "text-white"}`}
          onClick={() => {
            setIsOpenMenu((prev) => !prev);
          }}
        >
          <HiMiniBars2 />
        </i>
      </div>
      <h2 className="mt-5 text-3xl md:text-4xl lg:text-[2.5rem] lg:leading-10 text-white">
        Say Hi from <span className="text-bgcolor">USER</span>, <br /> Graphics
        Designer and <br /> Web Developer
      </h2>
      <p className="text-xs w-[80%] text-offwhite mt-5 font-extralight leading-5">
        I design and code beatifully simple things and I lve what I do. Just
        simple like that.
      </p>
      <div className="relative w-full">
        <img
          src={mpi}
          className="absolute top-[3rem] right-[5rem] md:right-[7rem] lg:right-[15rem] xl:right-[23rem] w-[6rem] brand"
          alt="My Projects Icon"
        />
        <ScrollButton id="projects">
          <i className="absolute top-[5rem] right-[7rem] md:right-[9rem] lg:right-[17rem] xl:right-[25rem] text-3xl text-center text-white hover:text-bgcolor">
            <AiOutlineArrowDown />
          </i>
        </ScrollButton>
      </div>
      <div className="flex justify-center items-center gap-x-5 text-left uppercase leading-none mt-[12rem]">
        <span>
          <h6 className="text-4xl text-bgcolor mb-3">10+</h6>
          <p className="text-[0.6rem] text-offwhite">
            YEARS OF <br />
            <br /> EXPERIENCE
          </p>
        </span>
        <span>
          <h6 className="text-4xl text-bgcolor mb-3">182+</h6>
          <p className="text-[0.6rem] text-offwhite">
            Projects completed on <br />
            <br /> 15 Countries
          </p>
        </span>
      </div>
      {isOpenMenu && <Navigation openMenu={isOpenMenu} setOpenMenu={setIsOpenMenu} />}
    </section>
  );
};

export default IntroSection;
