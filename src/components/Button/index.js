import React from 'react';

import Link from '../Link';

import * as S from './styled';

const Button = ({ onClick, children, type, full, tall, link, to }) => {
  return link ? (
    <Link to={to}>
      <S.Button onClick={onClick} type={type} full={full} tall={tall}>
        {children}
      </S.Button>
    </Link>
  ) : (
    <S.Button onClick={onClick} type={type} full={full} tall={tall}>
      {children}
    </S.Button>
  );
};

export default Button;
