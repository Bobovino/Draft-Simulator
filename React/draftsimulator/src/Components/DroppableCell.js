import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { Tooltip } from 'react-tooltip';


function DroppableCell({ champion, setChampion, selectedChampions, setSelectedChampions }) {

  const [{ isDragging }, drag] = useDrag({
    type: 'champion',
    item: { champion },
    canDrag: champion !== null,
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
        setSelectedChampions(prev => new Set([...prev, droppedChampion.name]));
        return { champion: originalChampion };
      }
  
      // Otherwise, just set the dropped champion
      setChampion(droppedChampion);
      setSelectedChampions(prev => new Set([...prev, droppedChampion.name]));
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const cellStyle = {
    border: '1px solid black',
    width: '100px',
    height: '100px',
    margin: '10px',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: isOver ? 'lightblue' : 'white',
  };

  const cellRef = useRef(null);
  drag(drop(cellRef));

  return (
    <div 
    className="DroppableCell" 
    ref={cellRef} 
    style={cellStyle}
    title="Drag and drop to switch positions. Right click to cancel the selection"
    onContextMenu={(e) => {
      e.preventDefault();
      if (champion) {
      setSelectedChampions(prev => {
        const newSelectedChampions = new Set([...prev]);
        newSelectedChampions.delete(champion.name);
        return newSelectedChampions;
      }); // Prevent the context menu from showing
      setChampion(null); // Make the cell empty
    }}
    }
    >
      {champion && (
        <>
          <img src={champion.image} alt={champion.name} />
        </>
      )}
      
    </div>
  );
}

export default DroppableCell;
