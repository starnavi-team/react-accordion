import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';

export const StyledAccordion = styled.div.attrs({
  className: props => props.className,
  style: props => props.style,
})`
`;

StyledAccordion.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

class Accordion extends Component {
  state = {};

  render() {
    const { children, style, className } = this.props;
    return (
      <StyledAccordion style={style} className={className}>
        {children}
      </StyledAccordion>
    );
  }
}

Accordion.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.any,
};

export default Accordion;
