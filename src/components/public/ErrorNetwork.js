import React from 'react';
import styles from './error-network.module.css';

const ErrorNetwork = () => {
  return (
    <div className={styles.error}>
      <p>خطا در ارتباط با سرور</p>
      <span>
        با توجه به اینکه این سایت از سرویس های فایربیس استفاده میکند، از اتصال
        به فیلترشکن اطمینان حاصل کنید و مجدد صفحه را بارگذاری کنید.
      </span>
    </div>
  );
};

export default ErrorNetwork;
