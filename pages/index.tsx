// import { Outlet, useLocation } from 'react-router-dom';
// import '../styles/globals.css';

// import { useAppSelector } from '../store/store';
// import List from '../components/List';
// import SearchBar from '../components/SearchBar';
// import CrashButton from '../components/CrashButton';
// import { getCrashError } from '../store/crash/crashSelectors';

const Home = (): JSX.Element => {
  //   const { pathname } = useLocation();
  //   const isDetailsShowed = pathname?.includes('details');
  //   const isError = useAppSelector(getCrashError);

  //   if (isError) {
  //     throw new Error('I crashed!');
  //   }

  return (
    <div className="app-wrapper">
      <div className="app" data-testid="app">
        {/* <header className="header">
          <CrashButton />
          <SearchBar />
        </header>
        <main>
          <List />
        </main> */}
        <p>Home</p>
      </div>
    </div>
  );
};

export default Home;
