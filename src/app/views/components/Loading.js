import React, { Component } from 'react';

class Loading extends Component {
  render() {
    return (
      <div className="box-loading">
        <div className="lds-roller">
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    );
  }
}

export default Loading;
