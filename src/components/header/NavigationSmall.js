import React, { useState } from 'react';
import styles from './navigation-small.module.css';
import PropTypes from 'prop-types';
import Backdrop from '../public/Backdrop';
import Drawer from './Drawer';

const NavigationSmall = props => {
  const { media, order, isAuth } = props;
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [isCategoryVisible, setIsCategoryVisible] = useState(false);
  const [isBackdropVisible, setIsBackdropVisible] = useState(false);

  const classes = {
    navigation: `navigation ${order}`,
    hamburgerOpen: `${styles.toggle} ${styles['toggle--open']}`,
    backdrop: isDrawerVisible ? styles.backdrop : 'd-none',
  };

  const handlerDrawerVisibility = event => {
    switch (event.target.getAttribute('data-role')) {
    case 'open-drawer':
      setIsDrawerVisible(true);
      setIsBackdropVisible(true);
      break;
    case 'close-drawer':
      setIsDrawerVisible(false);
      setIsCategoryVisible(false);
      setIsBackdropVisible(false);
      break;
    case 'backdrop':
      setIsDrawerVisible(false);
      setIsCategoryVisible(false);
      setIsBackdropVisible(false);
      break;
    }
  };
  const handlerCategoryVisible = () => {
    setIsCategoryVisible(true);
  };

  return (
    <div className={classes.navigation}>
      <button
        type="button"
        className={classes.hamburgerOpen}
        onClick={handlerDrawerVisibility}
        data-role="open-drawer"
      ></button>
      <Backdrop visible={isBackdropVisible} onClick={handlerDrawerVisibility} />
      <Drawer
        media={media}
        isAuth={isAuth}
        visible={isDrawerVisible}
        visibleBackdrop={isBackdropVisible}
        visibleCategory={isCategoryVisible}
        handlerVisibility={handlerDrawerVisibility}
        handlerCategoryVisible={handlerCategoryVisible}
      />
    </div>
  );
};

NavigationSmall.propTypes = {
  media: PropTypes.object.isRequired,
  order: PropTypes.string,
  isAuth: PropTypes.bool.isRequired,
};

export default NavigationSmall;
