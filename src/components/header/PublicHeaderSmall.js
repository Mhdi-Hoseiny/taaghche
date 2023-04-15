import React from 'react';
import styles from './public-header-small.module.css';
import order from './public-header.module.css';
import PropTypes from 'prop-types';
import ShopAction from './ShopAction';
import Navigation from './Navigation';
import Search from './Search';
import Logo from './Logo';

const PublicHeaderSmall = props => {
  const { media, isAuth } = props;
  console.log('small');

  return (
    <header className={styles.header}>
      <div>
        <Logo order={order['child-2']} />
        <ShopAction order={order['child-3']} />
        <Navigation order={order['child-1']} media={media} isAuth={isAuth} />
      </div>
      <div>
        <Search order={order['child-1']} media={media} />{' '}
      </div>
    </header>
  );
};

PublicHeaderSmall.propTypes = {
  media: PropTypes.object.isRequired,
  isAuth: PropTypes.bool.isRequired,
};

export default PublicHeaderSmall;
