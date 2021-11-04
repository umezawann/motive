import React from 'react';
import Draggable from 'react-draggable';

const Board = () => {
  const eventLogger = (e: MouseEvent, data: Object) => {
    console.log('Event: ', e);
    console.log('Data: ', data);
  };

  const handleStart = () => {
    console.log('handleStart');
  };
  const handleDrag = () => {
    console.log('handleDrag');
  };
  const handleStop = () => {
    console.log('handleStop');
  };

  return (
    <Draggable
      axis="both"
      handle=".handle"
      defaultPosition={{ x: 0, y: 0 }}
      // position={null}
      grid={[25, 25]}
      scale={1}
      onStart={handleStart}
      onDrag={handleDrag}
      onStop={handleStop}
    >
      <div className="handle" style={{border: '1px solid #ccc', width: 300, height: 300}}>
        <div >Drag from here</div>
        <div>This readme is really dragging on...</div>
      </div>
    </Draggable>
  );
};

export default Board;
