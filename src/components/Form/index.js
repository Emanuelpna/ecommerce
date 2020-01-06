import React from 'react';

import * as S from './styled'

export const Form = ({ children }) => <S.Form>{children}</S.Form>;

export const FormLine = ({ children }) => <S.FormLine>{children}</S.FormLine>;

export const Input = ({ type, placeholder, onChange }) => (
  <S.Input type={type} placeholder={placeholder} onChange={onChange} />
);
