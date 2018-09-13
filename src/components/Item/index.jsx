import React, { Component } from 'react';
import * as PropTypes from 'prop-types';

class Item extends Component {
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
      <div style={style} className={className}>
        {elements}
      </div>
    );
  }
}

Item.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.any,
};

export default Item;
