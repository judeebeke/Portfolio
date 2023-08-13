import { sectionTitle } from "../Utils/Style"
import {TbBulb} from "react-icons/tb"

const Skills = () => {
  return (
    <section className="relative w-full flex flex-col justify-between items-start mt-20">
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
      </section>
  )
}

export default Skills
