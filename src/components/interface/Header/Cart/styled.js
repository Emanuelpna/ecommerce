import styled from 'styled-components';

export const Cart = styled.div`
  background: #1c1b24;
  position: absolute;
  width: 300%;
  right: 0;
  top: 65px;
  border-radius: 8px;
  box-shadow: 0 1px 12px #282828;
  padding: 14px 18px;
  max-height: 750px;
  z-index: 10;
`;

export const CartTitle = styled.span`
  font-weight: 700;
  font-size: 1rem;
  width: 100%;
  display: block;
  padding-bottom: 8px;
  margin-bottom: 8px;
  border-bottom: 2px solid #fafafba3;
`;

export const CartList = styled.div`
  list-style: none;
  overflow: auto;
  max-height: 500px;
`;

export const CartProduct = styled.span`
  display: flex;
  margin: 16px;
  padding: 8px;
  border-radius: 8px;
  transition: all 150ms ease-in-out;

  &:hover {
    background: #434155;
    transition: all 150ms ease-in-out;
  }

  & img {
    min-width: 25%;
    max-width: 25%;
    margin-right: 16px;
    box-shadow: 0 1px 12px #0d0d0d;
    border-radius: 8px;
  }
`;

export const CartProductContent = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  
  & strong {
    font-size: 1.3rem;
  }
  
  & p:nth-child(1) {
    font-size: 1.15rem;
    margin-bottom: 8px;
  }
`;

export const CartProductTotalContainer = styled.div`
  border-top: 2px solid #fafafba3;
  padding: 10px 0;
  text-align: center;
  font-size: 1.1rem;

  & span {
    display: block;
  }
  & span:nth-child(2) {
    margin-left: 10px;
    font-weight: 700;
    font-size: 1.8rem;
    margin-bottom: 12px;
  }
`;
