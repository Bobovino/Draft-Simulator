import React from 'react';
import { useDragLayer } from 'react-dnd';

function getItemStyles(currentOffset) {
  if (!currentOffset) {
    return {
      display: 'none',
    };
  }

  const { x, y } = currentOffset;
  const transform = `translate(${x}px, ${y}px)`;

  return {
    transform,
    WebkitTransform: transform,
    position: 'fixed',
    pointerEvents: 'none',
    zIndex: 100,
    left: 0,
    top: 0,
    width: '50px',
    height: '50px',
  };
}

function CustomDragLayer() {
  const { isDragging, item, currentOffset } = useDragLayer((monitor) => ({
    item: monitor.getItem(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging(),
  }));

  if (!isDragging || !item) {
    return null;
  }

  return (
    <div style={getItemStyles(currentOffset)}>
      <img src={item.champion.image} alt={item.champion.name} style={{ width: '100%', height: '100%' }} />
    </div>
  );
}

export default CustomDragLayer;
