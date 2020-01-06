import styled from 'styled-components';

export const Card = styled.div`
  width: 22%;
  margin-bottom: 1rem;
  border: 1px solid #262626;
  border-radius: 8px;
  background: #32313a;
  overflow: hidden;
`;

export const Img = styled.img`
  width: 100%;
`;

export const Body = styled.div`
  width: 80%;
  margin: auto;
  padding: 20px 0;
  min-height: 300px;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
`;

export const Title = styled.span`
  font-size: 1.2rem;
  line-height: 1.2;
`;

export const Text = styled.p`
  font-size: 1rem;
  margin: 20px 0;
`;

export const Price = styled.strong`
  font-size: 2.1rem;
  line-height: 1.2;
  margin-right: 10px;
`;
