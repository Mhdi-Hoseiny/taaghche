import React from 'react';
import { Link } from 'react-router-dom';
import styles from './hero-header.module.css';
import banner from '../../assets/img/taaghche-banner.webp';
import infinity from '../../assets/img/infinity.webp';
import freeBooks from '../../assets/img/free-books.webp';
import newBooks from '../../assets/img/new-books.webp';

const HeroHeader = () => {
  return (
    <div className={styles['hero-header']}>
      <div className={styles['hero-header--head']}>
        <div>
          <h2>لذت خواندن و شنیدن</h2>
          <p>خرید نسخه قانونی بیش از 11000 کتاب صوتی، الکترونیک و چاپی</p>
          <Link className="btn--primary">نصب اپلیکیشن طاقچه</Link>
        </div>
        <div>
          <img src={banner} alt="طاقچه، دانلود کتاب های صوتی و الکترونیک" />
        </div>
      </div>
      <div className={styles['hero-header--body']}>
        <div>
          <img src={newBooks} alt="خرید کتاب های جدید و پرفروش" />
          <span>خرید کتاب های جدید و پرفروش</span>
        </div>
        <div>
          <img src={freeBooks} alt="دانلود +20 هزار کتاب رایگان" />
          <span>امکان دانلود +20 هزار کتاب رایگان</span>
        </div>
        <div>
          <img src={infinity} alt="خرید اشتراک ماهانه برای +30 هزار کتاب" />
          <span>اشتراک ماهانه +30 هزار کتاب</span>
        </div>
      </div>
    </div>
  );
};

export default React.memo(HeroHeader);
