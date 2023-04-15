// ایجاد کوکی ای که بعد از زمان داده شده منقضی شود
function setCookieWithExpires(value, seconds) {
  const expiresDate = new Date(Date.now() + seconds * 1000).toUTCString();
  document.cookie = `token=${value}; expires=${expiresDate}; Secure`;
}

// پاک کردن تمام کوکی ها
function deleteAllCookies() {
  const Cookies = document.cookie.split(';');
  for (const iterator of Cookies) {
    document.cookie = iterator + '=; expires=' + new Date(0).toUTCString();
  }
}

// برگرداندن مقدار کوکی با استفاده از کلید آن
function findCookie(key) {
  let cookie = {};
  document.cookie.split(';').forEach(function (el) {
    let [key, value] = el.split('=');
    cookie[key.trim()] = value;
  });
  return cookie[key];
}

export { setCookieWithExpires, deleteAllCookies, findCookie };
