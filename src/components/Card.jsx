import "../styles/components/Card.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <li className="card_block">
      <Link to={`/card/${data.id}`}>
        <button className="card">
          <img src={data.cover} alt={data.title} />
          <p>{data.title}</p>
        </button>
      </Link>
    </li>
  );
};

Card.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    description: PropTypes.string,
    equipments: PropTypes.array,
    host: PropTypes.object,
    location: PropTypes.string,
    pictures: PropTypes.array,
    rating: PropTypes.string,
    tags: PropTypes.array,
  }).isRequired,
};

export default Card;
