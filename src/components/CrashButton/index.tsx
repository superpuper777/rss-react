import React from 'react';
import SearchContext from '../../context';
import './styles.css';

class CrashButton extends React.Component {
  static contextType = SearchContext;
  context!: React.ContextType<typeof SearchContext>;

  handleClick = () => {
    const { updateError } = this.context;

    updateError();
  };

  render(): React.ReactNode {
    return (
      <button className="crash-button" type="submit" onClick={this.handleClick}>
        Crash app
      </button>
    );
  }
}

export default CrashButton;
