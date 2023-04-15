import React, { Fragment, useState } from 'react';
import styles from './navigation-large.module.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Category from './Category';
import Backdrop from '../public/Backdrop';

const NavigationLarge = props => {
  const { media } = props;
  const [isCategoryVisible, setIsCategoryVisible] = useState(false);
  const [isBackdropVisible, setIsBackdropVisible] = useState(false);

  const handlerClick = () => {
    setIsCategoryVisible(true);
    setIsBackdropVisible(true);
  };
  const handlerBackdrop = () => {
    setIsCategoryVisible(false);
    setIsBackdropVisible(false);
  };

  return (
    <Fragment>
      <nav className={styles.nav}>
        <Backdrop visible={isBackdropVisible} onClick={handlerBackdrop} />
        <li onClick={handlerClick}>
          <Category media={media} visible={isCategoryVisible} />
        </li>
        <li data-icon="true">
          <strong>فروشگاه</strong>
        </li>
        <li data-icon="true">
          <strong>وبلاگ</strong>
        </li>
        <li data-icon="true">
          <strong>درباره ما</strong>
        </li>
      </nav>
      <Link className="btn--primary">نصب طاقچه</Link>
    </Fragment>
  );
};

NavigationLarge.propTypes = {
  media: PropTypes.object.isRequired,
  order: PropTypes.string,
};

export default NavigationLarge;
