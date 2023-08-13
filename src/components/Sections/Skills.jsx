import { sectionTitle } from "../Utils/Style"
import {TbBulb, TbBrandPython} from "react-icons/tb"
import {SiJavascript} from "react-icons/si"
import {FaLinux, FaReact} from "react-icons/fa"
import {AiOutlineGithub, AiOutlineHtml5} from "react-icons/ai"
import {BiLogoCss3} from "react-icons/bi"

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
      <div className="w-full mt-5 grid grid-cols-3 md:grid-cols-4 gap-y-4 md:w-3/6">
        <span className="flex flex-col justify-between items-center text-center py-5 h-[7.5rem] w-[5.8rem] rounded-full border border-line hover:border-bgcolor duration-300 ease-linear">
        <i className="text-4xl text-white mt-2"><TbBrandPython /></i>
        <p className="text-[0.6rem] text-bgcolor mt-2">Python</p>
        </span>
        <span className="flex flex-col justify-between items-center text-center py-5 h-[7.5rem] w-[6rem] rounded-full border border-line hover:border-bgcolor duration-300 ease-linear">
        <i className="text-4xl text-white mt-2"><SiJavascript /></i>
        <p className="text-[0.6rem] text-bgcolor mt-2">JavaScript</p>
        </span>
        <span className="flex flex-col justify-between items-center text-center py-5 h-[7.5rem] w-[6rem] rounded-full border border-line hover:border-bgcolor duration-300 ease-linear">
        <i className="text-4xl text-white mt-2"><FaReact /></i>
        <p className="text-[0.6rem] text-bgcolor mt-2">React</p>
        </span>
        <span className="flex flex-col justify-between items-center text-center py-5 h-[7.5rem] w-[6rem] rounded-full border border-line hover:border-bgcolor duration-300 ease-linear">
        <i className="text-4xl text-white mt-2"><AiOutlineGithub /></i>
        <p className="text-[0.6rem] text-bgcolor mt-2">Github</p>
        </span>
        <span className="flex flex-col justify-between items-center text-center py-5 h-[7.5rem] w-[6rem] rounded-full border border-line hover:border-bgcolor duration-300 ease-linear">
        <i className="text-4xl text-white mt-2"><FaLinux /></i>
        <p className="text-[0.6rem] text-bgcolor mt-2">Linux</p>
        </span>
        <span className="flex flex-col justify-between items-center text-center py-5 h-[7.5rem] w-[6rem] rounded-full border border-line hover:border-bgcolor duration-300 ease-linear">
        <i className="text-4xl text-white mt-2"><AiOutlineHtml5 /></i>
        <p className="text-[0.6rem] text-bgcolor mt-2">HTML5</p>
        </span>
        <span className="flex flex-col justify-between items-center text-center py-5 h-[7.5rem] w-[6rem] rounded-full border border-line hover:border-bgcolor duration-300 ease-linear">
        <i className="text-4xl text-white mt-2"><BiLogoCss3 /></i>
        <p className="text-[0.6rem] text-bgcolor mt-2">CSS3</p>
        </span>
      </div>
      </section>
  )
}

export default Skills
