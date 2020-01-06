import React from 'react';

import Cart from '../Cart';

import * as S from './styled';

import { User } from 'styled-icons/boxicons-regular/User';
import { Basket } from 'styled-icons/boxicons-regular/Basket';

const HeaderItem = ({ children, icon, showCart, onClick }) => (
  <S.HeaderItemContainer onClick={onClick} className={showCart ? 'active' : ''}>
    {icon === 'usuario' && <User />}
    {icon === 'carrinho' && <Basket />}
    <S.HeaderItemText>{children}</S.HeaderItemText>
    {icon === 'carrinho' && showCart && <Cart />}
  </S.HeaderItemContainer>
);

export default HeaderItem;
