import React, { useState, useRef ,useEffect} from "react";
import axios from "axios";


function DragDrop() {
  const dragItem = useRef();
  const dragOverItem = useRef();
  const [data, setData] = useState();

  
  const dragStart = (e, position) => {
    dragItem.current = position;
  };

  const dragEnter = (e, position) => {
    dragOverItem.current = position;
  };

  const drop = (e) => {
    const copyListItems = [...data];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setData(copyListItems);
  };

    useEffect(() => {
      // axios.get("data/data.json").then((response) => setItems(response));

      axios
        .get("data/data.json")
        .then((res) => setData(res.data.raw_broadmatch_data));
     
    }, []);


  return (
    <>
      {data &&
        data.map((item, index) => (
          <div
            className="drag"
            onDragStart={(e) => dragStart(e, index)}
            onDragEnter={(e) => dragEnter(e, index)}
            onDragEnd={drop}
            key={index}
            draggable
            onDragOver={(e) => e.preventDefault()}
          >
            <h6>{item[0]} </h6>
           
          </div>
        ))}
    </>
  );
}

export default DragDrop;
