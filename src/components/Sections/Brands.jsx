import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";

const Brands = () => {
  return (
    <section id="brands" className="w-full flex flex-col justify-between items-start mt-20">
    <p className="text-sm text-white">
      Worked For Some Brands and Companies.
    </p>
    <div className="flex items-center gap-x-5 mt-5">
        <img src={logo1} className="w-24 h-auto cursor-pointer object-contain opacity-50 hover:opacity-100 duration-300 ease-linear" alt="Brands Logo" />
        <img src={logo2} className="w-24 h-auto cursor-pointer object-contain opacity-50 hover:opacity-100 duration-300 ease-linear" alt="Brands Logo" />
        <img src={logo3} className="w-24 h-auto cursor-pointer object-contain opacity-50 hover:opacity-100 duration-300 ease-linear" alt="Brands Logo" />
    </div>
    </section>
  )
}

export default Brands
