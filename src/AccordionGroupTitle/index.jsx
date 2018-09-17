import React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';

export const StyledAccordionGroupTitle = styled.div.attrs({
  className: props => props.className,
  style: props => props.style,
})`
`;

StyledAccordionGroupTitle.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};


const AccordionGroupTitle = ({
  onBodyToggle,
  children,
  style,
  className,
}) => (
  <div
    role="heading"
  >
    <StyledAccordionGroupTitle
      style={style}
      className={className}
      onClick={onBodyToggle}
      role="presentation"
    >
      {children}
    </StyledAccordionGroupTitle>
  </div>
);

AccordionGroupTitle.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.any,
  onBodyToggle: PropTypes.func,
};

export default AccordionGroupTitle;
