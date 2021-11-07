import React from 'react';
import { Container } from './Container';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const Board = () => {
  return (
    <div>
      <DndProvider backend={HTML5Backend}>
        <div style={{display: 'flex'}}>
        <Container />
        <Container />
        </div>
      </DndProvider>
    </div>
  );
};

export default Board;
