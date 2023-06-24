import React, { useState, useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';


function DroppableCell() {
  const [champion, setChampion] = useState(null);

  const [{ isDragging }, drag] = useDrag({
    type: 'champion',
    item: { champion },
    end: (item, monitor) => {
      if (monitor.didDrop()) {
        // If the item drop was handled by a drop target, update the champion in this cell
        const dropResult = monitor.getDropResult();
        setChampion(dropResult.champion);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [{ isOver }, drop] = useDrop({
    accept: 'champion',
    drop: (droppedItem, monitor) => {
      const { champion: droppedChampion } = droppedItem;
  
      // If there's already a champion in the cell, swap it with the dropped champion
      if (champion) {
        const originalChampion = champion;
        setChampion(droppedChampion);
        return { champion: originalChampion };
      }
  
      // Otherwise, just set the dropped champion
      setChampion(droppedChampion);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const cellStyle = {
    border: '1px solid black',
    width: '170px',
    height: '170px',
    margin: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: isOver ? 'lightblue' : 'white',
  };

  const cellRef = useRef(null);
  drag(drop(cellRef));

  return (
    <div 
    className="DroppableCell" 
    ref={cellRef} 
    style={cellStyle}
    onContextMenu={(e) => {
      e.preventDefault(); // Prevent the context menu from showing
      setChampion(null); // Make the cell empty
    }}
    >
      {champion && (
        <>
          <img src={champion.image} alt={champion.name} />
          <p>{champion.name}</p>
        </>
      )}
    </div>
  );
}

export default DroppableCell;
