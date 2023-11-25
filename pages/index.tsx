import { useRouter } from 'next/router';
import styles from './styles.module.css';

import { useAppSelector } from '../store/store';
import List from '../components/List';
import SearchBar from '../components/SearchBar';
import CrashButton from '../components/CrashButton';
import { getCrashError } from '../store/crash/crashSelectors';

const Home = (): JSX.Element => {
  const { pathname } = useRouter();
  console.log(pathname);
  //   const isDetailsShowed = pathname?.includes('details');
  const isError = useAppSelector(getCrashError);

  if (isError) {
    throw new Error('I crashed!');
  }

  return (
    <div className={styles.appWrapper}>
      <div className={styles.app} data-testid="app">
        <header className={styles.header}>
          <CrashButton />
          <SearchBar />
        </header>
        <main>
          <List />
        </main>
      </div>
    </div>
  );
};

export default Home;
