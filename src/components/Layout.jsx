import HeroRoot from "./HeroSection/HeroRoot"
import About from "./Sections/About"
import Resume from "./Sections/Resume"
import IntroSection from "./Sections/IntroSection"
import Skills from "./Sections/Skills";
import Services from "./Sections/Services";
import Portfolio from "./Sections/Portfolio";
import Testimonial from "./Sections/Testimonial";
import Brands from "./Sections/Brands";
import Contact from "./Sections/Contact";
const Layout = () => {
  return (
    <div className="w-full flex justify-between items-center flex-col md:flex-row md:items-start px-10 py-5 md:gap-x-12 lg:gap-x-20 gap-y-9 text-3xl text-title">
      <HeroRoot />
      <main className="flex-1 w-[95%] md:w-[58%] lg:w-[60%] xl:w-[65%]">
      <IntroSection />
      <About />
      <Resume />
      <Services />
      <Skills />
      <Portfolio />
      <Testimonial />
      <Brands />
      <Contact />
      </main>
    </div>
  )
}

export default Layout
