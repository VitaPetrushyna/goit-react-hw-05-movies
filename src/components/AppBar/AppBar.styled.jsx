import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// export const Link = styled.a`
//   text-decoration: none;
// `;

export const HeaderContainer = styled.header`
  height: 50px;
`;

export const NavContainer = styled.nav`
  display: flex;
  gap: 40px;
  border-bottom: 3px solid rgb(7, 4, 53);
  padding: 10px;
`;

/*
 * Стилизация активной ссылки
 */

export const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }

  :hover:not(.active),
  :focus-visible:host(.active) {
    color: #3b3be3;
  }
`;