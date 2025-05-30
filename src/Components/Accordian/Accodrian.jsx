import { useState } from "react";
import data from "./data";

const Accordion = () => {
  const [selected, setSelected] = useState(null);

  const handleSingleSelection = (getID) => {
    setSelected(getID === selected ? null : getID);
  };

  return (
    <div className="wrapper">
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={() => handleSingleSelection(dataItem.id)}
                className="title"
              >
                <h3>{dataItem.question} </h3>
                {selected === dataItem.id ? <span> - </span> : <span> + </span>}
              </div>
              {selected === dataItem.id ? (
                <div className="col"> {dataItem.answer} </div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data found !!</div>
        )}
        <button> Enable MultiSelection</button>
      </div>
    </div>
  );
};

export default Accordion;
