import axios from 'axios';

// ارسال درخواست به سرور برای ساخت حساب کاربری و بازگرداندن پاسخ سرور
const signUp = async (email, password) => {
  const response = await axios.post(
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBLeK5-fi0eIpTHgmlLsNs5XqbwsUfYKnQ',
    {
      email,
      password,
      returnSecureToken: true,
    }
  );

  return response;
};

// ارسال درخواست به سرور برای وارد شدن به حساب کاربری و بازگرداندن پاسخ سرور
const signIn = async (email, password) => {
  const response = await axios.post(
    'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBLeK5-fi0eIpTHgmlLsNs5XqbwsUfYKnQ',
    {
      email,
      password,
      returnSecureToken: true,
    }
  );
  return response;
};

export { signUp, signIn };
