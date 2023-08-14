import React, { useState } from "react";
import PropTypes from "prop-types";

const Collapse = ({ data }) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="collapse_container">
      <div className="button_container" onClick={toggle}>
        <div className="collapse_button">
          <p>{data.label}</p>
        </div>
        {open ? (
          <i className="fa-solid fa-chevron-up"></i>
        ) : (
          <i className="fa-solid fa-chevron-down"></i>
        )}
      </div>
      {open && <div className="collapse_content">{data.content}</div>}
    </div>
  );
};

Collapse.propTypes = {
  data: PropTypes.shape({
    label: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default Collapse;
