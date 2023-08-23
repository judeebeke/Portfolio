import { PropTypes } from 'prop-types';

const ScrollButton = (props) => {
  let {id} = props;
  
    const scrollToTarget = () => {
      const targetElement = document.getElementById(id);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    return (
      <button type='button' role='button' className='bg-none' onClick={scrollToTarget}>{props.children}</button>
    );
  };
  
  ScrollButton.propTypes = {
    children: PropTypes.node.isRequired,
    id: PropTypes.string.isRequired,
  }
  export default ScrollButton;