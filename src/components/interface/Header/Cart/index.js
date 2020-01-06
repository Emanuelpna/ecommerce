import React, { useContext, useEffect } from 'react';

import * as S from './styled';

import { CartContext } from '../../../../store/CartContext';
import Button from '../../../Button';

const Cart = () => {
  const { cartIds, cart, getCount, getTotalValue } = useContext(CartContext);

  useEffect(()=>{
    console.log(cartIds)
  }, [cartIds])

  const eliminatedDuplicates = cartRaw => {
    let currentID = 0;

    return cartRaw.filter(product => {
      const ReturnedProduct = currentID !== product.id;
      currentID = product.id;
      return ReturnedProduct;
    });
  };

  return (
    <S.Cart>
      <S.CartTitle>Meu Carrinho</S.CartTitle>
      <S.CartList>
        {eliminatedDuplicates(cart()).map(({ id, title, image }) => {
          return (
            <S.CartProduct key={id}>
              <img src={image} alt={title} />
              <S.CartProductContent>
                <p>{title}</p>
                <strong>Quantidade: {getCount(id)}</strong>
              </S.CartProductContent>
            </S.CartProduct>
          );
        })}
      </S.CartList>
      <S.CartProductTotalContainer>
        <span>Valor Total: </span>
      <span>R$ {getTotalValue()}</span>
        <Button full>Finalizar Compra</Button>
      </S.CartProductTotalContainer>
    </S.Cart>
  );
};

export default Cart;
