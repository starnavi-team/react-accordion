import React, { Component } from "react";
import * as PropTypes from 'prop-types';

class Item extends Component {
  state = {
    isOpened: false
  };

  onBodyToggle = () => {
    this.setState({isOpened: !this.state.isOpened})
  };

  render() {
    const children = React.Children.map(this.props.children, (child) => React.cloneElement(child, {
      isOpened: this.state.isOpened,
      onBodyToggle: this.onBodyToggle,
    }));
    return (
      <div style={this.props.style} className={this.props.className}>
        {children}
      </div>
    )
  }
}

Item.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.any,
};

export default Item;