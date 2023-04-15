import React from 'react';
import styles from './public-header.module.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ShopAction = props => {
  const { order } = props;

  return (
    <div className={order}>
      <Link to="/shop">
        <i className={styles['ico--shop']}></i>
      </Link>
    </div>
  );
};

ShopAction.propTypes = {
  order: PropTypes.string,
};

export default React.memo(ShopAction);
