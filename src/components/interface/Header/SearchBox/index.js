import React, { useState, useEffect } from 'react';

import { getProductsBySearch } from '../../../../store/fakeProducts';

import * as S from './styled';

const SearchBox = ({ busca }) => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    setProdutos(getProductsBySearch(busca));
  }, [busca]);

  return produtos.length > 0 ? (
    <S.SearchBox onBlur={() => setProdutos([])} >
      <S.SearchTitle>Produtos</S.SearchTitle>
      {produtos.map(produto => (
        <S.SearchProduto to={`/produto/${produto.id}`} key={produto.id}>
          <S.SearchProdutoImage src={produto.image} alt={produto.title} />
          <S.SearchProdutoContent>
            <S.SearchProdutoTitle>{produto.title}</S.SearchProdutoTitle>
            <S.SearchProdutoPrice>R$ {produto.price}</S.SearchProdutoPrice>
          </S.SearchProdutoContent>
        </S.SearchProduto>
      ))}
    </S.SearchBox>
  ) : (
    ''
  );
};

export default SearchBox;
