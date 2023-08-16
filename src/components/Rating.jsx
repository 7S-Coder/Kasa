import "../styles/components/Rating.scss";
import starGrey from "../img/starEmpty.svg";
import starRed from "../img/starFull.svg";

const Rating = ({ rating }) => {
  const maxRating = 5;

  const getStarImage = (index) => {
    if (index < rating) {
      return starRed;
    }

    return starGrey;
  };

  return (
    <ul className="rating-ul">
      {Array.from({ length: maxRating }, (_, index) => (
        <li key={index}>
          <img src={getStarImage(index)} alt="star" />
        </li>
      ))}
    </ul>
  );
};

export default Rating;
