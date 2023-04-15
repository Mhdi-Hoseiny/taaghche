import React, { Fragment, Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import useMedia from '../../hook/useMedia';
import { LoadingSpinner } from '../public/Loading';

const PublicHeaderLarge = lazy(() => import('./PublicHeaderLarge'));
const PublicHeaderSmall = lazy(() => import('./PublicHeaderSmall'));

const PublicHeader = props => {
  const { isAuth } = props;
  const { screen, sizes } = useMedia();

  return (
    <Fragment>
      {screen === sizes.sm ? (
        <Suspense fallback={<LoadingSpinner />}>
          <PublicHeaderSmall media={{ screen, sizes }} isAuth={isAuth} />
        </Suspense>
      ) : (
        <Suspense fallback={<LoadingSpinner />}>
          <PublicHeaderLarge media={{ screen, sizes }} isAuth={isAuth} />
        </Suspense>
      )}
    </Fragment>
  );
};

PublicHeader.propTypes = {
  isAuth: PropTypes.bool.isRequired,
};

export default PublicHeader;
