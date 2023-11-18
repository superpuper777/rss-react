import './styles.css';
import { useAppDispatch } from '../../store/store';
import { toggleError } from '../../store/crash/crashSlice';

const CrashButton: React.FC = () => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(toggleError(true));
  };

  return (
    <button className="crash-button" type="submit" onClick={handleClick}>
      Crash app
    </button>
  );
};

export default CrashButton;
