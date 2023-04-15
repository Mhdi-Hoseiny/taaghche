import React from 'react';
import styles from './search.module.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SearchLarge = props => {
  const { order } = props;

  return (
    <div className={`${styles['search-lg']} ${order}`}>
      <Link role="search" className={styles['link']}>
        <span className={styles['placeholder']}>جستجو در طاقچه</span>
        <i className={styles['ico--search']}></i>
      </Link>
    </div>
  );
};

SearchLarge.propTypes = {
  order: PropTypes.string,
};

export default SearchLarge;
