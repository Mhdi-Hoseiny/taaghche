import { createSlice } from '@reduxjs/toolkit';
import {
  deleteAllCookies,
  setCookieWithExpires,
  findCookie,
} from '../helper/storage';

// برگرداندن آبجکت پیش فرض برای اسلایس آث با توجه به اینکه کاربر از قبل وارد حساب شده یا نه
const getInitialState = () => {
  const token = findCookie('token');
  return {
    token: token ? token : null,
    expiresIn: token ? null : 0,
  };
};

// ایجاد اسلایسی برای ذخیره استیت ورود و خروج کاربر
const sliceAuth = createSlice({
  name: 'auth',
  initialState: getInitialState(),
  reducers: {
    login(state, action) {
      return {
        token: action.payload.token,
        expiresIn: action.payload.expiresIn,
      };
    },
    logout() {
      return getInitialState();
    },
  },
});

const { login, logout } = sliceAuth.actions;

// ذخیره داده های ورود کاربر در کوکی مرورگر قبل از ذخیره آن در استور
const middlewareAuth = () => next => action => {
  if (login.match(action)) {
    setCookieWithExpires(action.payload.token, action.payload.expiresIn);
  } else if (logout.match(action)) {
    deleteAllCookies();
  }
  return next(action);
};

export default sliceAuth;
export { middlewareAuth, login, logout };
