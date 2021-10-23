import React from 'react';
import Tooltip from '@mui/material/Tooltip';

interface Prop {
  points: number;
}

const gray = '#ebedf0';
const paleGreen = '#9be9a8';
const lightgreen = '#40c463';
const green = '#30a14e';
const darkGreen = '#216e39';
const colors = [gray, paleGreen, lightgreen, green, darkGreen];

const Cell = ({ points }: Prop) => {
  const idx = Math.floor(Math.random() * colors.length);
  const color = colors[idx];

  return (
    <>
      <Tooltip title="Add" arrow>
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
