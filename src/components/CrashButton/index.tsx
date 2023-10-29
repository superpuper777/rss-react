import React from 'react';

interface Props {
  updateError: () => void;
}
class CrashButton extends React.Component<Props> {
  handleClick = () => {
    this.props.updateError();
  };

  render(): React.ReactNode {
    return (
      <button
        className="search-button"
        type="submit"
        onClick={this.handleClick}
      >
        Crash app
      </button>
    );
  }
}

export default CrashButton;
