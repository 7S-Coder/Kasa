import Collapse from "./Collapse";
import DataCollapse from "../data/collapse.json";

const CollapseList = () => {
  return (
    <div className="collapse-list">
      {DataCollapse.map((collapse, index) => (
        <Collapse key={index} data={collapse} />
      ))}
    </div>
  );
};

export default CollapseList;
