import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';

export const StyledAccordionGroup = styled.div.attrs({
  className: props => props.className,
  style: props => props.style,
})`
`;

StyledAccordionGroup.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

class AccordionGroup extends Component {
  state = {
    isOpened: false,
  };

  onBodyToggle = () => {
    this.setState(prevState => ({ isOpened: !prevState.isOpened }));
  };

  render() {
    const { isOpened } = this.state;
    const { children, className, style } = this.props;
    const elements = React.Children.map(children, child => React.cloneElement(child, {
      isOpened,
      onBodyToggle: this.onBodyToggle,
    }));
    return (
      <StyledAccordionGroup style={style} className={className}>
        {elements}
      </StyledAccordionGroup>
    );
  }
}

AccordionGroup.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.any,
};

export default AccordionGroup;
