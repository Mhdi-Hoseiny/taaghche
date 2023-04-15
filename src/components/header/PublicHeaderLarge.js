import React from 'react';
import order from './public-header.module.css';
import styles from './public-header-large.module.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/auth-slice';
import Navigation from './Navigation';
import Logo from './Logo';
import Search from './Search';
import ShopButton from './ShopAction';

const PublicHeaderLarge = props => {
  const { media, isAuth } = props;
  const dispatch = useDispatch();
  console.log('large');

  return (
    <header className={styles.header}>
      <div>
        <Logo order={order['child-1']} />
        <Search order={order['child-2']} media={media} />
        <div className={`${order['child-3']} ${styles.box}`}>
          <ShopButton />
          {isAuth ? (
            <button
              onClick={() => {
                dispatch(logout());
              }}
            >
              خروج
            </button>
          ) : (
            <Link to="/login">ورود</Link>
          )}
        </div>
      </div>
      <div>
        <Navigation media={media} isAuth={isAuth} />
      </div>
    </header>
  );
};

PublicHeaderLarge.propTypes = {
  media: PropTypes.object.isRequired,
  isAuth: PropTypes.bool.isRequired,
};

export default PublicHeaderLarge;
