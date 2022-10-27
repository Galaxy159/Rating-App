import thankYou from "../images/illustration-thank-you.svg";
import thankYouMobile from "../images/illustration-thank-you-mobile.svg";

export default function Message() {
  return (
    <>
      <div className="message hide" id="message">
        <picture className="message__img">
          <source media="(max-width: 400px)" srcSet={thankYouMobile} />
          <img src={thankYou} alt="Thank you"></img>
        </picture>

        <div className="message__selected" id="selected">
          You selected 4 out of 5
        </div>
        <h2 className="message__headline">Thank you!</h2>
        <p className="message__text">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </>
  );
}
