import { navItems } from "../store/localstore";
import classes from "./Navigation.module.css";
import ScrollButton from "./UI/ScrollButton";
import { PropTypes } from "prop-types";

const Navigation = (props) => {
  let { openMenu, setOpenMenu } = props;
  return (
    <>
      {openMenu && (
        <nav className="absolute right-0 top-[8rem] border border-line rounded-full px-[4px] py-[4px] nav-animate">
          <ul className="flex justify-center items-center flex-col">
            {navItems.map((nav) => {
              return (
                <ScrollButton key={nav.id} id={nav.scrollTo}>
                  <li
                    className={`text-offwhite font-semibold text-sm hover:text-bgcolor cursor-pointer px-2 leading-none py-1 mt-1 transition-opacity duration-300 ease-linear ${classes.tooltip}`}
                    onClick={()=>{setOpenMenu(prev => !prev)}}
                  >
                    {nav.icon}
                    <span className={`${classes.tooltiptext} text-sm`}>
                      {nav.toolTipText}
                    </span>
                  </li>
                </ScrollButton>
              );
            })}
          </ul>
        </nav>
      )}
    </>
  );
};

Navigation.propTypes = {
  openMenu: PropTypes.bool.isRequired,
  setOpenMenu: PropTypes.func.isRequired,
};

export default Navigation;
