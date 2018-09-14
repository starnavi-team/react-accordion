import React, { Component } from 'react';
import * as PropTypes from 'prop-types';

class Accordion extends Component {
  state = {};

  render() {
    const { children, style, className } = this.props;
    return (
      <div style={style} className={className}>
        {children}
      </div>
    );
  }
}

Accordion.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.any,
};

export default Accordion;
