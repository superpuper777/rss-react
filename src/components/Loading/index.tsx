import './styles.css';

const Loading: React.FC = () => {
  return (
    <div className="loader-wrapper">
      <span className="loader" data-testid="loader"></span>
    </div>
  );
};

export default Loading;
