import Slideshow from "../components/Slideshow";
import logementsData from "../data/logements.json";
import { useParams } from "react-router-dom";
import Collapse from "../components/Collapse";
import "../styles/pages/SingleCard.scss";

const SingleCard = () => {
  const { id } = useParams();

  const selectedCard = logementsData.find((card) => card.id === id);

  return (
    <>
      <div className="single-card">
        <Slideshow data={selectedCard.pictures} />
        <div className="title-loc-tag-box">
          {/* Inclure le titre */}
          <p className="single-card-title">{selectedCard.title}</p>
          {/* Inclure la location */}
          <p className="single-card-location">{selectedCard.location}</p>
          {/* Inclure les tags */}
          <div className="single-card-tags">
            {selectedCard.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
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
          {/* Inclure le host */}
          <div className="host-container">
            <p>{selectedCard.host.name}</p>
            <div className="circle-pic">
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCard;
