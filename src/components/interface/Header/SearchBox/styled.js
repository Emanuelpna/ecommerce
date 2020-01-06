import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SearchBox = styled.section`
  background: #1c1b24;
  position: absolute;
  left: 0;
  right: 0;
  margin-top: 10px;
  border-radius: 8px;
  box-shadow: 0 1px 12px #282828;
  padding: 14px 18px;
  max-height: 550px;
  overflow: auto;
  z-index: 10;
`;

export const SearchTitle = styled.span`
  font-weight: 700;
  font-size: 1.2rem;
  width: 100%;
  display: block;
  padding-bottom: 8px;
  margin-bottom: 8px;
  border-bottom: 2px solid #fafafba3;
`;

export const SearchProduto = styled(Link)`
  width: 100%;
  padding: 20px 10px;
  display: flex;
  flex-flow: row nowrap;
  transition: all 150ms ease-in-out;
  border-radius: 8px;

  &:hover {
    background: #434155;
    transition: all 150ms ease-in-out;
  }
`;

export const SearchProdutoImage = styled.img`
  max-width: 20%;
  margin-right: 14px;
  border-radius: 8px;
  box-shadow: 0 1px 12px #0d0d0d;
`;

export const SearchProdutoContent = styled.span`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
`;

export const SearchProdutoTitle = styled.span`
  font-size: 1.1rem;
`;

export const SearchProdutoPrice = styled.strong`
  font-size: 1.9rem;
`;
