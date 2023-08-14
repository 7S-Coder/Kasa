import logementsData from "../data/logements.json";
import { useParams } from "react-router-dom";
import "../styles/pages/SingleCard.scss";

const SingleCard = () => {
  const { id } = useParams();

  // Recherche la carte correspondante dans logementsData
  const selectedCard = logementsData.find((card) => card.id === id);

  return (
    <div className="single-card">
      <img
        className="single-card-carrousel"
        src={selectedCard.pictures}
        alt={selectedCard.title}
      />
      <h2 className="single-card-title">{selectedCard.title}</h2>

      <p className="single-card-description">
        Description: {selectedCard.description}
      </p>
      <p className="single-card-location">Location: {selectedCard.location}</p>
      {/* Affiche d'autres détails de la carte */}
    </div>
  );
};

export default SingleCard;
