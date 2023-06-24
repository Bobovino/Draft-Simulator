import React from 'react';
import { useDrag } from 'react-dnd';

function ChampionCard({ champion }) {

  const [{ isDragging }, drag,preview] = useDrag({
    type: 'champion',
    item: { champion },
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
    opacity: isDragging ? 0.5 : 1,
    display: isDragging ? 'none' : 'block',
    cursor: 'move',
  };

  return (
    <div ref={drag} style={cardStyle} title="Drag and drop">
      {/* Render the champion card content */}
      <img src={champion.image} alt={champion.name} />
      <p>{champion.name}</p>
    </div>
  );
}

export default ChampionCard;