import { sectionTitle } from "../Utils/Style";
import {TbBulb} from "react-icons/tb";
import { skills } from "../../store/localstore";

const Skills = () => {
  return (
    <section id="skills" className="relative w-full flex flex-col justify-between items-start mt-20">
      <div className="flex justify-between w-full items-center">
        <p className={`${sectionTitle}`}>
          <i>
            <TbBulb />
          </i>
          <span>MY SKILLS</span>
        </p>
      </div>
      <h3 className="mt-5 text-[1.47rem] sm:text-[1.5rem] lg:text-[1.7rem] text-white">
       My <span className="text-bgcolor">Advantages</span>
      </h3>
      <div className="w-full mt-5 flex flex-wrap justify-start items-center gap-y-4 gap-x-4 md:gap-x-15 md:w-5/6 lg:w-4/6">
       {skills.map(skill => {
        return (
        <span key={skill.id} className="flex flex-col justify-between items-center text-center py-5 h-[7.5rem] w-[5.5rem] rounded-full border border-line hover:border-bgcolor duration-300 ease-linear">
        <i className="text-4xl text-white mt-2">{skill.icon}</i>
        <p className="text-[0.6rem] text-bgcolor mt-2">{skill.title}</p>
        </span>
        )
       })}
      </div>
      </section>
  )
}

export default Skills
