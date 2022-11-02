import "./AboutUs.css";


function AboutUs() {
 
  return (
    <section className="AboutUs">
      <h1 className="h1">
        کاریار، مدرسه آنلاین برنامه‌نویسی متصل به بازار کار
      </h1>
      <p className="para">
        کاریار مرجع متفاوتی برای معرفی کدنویسان تازه‌نفس به استارت‌آپ‌های کوچک و
        شرکت‌های پیشرو در اکوسیستم استارت‌آپی ایران و پلتفرمی برای پرورش
        تولیدکنندگان تکنولوژی در سطح جهان است.
        <span>
          <a href="https://kaaryar.ir/about-us/" target="_blank">
            بیشتر بخوانید
          </a>
        </span>
      </p>

      <p>
        <a
          href="https://kaaryar.ir/register-new/"
          target="_blank"
          className="register"
        >
          ثبت‌نام مهارت‌آموزان
        </a>
      </p>
      <p>
        <a href="https://kaaryar.ir/" target="_blank">
         صفحه اصلی سایت کاریار
        </a>
      </p>
    </section>
  );
}
export default AboutUs;
