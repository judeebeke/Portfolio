import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className='absolute right-0 top-[8rem] border border-line rounded-full px-[4px] py-[4px]'>
      <ul className='flex justify-center items-center flex-col'>
        <li className={`text-offwhite font-semibold text-[0.7rem] hover:text-bgcolor cursor-pointer px-2 leading-none py-1 mt-1 ${classes.tooltip}`}>n<span className={`${classes.tooltiptext}`}>Text 1</span></li>
        <li className={`text-offwhite font-semibold text-[0.7rem] hover:text-bgcolor cursor-pointer px-2 leading-none py-1 mt-1 ${classes.tooltip}`}>n<span className={`${classes.tooltiptext}`}>Text 1</span></li>
        <li className={`text-offwhite font-semibold text-[0.7rem] hover:text-bgcolor cursor-pointer px-2 leading-none py-1 mt-1 ${classes.tooltip}`}>n<span className={`${classes.tooltiptext}`}>Text 1</span></li>
        <li className={`text-offwhite font-semibold text-[0.7rem] hover:text-bgcolor cursor-pointer px-2 leading-none py-1 mt-1 ${classes.tooltip}`}>n<span className={`${classes.tooltiptext}`}>Text 1</span></li>
        <li className={`text-offwhite font-semibold text-[0.7rem] hover:text-bgcolor cursor-pointer px-2 leading-none py-1 mt-1 ${classes.tooltip}`}>n<span className={`${classes.tooltiptext}`}>Text 1</span></li>
        <li className={`text-offwhite font-semibold text-[0.7rem] hover:text-bgcolor cursor-pointer px-2 leading-none py-1 mt-1 ${classes.tooltip}`}>n<span className={`${classes.tooltiptext}`}>Text 1</span></li>
      </ul>
    </nav>
  )
}

export default Navigation;
