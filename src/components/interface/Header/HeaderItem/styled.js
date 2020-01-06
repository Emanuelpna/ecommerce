import styled from 'styled-components';

export const HeaderItemContainer = styled.span`
  width: 19%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 0;
  border-radius: 8px;
  cursor: pointer;
  transition: all 150ms ease-in-out;
  position: relative;

  &:hover,
  &.active {
    box-shadow: 0 1px 12px #282828;
    background: #5c58db;
    transition: all 150ms ease-in-out;
  }

  & svg {
    width: 35px;
    margin-right: 20px;
  }
`;

export const HeaderItemText = styled.span`
  font-size: 1.4rem;
  font-weight: 600;
`;
