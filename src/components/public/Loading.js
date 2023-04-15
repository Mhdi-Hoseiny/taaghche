import React from 'react';
import styles from './loading.module.css';

const Loading = () => {
  return (
    <div className={styles.loading}>
      <p>در حال دریافت اطلاعات</p>
      <div className={styles['dot-collision']}></div>
    </div>
  );
};

const LoadingSpinner = () => {
  return (
    <div className={styles['loading-spinner']}>
      <div className={styles['dot-collision']}></div>
    </div>
  );
};

export default Loading;
export { LoadingSpinner };
