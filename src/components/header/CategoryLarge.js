import React, { Fragment, useState } from 'react';
import styles from './category-large.module.css';
import PropTypes from 'prop-types';

const CategoryLarge = props => {
  const { lists, visible } = props;
  const [listSecondary, setListSecondary] = useState({});

  const handlerClick = item => {
    setListSecondary(item);
  };

  return (
    <Fragment>
      <i className="ico--chevron-down"></i>
      {visible && (
        <div className={styles['category-container']}>
          <div>
            <nav>
              {lists.map(item => {
                if (item.type === 'item') {
                  return (
                    <li key={item.id}>
                      <strong>{item.title}</strong>
                    </li>
                  );
                } else if (item.type === 'item-list') {
                  return (
                    <li
                      key={item.id}
                      onClick={handlerClick.bind(this, item)}
                      data-menu="true"
                    >
                      <strong>{item.title}</strong>
                      <i className="ico--chevron-left"></i>
                    </li>
                  );
                }
              })}
            </nav>
          </div>
          <div>
            <nav>
              {listSecondary.title && (
                <li>
                  <strong data-role="title">
                    همه کتاب های {listSecondary.title}
                  </strong>
                  <i className="ico--chevron-left"></i>
                </li>
              )}
              {listSecondary.list &&
                listSecondary.list.map(item => {
                  return <li key={Math.random()}>{item}</li>;
                })}
            </nav>
          </div>
        </div>
      )}
    </Fragment>
  );
};

CategoryLarge.propTypes = {
  lists: PropTypes.array.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default CategoryLarge;
