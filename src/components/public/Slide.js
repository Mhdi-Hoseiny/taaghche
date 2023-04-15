import React, { Fragment, useState } from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton from 'react-loading-skeleton';
import PropTypes from 'prop-types';

const Slide = props => {
  const { placeholder, className } = props;
  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };

  return (
    <Fragment>
      {!loaded && <Skeleton {...placeholder} />}
      <img
        onLoad={handleLoad}
        className={loaded ? `${className}` : `d-none ${className}`}
        {...props}
      />
    </Fragment>
  );
};

Slide.propTypes = {
  placeholder: PropTypes.object,
  className: PropTypes.string,
};

export default Slide;
