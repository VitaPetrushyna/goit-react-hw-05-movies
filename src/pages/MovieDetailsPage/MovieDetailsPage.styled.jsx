import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledList = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }

  :hover:not(.active),
  :focus-visible:host(.active) {
    color: #3b3be3;
  }
`;
