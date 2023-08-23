import { BiBook } from "react-icons/bi";
import { sectionTitle } from "../Utils/Style";
import { resume } from "../../store/localstore";

const Resume = () => {
  return (
    <section id="resume" className="relative w-full flex flex-col justify-between items-start mt-20">
      <div className="flex justify-between w-full items-center">
        <p className={`${sectionTitle}`}>
          <i>
            <BiBook />
          </i>
          <span>RESUME</span>
        </p>
      </div>
      <h3 className="mt-5 text-[1.47rem] sm:text-[1.5rem] lg:text-[1.7rem] text-white mb-5">
        Experience & <span className="text-bgcolor">Education</span>
      </h3>
      <div className="relative flex flex-col gap-y-9 border-l border-l-line leading-none pl-7 ">
      {resume.map((item, index) => {
        return (
          <div key={item.id}>
          <span className="flex items-center">
          <span className={`w-[6.5px] h-[6.5px] absolute -left-[1%] ${index === 0 && "top-0"} mb-1 rounded-full border border-bgcolor bg-bgcolor`}></span>
            <p className={`text-[0.7rem] text-bgcolor mb-1`}>{item.period}</p>
          </span>
          {
            item.position.map(post => {
              return (
                <span key={post.id} className="mt-3 flex flex-col gap-y-1">
                <h6 className="text-base text-white">{post.post}</h6>
                <p className="text-[0.66rem] text-line">{post.company}</p>
              </span>
              )
            })
          }
        </div>
        )
      })}
      </div>
    </section>
  );
};

export default Resume;
