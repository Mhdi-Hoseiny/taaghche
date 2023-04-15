import React, { Fragment } from 'react';
import { createPortal } from 'react-dom';
import styles from './backdrop.module.css';

const Backdrop = props => {
  const { visible, onClick } = props;

  return createPortal(
    <Fragment>
      {visible && (
        <div
          className={styles.backdrop}
          onClick={onClick}
          data-role="backdrop"
        ></div>
      )}
    </Fragment>,
    document.getElementById('overlay')
  );
};

export default Backdrop;
