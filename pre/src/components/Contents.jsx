import React from 'react';
import { useParams } from 'react-router-dom';
import PageA from './../pages/PageA';
import PageB from './../pages/PageB';
import PageC from './../pages/PageC';

const Contents = () => {
  const { id } = useParams();
  return (
    <>
      {id === 'a' && <PageA />}
      {id === 'b' && <PageB />}
      {id === 'c' && <PageC />}
    </>
  );
};

export default Contents;
