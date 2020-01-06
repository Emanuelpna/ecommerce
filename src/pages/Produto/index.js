import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import Button from '../../components/Button';

import { getProductById } from '../../store/fakeProducts';
import { CartContext } from '../../store/CartContext';

import * as S from './styled';

const Produto = () => {
  const { id } = useParams();

  const [product, setproduct] = useState({});

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    setproduct(getProductById(id));
  }, [id]);

  return (
    <S.ProdutoContainer>
      <S.ProdutoHeader>
        <S.ProdutoHeaderImage src={product.image} alt={product.title} />
        <S.ProdutoHeaderContent>
          <h1>{product.title}</h1>
          <strong>R$ {product.price}</strong>
          {product.isAvistaBoleto && <span>À vista no Boleto</span>}
          <Button tall full onClick={() => addToCart(parseInt(id))}>
            Comprar
          </Button>
        </S.ProdutoHeaderContent>
      </S.ProdutoHeader>
      <h2>Descrição</h2>
      <p>
        Deserunt incididunt duis occaecat consectetur irure voluptate. Ad eu
        consectetur occaecat esse aute ea. Commodo nisi reprehenderit excepteur
        consectetur culpa ipsum et. Sit qui magna eiusmod aliquip magna sit eu.
        Excepteur sint cupidatat aliquip tempor sunt fugiat in ipsum ea officia
        anim. Aliqua consequat quis nulla ullamco reprehenderit eiusmod id magna
        magna esse non ea. Eiusmod reprehenderit qui aliqua officia et cupidatat
        nisi labore.
      </p>
      <p>
        Amet dolor commodo fugiat eu ad et occaecat mollit aute nostrud labore
        excepteur non occaecat. Sunt dolore laborum est irure. Deserunt eu
        nostrud in irure pariatur veniam exercitation sunt sit cillum. Amet
        Lorem proident occaecat ut esse adipisicing fugiat labore aliqua laboris
        commodo esse sit labore. Proident voluptate sunt occaecat quis mollit ex
        aliqua labore occaecat non.
      </p>
      <p>
        Nulla magna fugiat aute fugiat consectetur. Esse sit exercitation aliqua
        ullamco elit eiusmod reprehenderit. Et minim ex eu consectetur pariatur
        voluptate id irure officia pariatur pariatur enim amet. Consectetur ad
        elit proident duis deserunt pariatur officia consequat aliquip mollit ea
        sunt qui ea. Fugiat mollit ea et ea culpa ipsum tempor do do duis
        adipisicing. Consectetur id officia esse commodo dolore.
      </p>
      <p>
        Lorem ut veniam officia et proident enim aute cillum ullamco ea eu nulla
        velit elit. Lorem ea laboris commodo ea consectetur in sit cupidatat.
        Aute sit est anim anim commodo anim ex ullamco dolore. Nulla aute
        consectetur ad occaecat consequat ipsum et nisi exercitation eiusmod
        tempor Lorem excepteur. Elit aliqua ea duis sint commodo fugiat aliquip
        nulla. Fugiat cillum elit id sint nostrud officia aliqua adipisicing
        proident.
      </p>
    </S.ProdutoContainer>
  );
};

export default Produto;
