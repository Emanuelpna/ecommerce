import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationLink = styled(NavLink)`
  padding: 10px;
  text-decoration: none;
  color: #fafafb;
  transition: all 150ms ease-in-out;

  &.active {
    font-weight: 700;
    border-bottom: 3px solid #fafafb;
  }

  &:hover,
  &:focus {
    border-radius: 6px;
    background: #d4d3ff70;
  }
`;
