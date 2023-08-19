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
    /* Si l'Id inscrite dans l'url depuis une card n'existe pas, l'utilisateur est retourné à la page d'erreur. */
  }

  if (!selectedCard) {
    return <Error404 />;
  }

  return (
    <>
      <div className="single-card">
        <Slideshow data={selectedCard.pictures} />
        <section className="bottom-container">
          {/* Inclure le container */}
          <div className="container">
            {/* Inclure le titre */}
            <p className="title">{selectedCard.title}</p>
            {/* Inclure la location */}
            <p className="location">{selectedCard.location}</p>
            {/* Inclure les tags */}
            <div className="tags">
              {selectedCard.tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Inclure l'host et les étoiles */}
          <div className="host-data-and-stars">
            {/* Inclure l'host */}

            <div className="host-data">
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
            {/* Inclure les étoiles */}
            <Rating rating={selectedCard.rating} />
          </div>
        </section>
        {/* Inclure les collapses */}
        <section className="carrousel-container">
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
        </section>
      </div>
    </>
  );
};

export default SingleCard;
