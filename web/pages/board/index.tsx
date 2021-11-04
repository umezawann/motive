import React, { useState } from 'react';
import type { NextPage } from 'next';
import BaseLayout from '@/components/templates/Layouts/BaseLayout';
import Board from '@/components/templates/Board/Board';

const Index: NextPage = () => {
  return (
    <BaseLayout>
      <Board />
    </BaseLayout>
  );
};

export default Index;
