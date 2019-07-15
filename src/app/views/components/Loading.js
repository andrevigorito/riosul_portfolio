import React, { PureComponent } from 'react';

class Loading extends PureComponent {
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
