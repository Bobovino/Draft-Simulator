import React from 'react';
import { useDrag } from 'react-dnd';

function ChampionCard({ champion }) {
  
  const [{ isDragging }, drag] = useDrag({
    type: 'champion',
    item: { champion},
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const cardStyle = {
    opacity: isDragging ? 0.5 : 1,
    cursor: 'move',
  };

  return (
    <div ref={drag} style={cardStyle}>
      {/* Render the champion card content */}
      <img src={champion.image} alt={champion.name} />
      <p>{champion.name}</p>
    </div>
  );
}

export default ChampionCard;