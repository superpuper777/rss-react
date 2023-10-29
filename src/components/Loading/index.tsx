import React from 'react';
import './styles.css';

class Loading extends React.Component {
  render() {
    return (
      <div className="loader-wrapper">
        <span className="loader"></span>
      </div>
    );
  }
}

export default Loading;
