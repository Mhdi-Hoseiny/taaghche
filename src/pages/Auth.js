import React, { Fragment, useRef, useState } from 'react';
import styles from './auth.module.css';
import 'react-toastify/dist/ReactToastify.min.css';
import { Link, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { login } from '../store/auth-slice';
import { signIn, signUp } from '../helper/api';
import PropTypes from 'prop-types';
import PublicHeader from '../components/header/PublicHeader';

const Auth = props => {
  const { isAuth } = props;
  const inputUserRef = useRef();
  const inputPassRef = useRef();
  const path = useLocation().pathname;
  const [valid, setValid] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  let title;
  let subtitle;
  let google;
  let question;
  let link;

  if (path === '/login') {
    title = 'خوش برگشتی :)';
    subtitle = 'ورود به حساب کاربری';
    google = 'ورود با گوگل';
    question = 'حساب کاربری ندارید؟ ';
    link = 'ثبت نام';
  }
  if (path === '/register') {
    title = 'خوش آمدی :)';
    subtitle = 'ثبت نام و ساخت حساب کاربری';
    google = 'ثبت نام با گوگل';
    question = 'حساب کاربری دارید؟ ';
    link = 'ورود';
  }

  const inputValidation = value => {
    const regEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const reqPhone =
      /(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/;

    value.toLowerCase();

    if (value.match(regEmail) || value.match(reqPhone)) {
      setValid(true);
      return value;
    } else {
      setValid(false);
      toast.error('تلفن یا ایمیل وارد شده نادرست است.');
      return null;
    }
  };
  const handlerFetch = (user, password) => {
    if (path === '/login') {
      signIn(user, password)
        .then(response => {
          dispatch(
            login({
              token: response.data.idToken,
              expiresIn: response.data.expiresIn,
            })
          );
          console.log(response);
          return response;
        })
        .catch(error => {
          toast.error('خطا در ورود به حساب کاربری');
          toast.warn('لطفا از درستی رمز یا ایمیل خود اطمینان حاصل کنید.');
          setError(error);
        });
    }
    if (path === '/register') {
      signUp(user, password)
        .then(response => {
          dispatch(
            login({
              token: response.data.idToken,
              expiresIn: response.data.expiresIn,
            })
          );
          console.log(response);
          return response;
        })
        .catch(error => {
          console.log(error);
          toast.error('خطا در ساخت حساب کاربری');
          setError(error);
        });
    }
  };
  const handlerSubmit = event => {
    event.preventDefault();
    const user = inputValidation(inputUserRef.current.value);
    const pass = inputPassRef.current.value;

    if (user && pass) {
      handlerFetch(user, pass);
    }
  };

  return (
    <Fragment>
      <PublicHeader isAuth={isAuth} />
      {error || !valid ? (
        <ToastContainer
          position="bottom-right"
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={true}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      ) : null}
      {!isAuth && (
        <main className={styles.main}>
          <h1>{title}</h1>
          <span>{subtitle}</span>
          <form onSubmit={handlerSubmit}>
            <input
              type="text"
              ref={inputUserRef}
              placeholder="شماره تلفن یا ایمیل"
              required
            />
            <input
              type="password"
              ref={inputPassRef}
              placeholder="رمز حساب خود را وارد کنید."
              required
            />
            <button type="submit" className="btn--primary">
              ادامه
            </button>
          </form>
          <span>یا</span>
          <Link>{google}</Link>
          <div>
            <span className={styles.black}>{question}</span>
            {path === '/login' ? (
              <Link to="/register" className={styles.gray}>
                {link}
              </Link>
            ) : path === '/register' ? (
              <Link to="/login" className={styles.gray}>
                {link}
              </Link>
            ) : null}
          </div>
          <div>
            {path === '/register' && (
              <span className={styles.black}>با ثبت نام </span>
            )}
            <Link className={styles.gray}>قوانین استفاده از طاقچه</Link>
            {path === '/register' && (
              <span className={styles.black}> را میپذیری.</span>
            )}
          </div>
        </main>
      )}
    </Fragment>
  );
};

Auth.propTypes = {
  isAuth: PropTypes.bool.isRequired,
};

export default Auth;
