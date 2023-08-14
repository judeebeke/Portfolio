import { PropTypes } from 'prop-types';

const ScrollButton = (props) => {
    const scrollToTarget = () => {
      const targetElement = document.getElementById('projects');
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    return (
      <button onClick={scrollToTarget}>{props.children}</button>
    );
  };
  
  ScrollButton.propTypes = {
    children: PropTypes.node.isRequired,
  }
  export default ScrollButton;