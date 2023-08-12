import PropTypes from 'prop-types';

const Button = (props) => {
    let {btnText, btnIcon} = props;
  return (
    <button className='flex justify-center items-center gap-x-3 w-full h-auto p-3 bg-bgcolor text-xs font-semibold text-primary border-0 outline-none rounded-full'><span>{btnIcon}</span><span>{btnText}</span></button>
  )
}

Button.propTypes = {
    btnText: PropTypes.string.isRequired,
    btnIcon: PropTypes.node,
}

export default Button