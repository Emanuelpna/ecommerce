import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.main`
  max-width: 1440px;
  margin: auto;

  ${media.lessThan('huge')`
      max-width: 1170px;
    `}
    
  ${media.lessThan('large')`
      max-width: 768px;
    `}
`;
