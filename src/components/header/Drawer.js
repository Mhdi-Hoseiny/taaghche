import React, { Fragment } from 'react';
import styles from './drawer.module.css';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/auth-slice';
import Category from './Category';

const Drawer = props => {
  const {
    media,
    isAuth,
    visible,
    visibleCategory,
    visibleBackdrop,
    handlerVisibility,
    handlerCategoryVisible,
  } = props;
  const dispatch = useDispatch();

  const drawer = (
    <Fragment>
      <nav
        className={
          visible
            ? `${styles.drawer} ${styles['drawer--open']}`
            : `${styles.drawer} ${styles['drawer--close']}`
        }
      >
        <li>
          <button
            className={`${styles.toggle} ${styles['toggle--close']}`}
            onClick={handlerVisibility}
            data-role="close-drawer"
          ></button>
          <Link className={styles.logo} to="/"></Link>
          <Link className={`btn--primary ${styles.btn}`}>نصب طاقچه</Link>
        </li>
        <li>
          {isAuth ? (
            <button
              data-icon="true"
              onClick={() => {
                dispatch(logout());
              }}
            >
              <strong>خروج از حساب</strong>
            </button>
          ) : (
            <Link data-icon="true" to="/login">
              <strong>ورود به طاقچه</strong>
            </Link>
          )}
        </li>
        <li onClick={handlerCategoryVisible} data-icon="true">
          {visibleBackdrop && (
            <Category media={media} visible={visibleCategory} />
          )}
        </li>
        <li data-icon="true">
          <strong>فروشگاه</strong>
        </li>
        <li data-icon="true">
          <strong>کتاب های من</strong>
        </li>
        <li data-icon="true">
          <strong>رویش</strong>
        </li>
        <li data-icon="true">
          <strong>کارنامه مطالعه</strong>
        </li>
        <li data-icon="true">
          <strong>ارتباط با پشتیبانی</strong>
        </li>
        <li data-icon="true">
          <strong>وبلاگ</strong>
        </li>
        <li data-icon="true">
          <strong>درباره ما</strong>
        </li>
      </nav>
    </Fragment>
  );

  return createPortal(drawer, document.getElementById('overlay'));
};

Drawer.propTypes = {
  visible: PropTypes.bool.isRequired,
  isAuth: PropTypes.bool.isRequired,
  media: PropTypes.object.isRequired,
  visibleCategory: PropTypes.bool.isRequired,
  visibleBackdrop: PropTypes.bool.isRequired,
  handlerVisibility: PropTypes.func.isRequired,
  handlerCategoryVisible: PropTypes.func.isRequired,
};

export default Drawer;
