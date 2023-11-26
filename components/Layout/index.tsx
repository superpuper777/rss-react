import { useRouter } from 'next/router';
import styles from './styles.module.css';

import { useAppSelector } from '../../store/store';
import List from '../../components/List';
import SearchBar from '../../components/SearchBar';
import CrashButton from '../../components/CrashButton';
import { getCrashError } from '../../store/crash/crashSelectors';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props): JSX.Element => {
  const { pathname } = useRouter();
  const isDetailsShowed = pathname?.includes('details');
  const isError = useAppSelector(getCrashError);

  if (isError) {
    throw new Error('I crashed!');
  }

  return (
    <div
      className={
        isDetailsShowed ? styles.appWrapperWithDetails : styles.appWrapper
      }
    >
      <div className={styles.app} data-testid="app">
        <header className={styles.header}>
          <CrashButton />
          <SearchBar />
        </header>
        <main>
          <List />
        </main>
      </div>
      {isDetailsShowed && (
        <div id="detail" data-testid="details">
          {children}
        </div>
      )}
    </div>
  );
};

export default Layout;
