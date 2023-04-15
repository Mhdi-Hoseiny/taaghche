import React, { useRef } from 'react';
import styles from './slider.module.css';
import PropTypes from 'prop-types';
import Slide from './Slide';

const Slider = props => {
  const { slides, books, isAudio } = props;
  const sliderRef = useRef();

  let isDown = false;
  let startX;
  let scrollLeft;

  const handlerMouseDown = e => {
    isDown = true;
    startX = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft = sliderRef.current.scrollLeft;
  };
  const handlerMouseLeave = () => {
    isDown = false;
  };
  const handlerMouseUp = () => {
    isDown = false;
  };
  const handlerMouseMove = e => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; //scroll-fast
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      ref={sliderRef}
      className={styles.slider}
      onMouseDown={handlerMouseDown}
      onMouseLeave={handlerMouseLeave}
      onMouseUp={handlerMouseUp}
      onMouseMove={handlerMouseMove}
    >
      {slides?.map(slide => {
        return (
          <Slide
            src={slide}
            className={styles.slide}
            key={Math.random()}
            placeholder={{
              width: 380,
              borderRadius: 20,
              style: { maxWidth: '80vw', aspectRatio: '16 / 9', margin: '0' },
            }}
          />
        );
      })}
      {books?.map(book => {
        return (
          <div className={styles['slide-container']} key={Math.random()}>
            {isAudio && (
              <Slide
                src={book.img}
                placeholder={{
                  width: 150,
                  height: 150,
                  borderRadius: 4,
                }}
              />
            )}
            {!isAudio && (
              <Slide
                src={book.img}
                placeholder={{
                  width: 150,
                  height: 222,
                  borderRadius: 4,
                }}
              />
            )}
            <div>
              <span>{book.title}</span>
              <span>{book.author}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

Slider.propTypes = {
  slides: PropTypes.array,
  books: PropTypes.array,
  isAudio: PropTypes.bool,
};

export default Slider;
