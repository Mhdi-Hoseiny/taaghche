import React, { useRef } from 'react';
import styles from './bookshelves.module.css';
import Slider from '../public/Slider';
import Loading from '../public/Loading';
import ErrorNetwork from '../public/ErrorNetwork';
import useInfinite from '../../hook/useInfinite';

const Bookshelves = () => {
  const loaderRef = useRef();
  const {
    data: bookshelves,
    error,
    loading,
  } = useInfinite(
    2,
    loaderRef,
    'https://taaghche-50355-default-rtdb.asia-southeast1.firebasedatabase.app/'
  );

  return (
    <div>
      {loading && <Loading />}
      {error && <ErrorNetwork />}
      <div>
        {bookshelves?.map((bookshelf, i) => {
          if (!bookshelf) {
            return;
          }
          switch (bookshelf.type) {
          case 'SLIDER':
            return <Slider slides={bookshelf.imgs} key={i} />;
          case 'BOOKS':
            return (
              <div className={styles.bookshelf} key={i}>
                <div>
                  <div>
                    <h2>{bookshelf.title}</h2>
                    <strong>{bookshelf.text}</strong>
                  </div>
                  <div>
                    <span>مشاهده همه</span>
                  </div>
                </div>
                <div>
                  <Slider
                    books={bookshelf.books}
                    isAudio={bookshelf.isAudio}
                  />
                </div>
              </div>
            );
          case 'OFFER':
            return (
              <div className={styles.bookshelf} key={i}>
                <div>
                  <h2>{bookshelf.title}</h2>
                </div>
                <div>
                  <Slider slides={bookshelf.imgs} />
                </div>
              </div>
            );
          }
        })}
      </div>
      <div ref={loaderRef} style={{ height: '16px' }}></div>
    </div>
  );
};

export default React.memo(Bookshelves);
