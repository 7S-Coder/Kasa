import "../styles/components/Card.scss";
import PropTypes from "prop-types";

const Card = ({ data }) => {
  return (
    <li className="card_block">
      <div className="card">
        <img src={data.cover} alt={data.title} />
        <p>{data.title}</p>
      </div>
    </li>
  );
};

Card.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
