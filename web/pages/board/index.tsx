import React, { useState } from 'react';
import type { NextPage } from 'next';

import TaskForm from '@/components/templates/TaskForm/TaskForm';

import BaseLayout from '@/components/templates/Layouts/BaseLayout';
import Grid from '@mui/material/Grid';
import Board from '@/components/templates/Board/Board'

const Index: NextPage = () => {

  return (
    <BaseLayout>
    <Board />
    </BaseLayout>
  );
};

export default Index;
