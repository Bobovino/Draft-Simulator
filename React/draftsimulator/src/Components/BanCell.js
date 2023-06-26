// BanCell.js
import React, { useRef } from 'react';
import { useDrop } from 'react-dnd';
import { Tooltip } from 'react-tooltip';



function BanCell({ champion, setChampion, selectedChampions, setSelectedChampions }) {

  const [{ isOver }, drop] = useDrop({
    accept: 'champion',
    drop: (droppedItem, monitor) => {
      const { champion: droppedChampion } = droppedItem;
      setChampion(droppedChampion);
      setSelectedChampions(prev => new Set([...prev, droppedChampion.name]));
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
      if (champion) {
      setSelectedChampions(prev => {
        const newSelectedChampions = new Set([...prev]);
        newSelectedChampions.delete(champion.name);
        return newSelectedChampions;
      });
      setChampion(null); // Make the cell empty
      } 
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
