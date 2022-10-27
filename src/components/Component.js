import { useState, useEffect } from "react";
import star from "../images/icon-star.svg";
import starMobile from "../images/icon-star-mobile.svg";

export default function Component() {
  const [prevRating, setPrevRating] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    if (isSubmit) {
      document.getElementById(
        "selected"
      ).textContent = `You selected ${prevRating.id} out of 5`;
      document.getElementById("message").classList.toggle("hide");
      document.getElementById("component").classList.toggle("hide");
    }
  }, [isSubmit, prevRating.id]);

  function handleClickRating(event) {
    const target = event.target;
    if (
      target.classList.contains("component__rating--number") &&
      target.id !== prevRating.id
    ) {
      target.classList.add("selected");
      setPrevRating(target);
      prevRating && prevRating.classList.remove("selected");
    }
  }

  function handleClickSubmit() {
    setIsSubmit((isSubmit) => !isSubmit);
  }

  return (
    <>
      <div className="component" id="component">
        <picture className="component__star">
          <source media="(max-width: 768px)" srcSet={starMobile} />
          <img src={star} alt="star-icon"></img>
        </picture>

        <h1 className="component__headline">How did we do?</h1>
        <p className="component__text">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div onClick={handleClickRating} className="component__rating">
          <p className="component__rating--number" id="1">
            1
          </p>
          <p className="component__rating--number" id="2">
            2
          </p>
          <p className="component__rating--number" id="3">
            3
          </p>
          <p className="component__rating--number" id="4">
            4
          </p>
          <p className="component__rating--number" id="5">
            5
          </p>
        </div>
        <button onClick={handleClickSubmit} className="component__submit">
          SUBMIT
        </button>
      </div>
    </>
  );
}
