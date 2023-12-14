import { useState } from "react";
import data from "./data.js";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { RiDoubleQuotesL } from "react-icons/ri";

const Review = () => {
  const [reviewIndex, setReviewIndex] = useState(0);
  const { id, name, image, job, text } = data[reviewIndex];

  const surpriseMe = () => {
    let randomNomber = Math.floor(Math.random(4) * reviewIndex);
    if (randomNomber == reviewIndex) {
      randomNomber += 1;
    }
    setReviewIndex(randomNomber);
    console.log("clicked", randomNomber);
  };

  const handlerNext = () => {
    return reviewIndex < 3
      ? setReviewIndex(reviewIndex + 1)
      : setReviewIndex(0);
  };
  const handlerPre = () => {
    return reviewIndex > 0
      ? setReviewIndex(reviewIndex - 1)
      : setReviewIndex(3);
  };

  return (
    <div className="review" key={id}>
      <div className="image">
        <img src={image} alt={name}></img>
        <span className="double-qoute">
          <RiDoubleQuotesL size={35} />
        </span>
      </div>
      <div className="info">
        <p className="name">{name}</p>
        <p className="job">{job}</p>
        <p className="text">{text}</p>
      </div>
      <div className="footer">
        <div className="btn nextPre">
          <button className="pre" onClick={handlerPre}>
            <FaChevronLeft size={25} />
          </button>
          <button className="next" onClick={handlerNext}>
            <FaChevronRight size={25} />
          </button>
        </div>
        <div className="btn">
          <button className="btn-surprise" onClick={surpriseMe}>
            Surprise Me
          </button>
        </div>
      </div>
    </div>
  );
};
export default Review;
