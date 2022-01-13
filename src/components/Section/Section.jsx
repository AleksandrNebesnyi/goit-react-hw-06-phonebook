import PropTypes from 'prop-types';
import { BoxSection, Title } from './Section.styled';

const Section = ({ title, children}) => {
    return (
      <BoxSection >
        <Title>{title}</Title>
        {children}
      </BoxSection>
    );
  };



  Section.defaultProps = {
    title: '',
   
  };
  
  Section.propTypes = {
    title: PropTypes.string.isRequired ,
    children: PropTypes.node,
  };

export default Section;