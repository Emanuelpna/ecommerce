import styled from 'styled-components';

export const ProdutoContainer = styled.section`
  margin: 60px auto;
  max-width: 1440px;
  padding: 20px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  & h2 {
    margin-bottom: 14px;
  }
`;

export const ProdutoHeader = styled.header`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 30px;
  border-bottom: 1px solid #1e1e22;
`;

export const ProdutoHeaderContent = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 48%;

  & h1 {
    font-size: 2rem;
    font-weight: 500;
    margin-top: 40px;
  }
  & strong {
    font-size: 4rem;
    margin: 30px 0;
  }
  & span {
    font-size: 1.4rem;
  }
  & button {
    margin-top: 40px;
  }
`;

export const ProdutoHeaderImage = styled.img`
  width: 48%;
  border-radius: 8px;
  box-shadow: 0 1px 6px #282828;
`;
