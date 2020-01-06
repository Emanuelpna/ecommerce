import styled, { css } from 'styled-components';

export const Button = styled.button`
  border: none;
  border-radius: 8px;
  color: #fff;
  font-weight: 600;
  font-size: 1rem;

  background: #5c58db;

  ${props =>
    props.full
      ? css`
          width: 100%;
        `
      : css`
          margin: 0 6px;
        `}

  ${props =>
    props.tall
      ? css`
          padding: 30px 20px;
        `
      : css`
          padding: 10px 16px;
        `}

  &:focus {
    box-shadow: 0 0 0 3px #5c58db8c, 0 0 0 1px #1b1962;
  }

  &:hover {
    cursor: pointer;
    background: #8c89ec;
  }
`;
