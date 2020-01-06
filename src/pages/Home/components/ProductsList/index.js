import React, { useEffect, useState } from 'react';

import Product from '../../../../components/Product';

import { Produtos } from '../../../../store/fakeProducts';

import * as S from './styled';

const ProductsList = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    setProdutos(Produtos);
  }, []);

  return (
    <S.ProductList>
      <S.Title>Veja os últimos produtos</S.Title>
      {produtos.map(({image, title, price, isAvistaBoleto, id}) => (
        <Product key={id} src={image} title={title} price={price} isAvistaBoleto={isAvistaBoleto} id={id} />
      ))}
    </S.ProductList>
  );
};

export default ProductsList;
