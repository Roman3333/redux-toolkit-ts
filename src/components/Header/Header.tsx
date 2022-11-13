import React, { useEffect, useRef } from 'react';

import { useAppSelector } from '../../hooks/redux-hooks';
import { RootState } from '../..//redux/store';

import styles from './Header.module.scss';

const Header = () => {
  const { basket } = useAppSelector((state: RootState) => state.basket);
  const isMounted = useRef(false);
  console.log(basket);

  useEffect(() => {
    if (isMounted.current) {
      const pizzasJson = JSON.stringify(basket);
      localStorage.setItem('basket', pizzasJson);
    }

    isMounted.current = true;
  }, [basket]);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__inner}>
          <div className={styles.header__logo}>LOGO</div>
          <div className={styles.header__basket}>
            Basket <span className={styles.header__count}>{basket.length}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
