import HeroRoot from "./HeroSection/HeroRoot"
import IntroSection from "./Sections/IntroSection"

const Layout = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center px-7 py-5 gap-y-9 text-3xl text-title md:flex-row md:items-start md:justify-between">
      <HeroRoot />
      <main className="w-3/4 md:w-[58%] lg:w-[60%] xl:w-[65%]">
      <IntroSection />
      </main>
    </div>
  )
}

export default Layout
