import React, { Fragment } from 'react';
import styles from './category.module.css';
import PropTypes from 'prop-types';
import CategorySmall from './CategorySmall';
import CategoryLarge from './CategoryLarge';

const Category = props => {
  const { media, visible } = props;
  const { screen, sizes } = media;

  const category = [
    { id: 1, type: 'item', title: 'کتاب های رایگان' },
    {
      id: 2,
      type: 'item-list',
      title: 'ادبیات',
      list: [
        'ادبیات عامیانه و محلی',
        'پژوهش ادبی',
        'تراژدی',
        'جنایی',
        'داستان تاریخی',
        'شعر',
        'طنز',
        'عاشقانه',
        'علمی تخیلی',
        'فانتزی',
        'نامه ها',
        'وحشت',
      ],
    },
    {
      id: 3,
      type: 'item-list',
      title: 'تاریخ',
      list: ['تاریخ ایران', 'تاریخ جهان'],
    },
    {
      id: 4,
      type: 'item-list',
      title: 'داستان و رمان',
      list: ['داستان ایران', 'داستان خارجی', 'داستان کوتاه', 'رمان'],
    },
    {
      id: 5,
      type: 'item-list',
      title: 'زبان خارجی',
      list: ['ادبیات لاتین', 'انگلیسی', 'فرانسه', 'سایر زبانها'],
    },
    {
      id: 6,
      type: 'item-list',
      title: 'زندگینامه و خاطرات',
      list: ['خاطرات', 'زتدگینامه', 'سفرنامه'],
    },
    {
      id: 7,
      type: 'item-list',
      title: 'سبک زندگی',
      list: ['آشپزی', 'تناسب اندام و تغذیه', 'سلامت', 'مد و پوشاک', 'ورزش'],
    },
    {
      id: 8,
      type: 'item-list',
      title: 'علوم انسانی',
      list: [
        'اقتصاد',
        'جامعه شناسی',
        'جغرافیا',
        'حقوق',
        'علوم سیاسی',
        'مردم شناسی',
      ],
    },
    {
      id: 9,
      type: 'item-list',
      title: 'علوم پایه و مهندسی',
      list: [
        'باستان شناسی',
        'برق و الکترونیک',
        'جانورشناسی',
        'ریاضیات',
        'زمین شناسی',
        'زیست شناسی',
        'شیمی',
        'صنایع',
        'عمران',
        'فیزیک',
        'کامپیوتر',
        'کشاورزی و باغبانی',
        'متالوژی و مواد',
        'معدن',
        'مکانیک',
        'نجوم',
        'هوافضا',
      ],
    },
    {
      id: 10,
      type: 'item-list',
      title: 'علوم پزشکی',
      list: [
        'پرستاری',
        'پزشکی اظفال',
        'پزشکی عمومی',
        'جراحی',
        'چشم پزشکی',
        'داروسازی',
        'دندان پزشکی',
        'زنان و مامایی',
      ],
    },
    {
      id: 11,
      type: 'item-list',
      title: 'فلسفه و منطق',
      list: [
        'فلسفه قدیم، قرون وسطا و شرق',
        'فلسفه مدرن',
        'نظریات و مکاتب فلسفی',
        'هستی شناسی',
      ],
    },
    {
      id: 12,
      type: 'item',
      title: 'کمیک',
    },
    {
      id: 13,
      type: 'item-list',
      title: 'کودک و نوجوان',
      list: ['داستان ', 'دانستنی', 'شعر'],
    },
    {
      id: 14,
      type: 'item',
      title: 'مدیریت کسب و کار',
    },
    {
      id: 15,
      type: 'item-list',
      title: 'منابع و مراجع',
      list: [
        'اطلاعات عمومی',
        'دایره المعارف',
        'سالنما و راهنما',
        'کتاب شناسی و نمابه',
      ],
    },
    {
      id: 16,
      type: 'item-list',
      title: 'هنر',
      list: [
        'سینما و تئاتر',
        'صنایع دستی',
        'طراحی صنعتی',
        'عکاسی',
        'موسیقی',
        'هنرهای تجسمی',
      ],
    },
  ];

  return (
    <Fragment>
      <strong className={styles['ico--category']}>دسته بندی ها</strong>
      {screen === sizes.sm && (
        <CategorySmall visible={visible} lists={category} />
      )}
      {screen === sizes.lg && (
        <CategoryLarge visible={visible} lists={category} />
      )}
    </Fragment>
  );
};

Category.propTypes = {
  media: PropTypes.object.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default Category;
