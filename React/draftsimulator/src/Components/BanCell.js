import React, { useRef } from 'react';
import { useDrop } from 'react-dnd';
import { Tooltip } from 'react-tooltip';



function BanCell({ champion, setChampion, selectedChampions, setSelectedChampions }) {

  const [{ isOver }, drop] = useDrop({
    accept: 'champion',
    drop: (droppedItem, monitor) => {
        const { champion: droppedChampion } = droppedItem;
      
        // If there's already a champion in the cell, swap it with the dropped champion
        if (champion) {
          const originalChampion = champion;
          setChampion(droppedChampion);
          setSelectedChampions((prev) => {
            const newSet = new Set(prev);
            newSet.delete(originalChampion.name); // Remove the previous champion from the set
            newSet.add(droppedChampion.name); // Add the dropped champion to the set
            return newSet;
          });
          return { champion: originalChampion };
        }
      
        // Otherwise, just set the dropped champion
        setChampion(droppedChampion);
        setSelectedChampions((prev) => new Set(prev).add(droppedChampion.name));
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
    backgroundColor: isOver ? 'lightblue' : '#242424',
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
