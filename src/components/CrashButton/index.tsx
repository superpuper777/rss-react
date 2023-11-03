import { useContext } from 'react';
import SearchContext from '../../context';
import './styles.css';

const CrashButton = () => {
  const context = useContext(SearchContext);
  const { updateError } = context;

  const handleClick = () => {
    updateError();
  };

  return (
    <button className="crash-button" type="submit" onClick={handleClick}>
      Crash app
    </button>
  );
};

export default CrashButton;
