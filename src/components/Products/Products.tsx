import React, { FC, useEffect } from 'react';

import { ProductItem } from '../ProductItem/ProductItem';

import { fetchProducts } from '../../redux/products';
import { useAppSelector, useAppDispatch } from '../../hooks/redux-hooks';
import { RootState } from '../..//redux/store';

import styles from './Products.module.scss';

const Products: FC = () => {
  const { products, isLoading } = useAppSelector((state: RootState) => state.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetch = async () => {
      dispatch(fetchProducts());
    };

    fetch();
  }, []);

  return (
    <section className={styles.products}>
      <div className="container">
        <h1 className={styles.products__title}>Products</h1>

        <div className={styles.products__inner}>
          {isLoading === 'sucsess' ? (
            products.length ? (
              products.map((product) => <ProductItem key={product.id} {...product} />)
            ) : (
              <div>Loading1...</div>
            )
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;
