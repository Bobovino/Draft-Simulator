// BanCell.js
import React, { useState, useRef } from 'react';
import { useDrop } from 'react-dnd';

function BanCell() {
  const [champion, setChampion] = useState(null);

  const [{ isOver }, drop] = useDrop({
    accept: 'champion',
    drop: (droppedItem, monitor) => {
      const { champion: droppedChampion } = droppedItem;
      setChampion(droppedChampion);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const cellStyle = {
    border: '1px solid black',
    width: '50px',
    height: '50px',
    margin: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: isOver ? 'lightblue' : 'white',
  };

  const cellRef = useRef(null);
  drop(cellRef);

  return (
    <div className="BanCell" ref={cellRef} 
    title="Right click to cancel the selection"
    style={cellStyle}
    onContextMenu={(e) => {
      e.preventDefault(); // Prevent the context menu from showing
      setChampion(null); // Make the cell empty
    }}>
      {champion && (
        <>
          <img src={champion.image} alt={champion.name} />
        </>
      )}
    </div>
  );
}

export default BanCell;
