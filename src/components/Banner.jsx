import PropTypes from "prop-types";

const Banner = (props) => {
  return (
    <div className="banner">
      <img src={props.img} alt="Bannière" />
      <h1>{props.title}</h1>
    </div>
  );
};

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default Banner;
