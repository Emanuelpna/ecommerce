import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
`;

export const FormLine = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;

export const Input = styled.input`
  border: 1px solid #eee;
  border-radius: 6px;
  padding: 8px 16px;
  width: 100%;

  &:focus {
    box-shadow: 0 0 0 3px #5c58db8c, 0 0 0 1px #1b1962;
  }
`;
