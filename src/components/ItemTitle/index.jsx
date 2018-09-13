import React from 'react';
import * as PropTypes from 'prop-types';

const ItemTitle = ({
  onBodyToggle,
  children,
  style,
  className,
}) => (
  <div style={style} className={className} onClick={onBodyToggle}>
    {children}
  </div>
);

ItemTitle.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.any,
  onBodyToggle: PropTypes.func,
};

export default ItemTitle;
