import passport from "../assets/passport.jpg";
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineUser,
} from "react-icons/ai";
import { LiaHomeSolid } from "react-icons/lia";
import { MdOutlinePermContactCalendar, MdOutlineDesignServices, MdOutlineDeveloperMode } from "react-icons/md";
import { BiCollection, BiBook } from "react-icons/bi";
import { BsDatabaseFillGear } from "react-icons/bs";
import { TbBulb } from "react-icons/tb";
import { LuBookOpenCheck } from "react-icons/lu";
import {RiSeoLine} from "react-icons/ri";

import testimonialImg from "../assets/testimonial.jpg";

export const userImage = {
  image: passport,
  title: "User-name",
};

export const socialLink = [
  { id: "social1", link: "link.com", icon: <AiOutlineLinkedin /> },
  { id: "social2", link: "link.com", icon: <AiOutlineGithub /> },
  { id: "social3", link: "link.com", icon: <AiOutlineTwitter /> },
  { id: "social4", link: "link.com", icon: <AiOutlineInstagram /> },
];

export const navItems = [
  { id: "nav1", scrollTo: "home", toolTipText: "Home", icon: <LiaHomeSolid /> },
  {
    id: "nav2",
    scrollTo: "about",
    toolTipText: "About",
    icon: <AiOutlineUser />,
  },
  { id: "nav3", scrollTo: "resume", toolTipText: "Resume", icon: <BiBook /> },
  {
    id: "nav4",
    scrollTo: "services",
    toolTipText: "Services",
    icon: <BsDatabaseFillGear />,
  },
  {
    id: "nav5",
    scrollTo: "skills",
    toolTipText: "Skills",
    icon: <TbBulb />,
  },
  {
    id: "nav6",
    scrollTo: "projects",
    toolTipText: "Portfolio",
    icon: <BiCollection />,
  },
  {
    id: "nav7",
    scrollTo: "testimonial",
    toolTipText: "Testimonial",
    icon: <LuBookOpenCheck />,
  },
  {
    id: "nav8",
    scrollTo: "contact",
    toolTipText: "Contact",
    icon: <MdOutlinePermContactCalendar />,
  },
];

export const resume = [
  {
    id: "job1",
    period: "2020 - Present",
    position: [
      {
        id: "post1.1",
        company: "Brunodee Agency",
        post: "Framer Designer & Developer",
      },
      {
        id: "post1.2",
        company: "Envato Market",
        post: "Front-End WordPress Developer",
      },
    ],
  },
  {
    id: "job2",
    period: "2014 - 2019",
    position: [
      {
        id: "post2.1",
        company: "Designflow Studio",
        post: "Webflow Develper & Co-Founder",
      },
      {
        id: "post2.2",
        company: "Freelance",
        post: "Web Designer",
      },
      {
        id: "post2.3",
        company: "AHA Marketing Agency",
        post: "Leader Team of Marketing",
      },
    ],
  },
  {
    id: "job3",
    period: "2010 - 2013",
    position: [
      {
        id: "post3.1",
        company: "Envato Market",
        post: "Bachelor Degree of Information Technology",
      },
    ],
  },
];

export const services = [
  { id: "service1", title: "Web Design", desc: "I created digital products with unique ideas using Figma and Framer", completedPrjects: "24 Projects", icon: <MdOutlineDesignServices /> },
  { id: "service2", title: "Development", desc: "I build website that go live with Framer, Webflow or Wordpress", completedPrjects: "120 Projects", icon: <MdOutlineDeveloperMode /> },
  { id: "service3", title: "SEO/Marketing", desc: "Increase the traffic for your website with SEO optimization", completedPrjects: "8 Projects", icon: <RiSeoLine /> },
];

export const testimonial = [
  { id: "recom1", name: "Paublo Escobar", image: testimonialImg, post: "CEO of", company: "IBM Global", comment: "'User - A Developer with the creativity, professional and master of code. Much more than what i'm expect. High quality product & flexiable price. Recommended!'", projectLink: "https://dispezo.vercel.app/" },
  { id: "recom2", name: "Matt De'Caprio", image: testimonialImg, post: "Software Eng. at", company: "Erricson Motors", comment: "'User - A Developer with the creativity, professional and master of code. Much more than what i'm expect. High quality product & flexiable price. Recommended!'", projectLink: "https://dispezo.vercel.app/" },
  { id: "recom3", name: "Wammi Agbero", image: testimonialImg, post: "Vawulence Eng. at", company: "Vawulence Mechanics", comment: "'User - A Developer with Agba skill and professionalism, wey sabi code linke winch. Much more than what i'm expect.Nah senior man work him dey do for quality product & flexiable price. I Recommended am!'", projectLink: "https://dispezo.vercel.app/" },
];
