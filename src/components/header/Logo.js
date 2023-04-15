import React from 'react';
import styles from './public-header.module.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Logo = props => {
  const { order } = props;

  return (
    <div className={order}>
      <Link to="/">
        <i className={styles['ico--logo']}></i>
      </Link>
    </div>
  );
};

Logo.propTypes = {
  order: PropTypes.string,
};

export default React.memo(Logo);
