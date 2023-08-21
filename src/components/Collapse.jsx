import { useState } from "react";
import PropTypes from "prop-types";
import "../styles/components/Collapse.scss";
import ChevronUp from "../img/chevron-up-solid.svg";
import ChevronDown from "../img/chevron-down-svgrepo-com.svg";

const Collapse = ({ data }) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="collapse-container collapse_about">
      <div className="button-container" onClick={toggle}>
        <div className="collapse-button">
          <p>{data.label}</p>
        </div>
        {open ? (
          <img
            src={ChevronUp}
            className="chevron chevron-up open"
            alt="chervron-up"
          />
        ) : (
          <img
            src={ChevronDown}
            className="chevron chevron-down"
            alt="chevron-down"
          />
        )}
      </div>
      {open && <div className="collapse-content">{data.content}</div>}
    </div>
  );
};

Collapse.propTypes = {
  data: PropTypes.shape({
    label: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.element),
    ]).isRequired,
  }).isRequired,
};

export default Collapse;
