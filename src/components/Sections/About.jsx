import { sectionTitle } from "../Utils/Style";
import { AiOutlineUser } from "react-icons/ai";

const About = () => {
  return (
    <section className="relative w-full flex flex-col justify-between items-start mt-20">
       <p className={`${sectionTitle}`}>
          <i>
            <AiOutlineUser />
          </i>
          <span>ABOUT</span>
        </p>
        <h3 className="mt-5 text-[1.47rem] sm:text-[1.5rem] lg:text-[1.7rem] text-white">
        Every great design begin with an even <span className="text-bgcolor">better story</span>
        
      </h3>
      <p className="text-xs text-offwhite mt-5 font-extralight leading-5 w-[85%] md:w-[75%] lg:w-[65%] xl:w-[45.7%]">
        Since beginning my journey as a freelance designer nearly 8 years ago, I&#39;ve done remote work for agencies, consulted for startups, and collaborated with talented people to create digital priducts for both business and consumer use. I&#39;m quietly confident, natuarally curious, and perpetually working on improving my chopsone design problem at a time.
      </p>
    </section>
  )
}

export default About
