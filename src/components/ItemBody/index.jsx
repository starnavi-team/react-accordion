import React, {Component} from 'react';
import * as PropTypes from 'prop-types';

class ItemBody extends Component {

  render() {
    const { children, isOpened, style, className } = this.props;
    return (
      <div>
        {isOpened &&
        <div style={style} className={className}>
          {children}
        </div>
        }
      </div>
    );
  }
}

ItemBody.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.any,
  isOpened: PropTypes.bool,
};

export default ItemBody;