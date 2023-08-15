import PropTypes from 'prop-types';

const Button = (props) => {
    let {btnText, btnIcon, type, role} = props;
  return (
    <button role={`${role ? role : "Button"}`} type={`${type ? type : "Button"}`} className='flex justify-center items-center gap-x-3 w-full h-auto p-3 bg-bgcolor text-xs font-semibold text-primary border-0 outline-none rounded-full duration-300 ease-in-out hover:text-white'><span>{btnIcon}</span><span>{btnText}</span></button>
  )
}

Button.propTypes = {
    btnText: PropTypes.string.isRequired,
    btnIcon: PropTypes.node,
    type: PropTypes.string,
    role: PropTypes.string,
}

export default Button