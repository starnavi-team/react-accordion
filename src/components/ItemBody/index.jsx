import React from 'react';
import * as PropTypes from 'prop-types';

const ItemBody = ({
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

ItemBody.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.any,
  isOpened: PropTypes.bool,
};

export default ItemBody;
