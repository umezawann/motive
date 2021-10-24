import React from 'react';
import Tooltip from '@mui/material/Tooltip';

export interface TaskProp {
  name: string
  status: 'done',
  point: number,
  date: Date,
}

export interface CellProp {
  tasks: Task[];
}

const gray = '#ebedf0';
const paleGreen = '#9be9a8';
const lightgreen = '#40c463';
const green = '#30a14e';
const darkGreen = '#216e39';
const colors = [gray, paleGreen, lightgreen, green, darkGreen];

const Cell = ({ tasks }: CellProp) => {
  const idx = Math.floor(Math.random() * colors.length);
  const color = colors[idx];
  const getColor = (tasks: any[], colors: string[]) => {

  }
  // console.log('color, tasks', color, tasks)
  const message = tasks ? tasks.map(t => (t.name)).join('\n') : 'none'
  return (
    <>
      <Tooltip title={message} arrow>
        <div
          style={{
            width: 10,
            height: 10,
            display: 'inline-block',
            background: color,
            borderRadius: 2,
          }}
        />
      </Tooltip>
    </>
  );
};
export default Cell;
