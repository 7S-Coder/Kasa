import PropTypes from "prop-types";
import "../styles/components/Banner.scss";

const Banner = (props) => {
  return (
    <div className="banner">
      <div className="banner-container">
        <img className="banner-img" src={props.img} alt="Bannière" />
        <h1 className="banner-title">{props.title}</h1>
      </div>
    </div>
  );
};

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default Banner;
