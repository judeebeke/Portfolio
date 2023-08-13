import HeroRoot from "./HeroSection/HeroRoot"
import About from "./Sections/About"
import Resume from "./Sections/Resume"
import IntroSection from "./Sections/IntroSection"
import Skills from "./Sections/Skills";
import Services from "./Sections/Services";

const Layout = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center px-7 py-5 gap-y-9 text-3xl text-title md:flex-row md:items-start md:justify-between">
      <HeroRoot />
      <main className="w-3/4 md:w-[58%] lg:w-[60%] xl:w-[65%]">
      <IntroSection />
      <About />
      <Resume />
      <Services />
      <Skills />
      </main>
    </div>
  )
}

export default Layout
