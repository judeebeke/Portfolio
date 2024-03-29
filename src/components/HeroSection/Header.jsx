import Button from "../UI/Button";
import { socialLink, userImage } from "../../store/localstore";
import { BsEnvelope } from "react-icons/bs";
import { iconCircle } from "../Utils/Style";
const Header = () => {
  return (
    <header className="flex flex-col justify-between items-center text-white w-full">
      <div className="flex justify-between items-center text-left w-full mb-10">
        <h1 className="text-3xl font-semibold">USER</h1>
        <h4 className="text-xs">
          Graphics Designer <br /> & Web Developer
        </h4>
      </div>
      <div className="w-full">
        <img
          src={userImage.image}
          className="w-full h-auto object-cover rounded-xl  brightness-105"
          loading="lazy"
          alt={userImage.title}
        />
        <p className="text-base font-light text-center text-white mt-7">
          username@twitter.com <br /> Base in Lagos
        </p>
        <p className="text-[0.6rem] font-extralight text-center text-offwhite mt-5">
          @2023 User all rights reserved
        </p>
      </div>
      <ul className="flex justify-between items-center gap-2 mt-7 mb-20 text-offwhite">
        {socialLink.map((link) => {
          return (
            <li key={link.id} className={`${iconCircle} text-offwhite`}>
              <a href={link.link} target="_blank" rel="noreferrer">
                {link.icon}
              </a>
            </li>
          );
        })}
      </ul>
      <Button btnText="HIRE ME!" btnIcon={<BsEnvelope />} />
    </header>
  );
};

export default Header;
