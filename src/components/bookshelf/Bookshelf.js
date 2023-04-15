import React from 'react';
import styles from './bookshelf.module.css';
import Slider from '../public/Slider';
import PropTypes from 'prop-types';

const Bookshelf = props => {
  const { data } = props;

  switch (data.type) {
  case 'SLIDER':
    return <Slider slides={data.imgs} />;

  case 'BOOKS':
    return (
      <div className={styles.bookshelf}>
        <div>
          <div>
            <h2>{data.title}</h2>
            <strong>{data.text}</strong>
          </div>
          <div>
            <span>مشاهده همه</span>
          </div>
        </div>
        <div>
          <Slider books={data.books} />
        </div>
      </div>
    );

  case 'OFFER':
    return (
      <div className={styles.bookshelf}>
        <div>
          <h2>{data.title}</h2>
        </div>
        <div>
          <Slider slides={data.imgs} />
        </div>
      </div>
    );

  default:
    break;
  }
};

Bookshelf.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Bookshelf;
