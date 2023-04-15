import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const SearchSmall = React.lazy(() => import('./SearchSmall'));
const SearchLarge = React.lazy(() => import('./SearchLarge'));

const Search = props => {
  const { media, order } = props;
  const { screen, sizes } = media;
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    document.addEventListener('scroll', () => {
      if (document.documentElement.scrollTop < 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, []);

  return (
    <Fragment>
      {screen === sizes.sm && <SearchSmall order={order} visible={isVisible} />}
      {screen === sizes.lg && <SearchLarge order={order} />}
    </Fragment>
  );
};

Search.propTypes = {
  media: PropTypes.object.isRequired,
  order: PropTypes.string,
};

export default Search;
