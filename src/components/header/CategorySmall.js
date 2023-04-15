import React, { Fragment, useState } from 'react';
import styles from './category-small.module.css';
import PropTypes from 'prop-types';

const CategorySmall = props => {
  const { visible, lists } = props;

  return (
    <Fragment>
      <i className="ico--chevron-left"></i>
      {visible && (
        <nav
          className={
            visible
              ? `${styles.category} ${styles['category--open']}`
              : `${styles.category} ${styles['category--close']}`
          }
        >
          <li data-role="title-menu">
            <strong>دسته بندی ها</strong>
          </li>
          {lists.map(item => {
            if (item.type === 'item') {
              return (
                <li key={item.id}>
                  <strong>{item.title}</strong>
                </li>
              );
            } else if (item.type === 'item-list') {
              return (
                <ListSecondary key={item.id} list={item} styles={styles} />
              );
            }
          })}
        </nav>
      )}
    </Fragment>
  );
};

const ListSecondary = props => {
  const { list, styles } = props;
  const [isSubmenuVisible, setIsSubmenuVisible] = useState(false);

  const handlerSubmenu = event => {
    if (event.target.className === styles.toggle) {
      setIsSubmenuVisible(false);
    } else {
      setIsSubmenuVisible(true);
    }
  };

  return (
    <li onClick={handlerSubmenu} data-menu="true">
      <strong>{list.title}</strong>
      <i className="ico--chevron-left"></i>
      <ul
        className={
          isSubmenuVisible
            ? `${styles.category} ${styles['category--open']}`
            : `${styles.category} ${styles['category--close']}`
        }
      >
        <li data-role="title-menu">
          <button className={styles.toggle} onClick={handlerSubmenu}></button>
          <strong>دسته بندی ها</strong>
        </li>
        <li>
          <strong>همه کتاب های {list.title}</strong>
          <i className="ico--submenu"></i>
        </li>
        {list.list.map(title => {
          return (
            <li key={list.list.findIndex(i => i === title)}>
              <strong>{title}</strong>
            </li>
          );
        })}
      </ul>
    </li>
  );
};

ListSecondary.propTypes = {
  list: PropTypes.object.isRequired,
  styles: PropTypes.object.isRequired,
};

CategorySmall.propTypes = {
  lists: PropTypes.array.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default CategorySmall;
