import { useAppDispatch } from '../../store/store';
import { toggleError } from '../../store/crash/crashSlice';

import styles from './styles.module.css';

const CrashButton: React.FC = () => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(toggleError(true));
  };

  return (
    <button className={styles.crashButton} type="submit" onClick={handleClick}>
      Crash app
    </button>
  );
};

export default CrashButton;
