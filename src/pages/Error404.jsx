import { NavLink } from "react-router-dom";
import "../styles/pages/Error404.scss";

const Error404 = () => {
  return (
    <div className="error_page">
      <div className="error_block">
        <div className="error_container">
          <p className="error_number">404</p>
          <p className="error_message">
            Oups ! La page que vous demandez n&apos;existe pas.
          </p>
        </div>
        <NavLink to="/">
          <div className="error_link">
            <p>Retournez sur la page d&apos;accueil</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Error404;
