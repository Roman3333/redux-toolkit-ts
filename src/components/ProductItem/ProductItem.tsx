import React, { FC, useState } from 'react';
import classNames from 'classnames';

import { addItemToBasket } from '../../redux/basket';
import { useAppDispatch } from '../../hooks/redux-hooks';

import { IProduct } from '../../types/product';

import styles from './ProductItem.module.scss';

export const ProductItem: FC<IProduct> = ({ title, price, images, id }) => {
  const [indexPhoto, setIndexPhoto] = useState(0);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.product}>
      <div className={styles.product__title}>{title}</div>
      <div className={styles.product__price}>{price}</div>
      <div
        className={styles.product__photo}
        style={{ backgroundImage: `url(${images[indexPhoto]})` }}></div>
      <div className={styles.product__photos}>
        {images.map((photo, index) => {
          return (
            <button className={styles.product__btn} onClick={() => setIndexPhoto(index)}>
              <div
                className={classNames(styles.product__photoItem, {
                  [styles.active]: index === indexPhoto,
                })}
                style={{ backgroundImage: `url(${images[index]})` }}></div>
            </button>
          );
        })}
      </div>
      <button className={styles.product__buy} onClick={() => dispatch(addItemToBasket(id))}>
        Купить
      </button>
    </div>
  );
};
