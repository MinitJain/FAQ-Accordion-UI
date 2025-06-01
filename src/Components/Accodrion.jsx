import { useState } from "react";
import data from "./data";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setenableMultiSelection] = useState(false);
  const [multiple, setMulitple] = useState([]);

  const handleSingleSelection = (getID) => {
    setSelected(getID === selected ? null : getID);
  };

  const handleMultipleSelection = (getID) => {
    let copyMultiple = [...multiple];
    const findIndexOfCurrentId = copyMultiple.indexOf(getID);

    console.log(findIndexOfCurrentId);
    if (findIndexOfCurrentId === -1) {
      copyMultiple.push(getID);
    } else {
      copyMultiple.splice(findIndexOfCurrentId, 1);
    }

    setMulitple(copyMultiple);
  };

  return (
    <div className="wrapper">
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={() =>
                  enableMultiSelection
                    ? handleMultipleSelection(dataItem.id)
                    : handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question} </h3>
                {selected === dataItem.id ? <span> - </span> : <span> + </span>}
              </div>
              {enableMultiSelection
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="col"> {dataItem.answer} </div>
                  )
                : selected === dataItem.id && (
                    <div className="col"> {dataItem.answer} </div>
                  )}
              {/* {selected === dataItem.id ? (
                <div className="col"> {dataItem.answer} </div>
              ) : null} */}
            </div>
          ))
        ) : (
          <div>No data found !!</div>
        )}
        <button onClick={() => setenableMultiSelection(!enableMultiSelection)}>
          {enableMultiSelection
            ? "Disable MultiSelection"
            : "Enable MultiSelection"}
        </button>
      </div>
    </div>
  );
};

export default Accordion;
