import Slideshow from "../components/Slideshow";
import logementsData from "../data/logements.json";
import { useParams } from "react-router-dom";
import Collapse from "../components/Collapse";
import Rating from "../components/Rating";
import Error404 from "../pages/Error404";
import "../styles/components/Collapse.scss";
import "../styles/pages/SingleCard.scss";
const SingleCard = () => {
  const { id } = useParams();

  const selectedCard = logementsData.find((card) => card.id === id);

  {
    /* Si l'Id ecrite dans l'url depuis une card n'existe pas, l'utilisateur est retourné à la page d'erreur. */
  }

  if (!selectedCard) {
    return <Error404 />;
  }

  return (
    <>
      <div className="single-card">
        <Slideshow data={selectedCard.pictures} />
        <div className="title-loc-tag-box">
          {/* Inclure le titre */}
          <div className="title-and-host-container">
            <p className="single-card-title">{selectedCard.title}</p>
            {/* Inclure le host */}
            <div className="host-container">
              <p>{selectedCard.host.name}</p>
              {selectedCard.host.picture ? (
                <img
                  src={selectedCard.host.picture}
                  alt={selectedCard.host.name}
                />
              ) : (
                <div className="circle-pic"></div>
              )}
            </div>
          </div>
          {/* Inclure la location */}
          <p className="single-card-location">{selectedCard.location}</p>
          {/* Inclure les tags */}
          <div className="tag-star-container">
            <div className="single-card-tags">
              {selectedCard.tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
              {/* Inclure les étoiles */}
            </div>
            <div>
              <Rating rating={selectedCard.rating} />
            </div>
          </div>

          <div className="carrousel-container">
            <Collapse
              data={{
                label: "Description",
                content: selectedCard.description,
              }}
            />
            <Collapse
              data={{
                label: "Equipements",
                content: selectedCard.equipments.map((tag, index) => (
                  <li key={index} className="tag">
                    {tag}
                  </li>
                )),
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCard;
