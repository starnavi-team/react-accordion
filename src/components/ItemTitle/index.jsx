import React, { Component } from 'react';
import * as PropTypes from 'prop-types';

class ItemTitle extends Component {
  render() {
    const { onBodyToggle, children, style, className } = this.props;
    return (
      <div style={style} className={className} onClick={onBodyToggle}>
        {children}
      </div>
    );
  }
}

ItemTitle.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.any,
};

export default ItemTitle;