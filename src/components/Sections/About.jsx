import { sectionTitle } from "../Utils/Style";
import { AiOutlineUser } from "react-icons/ai;

const About = () => {
  return (
    <section className="relative w-full flex flex-col justify-between items-start mt-5">
       <p className={`${sectionTitle}`}>
          <i>
            <AiOutlineUser />
          </i>
          <span>INTRODUCE</span>
        </p>
    </section>
  )
}

export default About
