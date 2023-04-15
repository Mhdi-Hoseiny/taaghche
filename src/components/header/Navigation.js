import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const NavigationSmall = React.lazy(() => import('./NavigationSmall'));
const NavigationLarge = React.lazy(() => import('./NavigationLarge'));

const Navigation = props => {
  const { media, order, isAuth } = props;
  const { screen, sizes } = media;

  return (
    <Fragment>
      {screen === sizes.sm && (
        <NavigationSmall media={media} order={order} isAuth={isAuth} />
      )}
      {screen === sizes.lg && <NavigationLarge media={media} order={order} />}
    </Fragment>
  );
};

Navigation.propTypes = {
  media: PropTypes.object.isRequired,
  order: PropTypes.string,
  isAuth: PropTypes.bool.isRequired,
};

export default Navigation;
