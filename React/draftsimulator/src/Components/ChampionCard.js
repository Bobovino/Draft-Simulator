import React from 'react';
import { useDrag } from 'react-dnd';
import "./Styles.css";

function ChampionCard({ champion,selectedChampions }) {

  const [{ isDragging }, drag,preview] = useDrag({
    type: 'champion',
    item: { champion },
    canDrag: !selectedChampions.has(champion.name),
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    previewOptions: {
      anchorX: 0.5,
      anchorY: 0.5,
      captureDraggingState: true,
    },
  });

  // Create a new Image object
const img = new Image();
img.src = champion.image;
img.width = 50; // Set the width to the width of the ban cells
img.height = 50; // Set the height to the height of the ban cells
img.onload = () => preview(img, { alt: champion.name });

  const cardStyle = {
    opacity: isDragging || selectedChampions.has(champion.name) ? 0.1 : 1,
    cursor: 'move',
    width: '70%',
    height: 'auto', 
  };
  
  const imgStyle = {
    width: '100%',
    height: 'auto',

  };

  return (
    <div ref={drag} style={cardStyle} className="ChampionCard" title="Drag and drop">
      {/* Render the champion card content */}
      <img src={champion.image} alt={champion.name}  style={imgStyle}/>
      <p>{champion.name}</p>
    </div>
  );
}

export default ChampionCard;