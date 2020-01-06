import React from 'react';

import * as S from './styled';

const Navbar = ({ children }) => (
  <S.Nav>
    <S.NavBar>{children}</S.NavBar>
  </S.Nav>
);

export default Navbar;
