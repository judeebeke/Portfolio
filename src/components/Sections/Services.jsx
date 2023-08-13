import { sectionTitle } from "../Utils/Style";
import {FcServices} from "react-icons/fc"

const Services = () => {
  return (
    <section className="relative w-full flex flex-col justify-between items-start mt-20">
       <p className={`${sectionTitle} grayscale`}>
          <i>
            <FcServices />
          </i>
          <span>SERIVCES</span>
        </p>
        <h3 className="mt-5 text-[1.47rem] sm:text-[1.5rem] lg:text-[1.7rem] text-white">
        My <span className="text-bgcolor">Specializations</span>
    
      </h3>
        </section>
  )
}

export default Services