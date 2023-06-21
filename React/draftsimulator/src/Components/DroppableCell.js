import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import "./DroppableCell.css";

function DroppableCell() {
  const [droppedChampion, setDroppedChampion] = useState(null);

  const [{ isOver }, drop] = useDrop({
    accept: 'champion',
    drop: (item, monitor) => {
      const { champion } = item;
      setDroppedChampion(champion);
    },
    
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const cellStyle = {
    border: '1px solid black',
    width: '200px',
    height: '200px',
    margin: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: isOver ? 'lightblue' : 'white',
  };

  return (
    <div className="DroppableCell" ref={drop} style={cellStyle}>
      {droppedChampion && (
        <img src={droppedChampion.image} alt={droppedChampion.name} />
      )}
    </div>
  );
      }
export default DroppableCell;