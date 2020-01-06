import React from 'react';
import { useParams } from 'react-router-dom';

const Categoria = () => {
  const { id } = useParams();
  return <h1>Categoria {id}</h1>;
};

export default Categoria;
