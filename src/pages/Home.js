import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import PublicHeader from '../components/header/PublicHeader';
import PublicFooter from '../components/footer/PublicFooter';
import HeroHeader from '../components/heroHeader/HeroHerder';
import Bookshelves from '../components/bookshelf/Bookshelves';

const Home = props => {
  const { isAuth } = props;

  return (
    <Fragment>
      <PublicHeader isAuth={isAuth} />
      <HeroHeader />
      <main>
        <Bookshelves />
      </main>
      <PublicFooter />
    </Fragment>
  );
};

Home.propTypes = {
  isAuth: PropTypes.bool.isRequired,
};

export default Home;
