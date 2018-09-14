import React from 'react';
import * as PropTypes from 'prop-types';

const AccordionGroupTitle = ({
  onBodyToggle,
  children,
  style,
  className,
}) => (
  <div
    role="heading"
  >
    <div
      style={style}
      className={className}
      onClick={onBodyToggle}
      role="presentation"
    >
      {children}
    </div>
  </div>
);

AccordionGroupTitle.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.any,
  onBodyToggle: PropTypes.func,
};

export default AccordionGroupTitle;
