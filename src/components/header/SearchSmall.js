import React from 'react';
import classes from './search.module.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SearchSmall = props => {
  const { order, visible } = props;

  return (
    <div
      className={
        visible
          ? `${classes['search-sm']} ${classes['search-sm--show']} ${order}`
          : `${classes['search-sm']} ${classes['search-sm--hide']} ${order}`
      }
    >
      <Link role="search" className={classes['link']}>
        <span className={classes['placeholder']}>جستجو در طاقچه</span>
        <i className={classes['ico--search']}></i>
      </Link>
    </div>
  );
};

SearchSmall.propTypes = {
  order: PropTypes.string,
  visible: PropTypes.bool.isRequired,
};

export default SearchSmall;
