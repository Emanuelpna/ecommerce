import React from 'react';



import Button from '../Button';

import * as S from './styled';

const Layout = ({ src, title, price, isAvistaBoleto, id }) => {
 

  return (
    <S.Card>
      <S.Img src={src} />
      <S.Body>
        <S.Title>{title}</S.Title>
        <S.Text>
          <S.Price>R$ {price}</S.Price>
          {isAvistaBoleto && 'À vista no Boleto'}
        </S.Text>
        <Button full link to={`/produto/${id}`} >
          Comprar
        </Button>
      </S.Body>
    </S.Card>
  );
};

export default Layout;
