import React from 'react';
import * as PropTypes from 'prop-types';

const AccordionGroupBody = ({
  children,
  isOpened,
  style,
  className,
}) => (
  <div>
    {isOpened
    && (
      <div style={style} className={className}>
        {children}
      </div>
    )
    }
  </div>
);

AccordionGroupBody.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.any,
  isOpened: PropTypes.bool,
};

export default AccordionGroupBody;
