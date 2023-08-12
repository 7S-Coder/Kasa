import Card from "../components/Card";
import logementsData from "../data/logements.json";
import "../styles/components/CardList.scss";

const CardList = () => {
  return (
    <div className="card-list">
      {logementsData.map(({ id, cover, title }) => (
        <Card key={id} data={{ id, cover, title }} />
      ))}
    </div>
  );
};

export default CardList;
