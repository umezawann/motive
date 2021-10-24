import React, { useState } from 'react';
import type { NextPage } from 'next';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import History from '../../components/templates/History/History'
import {histories} from '../../lib/seed'
// import generate3D  from '../../lib/contributions/index'
// import Hoge from '../../lib/contributions/Hoge'
import dynamic from 'next/dynamic'

// import Foo from '../../lib/contributions/Foo'
const Hoge = dynamic(
  () => import('../../lib/contributions/Hoge'),
  { ssr: false }
)

const Today: NextPage = () => {
  const onSubmit = (event: any) => {
    event.preventDefault();
    const name = event.target.name.value;
    const body = event.target.body.value;
    console.log('name is', name);
    console.log('body is', body);
  };
  
  // generate3D().then((res) => console.log('res is', res))

  return (
    <div>
      <div>today</div>
      {/* <Hoge /> */}
      <Hoge />
      {/* <form onSubmit={onSubmit}>
        <TextField label="name" name="name" />
        <TextField label="body" name="body" />

        <Button type="submit" variant="contained" color="inherit">
          Login
        </Button>
      </form>
      <History histories={histories} /> */}
    </div>
  );
};

export default Today;
