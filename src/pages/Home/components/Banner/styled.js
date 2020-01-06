import styled, { css } from 'styled-components';
import { RightArrow } from 'styled-icons/boxicons-solid/RightArrow';
import { LeftArrow } from 'styled-icons/boxicons-solid/LeftArrow';

export const BannerContainer = styled.div`
  width: 100%;
  max-height: 500px;
  box-shadow: 0 1px 6px #151515;
  position: relative;
  user-select: none;
  border-radius: 8px;
  margin-bottom: -10px;
`;

export const BannerButton = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 9999px;
  background: #fafafb;
  box-shadow: 0 1px 6px #3b3b4026;
  top: calc(50% - 40px);
  bottom: calc(50% - 40px);
  ${props =>
    props.right
      ? css`
          right: -30px;
        `
      : css`
          left: -30px;
        `}
  display: flex;
  align-items: center;
  justify-content: center;
  color: #32313a;
  font-size: 1rem;
  font-weight: 700;
`;

export const Proximo = styled(RightArrow)`
  width: 30px;
  margin-left: 5px;
  opacity: 0.8;
`;

export const Anterior = styled(LeftArrow)`
  width: 30px;
  margin-left: -5px;
  opacity: 0.8;
`;

export const Img = styled.img`
  width: 100%;
  border-radius: 8px;
`;
