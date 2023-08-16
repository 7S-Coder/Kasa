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
    <div className="collapse-container">
      <div className="button-container" onClick={toggle}>
        <div className="collapse-button">
          <p>{data.label}</p>
        </div>
        {open ? (
          <img src={ChevronUp} className="chevron-up" alt="chervron-up" />
        ) : (
          <img src={ChevronDown} className="chevron-down" alt="chevron-down" />
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
      PropTypes.string, // Permet une chaîne de caractères
      PropTypes.arrayOf(PropTypes.element), // Permet un tableau d'éléments React
    ]).isRequired,
  }).isRequired,
};

export default Collapse;
