import styles from './styles.module.css';

const Loading: React.FC = () => {
  return (
    <div className={styles.loaderWrapper}>
      <span className={styles.loader} data-testid="loader"></span>
    </div>
  );
};

export default Loading;
