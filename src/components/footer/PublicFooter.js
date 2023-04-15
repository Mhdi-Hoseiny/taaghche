import React from 'react';
import styles from './public-footer.module.css';
import logo from '../../assets/img/logo2.webp';
import iconAparat from '../../assets/img/aparat-f.svg';
import iconInstagram from '../../assets/img/instagram-f.svg';
import iconLinkedin from '../../assets/img/linkedin-f.svg';
import iconMap from '../../assets/img/map-f.svg';
import iconTelegram from '../../assets/img/telegram-f.svg';
import iconTwitter from '../../assets/img/twitter-f.svg';
import iconYoutube from '../../assets/img/youtube-f.svg';
import { Link } from 'react-router-dom';

const PublicFooter = () => {
  return (
    <footer className={styles['public-footer']}>
      <div className={styles.about}>
        <img src={logo} alt="طاقچه" />
        <p>
          فروشگاه اینترنتی کتاب طاقچه جایی برای خرید آنلاین کتاب با فرمت‌های
          متنوع است؛ از خرید و سفارش کتاب چاپی تا دانلود کتاب صوتی و خرید کتاب
          الکترونیکی. در کتاب فروشی آنلاین طاقچه هزاران کتاب الکترونیکی و کتاب
          گویا در دسترس است که در میان آن‌ها کتاب رایگان هم وجود دارد. شما
          می‌توانید کتاب‌ها را در موبایل، تبلت، رایانه یا سایت بخوانید و بشنوید.
        </p>
      </div>
      <div>
        <strong>طاقچه</strong>
        <ul>
          <li>
            <Link>تماس با ما</Link>
          </li>
          <li>
            <Link>درباره طاقچه</Link>
          </li>
          <li>
            <Link>وبلاگ طاقچه</Link>
          </li>
          <li>
            <Link>سوالات متداول</Link>
          </li>
          <li>
            <Link>فرصت های شغلی</Link>
          </li>
        </ul>
      </div>
      <div>
        <strong>کتاب‌های پیشنهادی</strong>
        <ul>
          <li>
            <Link>رمان سالتو</Link>
          </li>
          <li>
            <Link>شازده کوچولو</Link>
          </li>

          <li>
            <Link>غرور و تعصب</Link>
          </li>
          <li>
            <Link>مغازه خودکشی</Link>
          </li>
          <li>
            <Link>کتاب اثر مرکب</Link>
          </li>
          <li>
            <Link>کتاب بیشعوری</Link>
          </li>
          <li>
            <Link>وقتی نیچه گریست</Link>
          </li>
          <li>
            <Link>کتاب نیمه تاریک وجود</Link>
          </li>
        </ul>
      </div>
      <div>
        <strong>دسته بندی پیشنهادی</strong>
        <ul>
          <li>
            <Link>رمان عاشقانه</Link>
          </li>
          <li>
            <Link>کتابهای علمی</Link>
          </li>
          <li>
            <Link>کتابهای صوتی</Link>
          </li>
          <li>
            <Link>کتابهای پزشکی</Link>
          </li>
          <li>
            <Link>کتابهای صوتی رایگان</Link>
          </li>
          <li>
            <Link>کتابهای انگیزشی</Link>
          </li>
          <li>
            <Link>کتاب داستان کودکانه</Link>
          </li>
          <li>
            <Link>کتاب درسی و کمک درسی</Link>
          </li>
        </ul>
      </div>
      <div>
        <strong>وبلاگ طاقچه</strong>
        <ul>
          <li>
            <Link>رمان جدید</Link>
          </li>
          <li>
            <Link>فلورانس اسکاول شین</Link>
          </li>
          <li>
            <Link>زندگینامه و آثار سعدی</Link>
          </li>
          <li>
            <Link>کتابهای اطلاعات عمومی</Link>
          </li>
          <li>
            <Link>زندگینامه فردوسی و شاهنامه</Link>
          </li>
          <li>
            <Link>زندگینامه و اشعار حافظ شیرازی</Link>
          </li>
          <li>
            <Link>زندگینامه و اشعار سهراب سپهری</Link>
          </li>
          <li>
            <Link>معرفی کتابهای مشابه ملت عشق</Link>
          </li>
        </ul>
      </div>
      <div className={styles['social-media']}>
        <div>
          <Link>
            <img src={iconMap} alt="google map" title="google map" />
          </Link>
          <Link>
            <img src={iconInstagram} alt="Instagram" title="Instagram" />
          </Link>
          <Link>
            <img src={iconAparat} alt="Aparat" title="Aparat" />
          </Link>
          <Link>
            <img src={iconTwitter} alt="Twitter" title="Twitter" />
          </Link>
          <Link>
            <img src={iconLinkedin} alt="Linkedin" title="Linkedin" />
          </Link>
          <Link>
            <img src={iconYoutube} alt="Youtube" title="Youtube" />
          </Link>
          <Link>
            <img src={iconTelegram} alt="Telegram" title="Telegram" />
          </Link>
        </div>
        <div>
          <span>
            © کلیه حقوق این سایت محفوظ و متعلق به فروشگاه اینترنتی کتاب طاقچه
            است.
          </span>
        </div>
      </div>
      <div>
        <Link>ورود ناشران</Link>
        <Link>شرایط استفاده</Link>
        <Link>سوالات متداول</Link>
        <Link>ارتباط با پشتیبانی</Link>
      </div>
    </footer>
  );
};

export default React.memo(PublicFooter);
