import React from 'react';

import * as S from './styled';

const Navlink = ({ children, to, exact }) => (
  <S.NavigationLink exact={exact} to={to}>
    {children}
  </S.NavigationLink>
);

export default Navlink;
