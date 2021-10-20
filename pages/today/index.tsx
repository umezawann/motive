import React, { useState } from 'react';
import type { NextPage } from 'next';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Today: NextPage = () => {
  const onSubmit = (event: any) => {
    event.preventDefault();
    const name = event.target.name.value;
    const body = event.target.body.value;
    console.log('name is', name);
    console.log('body is', body);
  };

  return (
    <div>
      <div>today</div>
      <form onSubmit={onSubmit}>
        <TextField label="name" name="name" />

        <TextField label="body" name="body" />

        <Button type="submit" variant="contained" color="inherit">
          Login
        </Button>
      </form>
    </div>
  );
};

export default Today;
