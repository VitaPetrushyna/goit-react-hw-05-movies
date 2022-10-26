// import { Link } from 'react-router-dom';
import { HeaderContainer, Nav, StyledLink } from '../AppBar/AppBar.styled';

export const AppBar = () => {
  return (
    <>
      <HeaderContainer>
        <Nav>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </Nav>
      </HeaderContainer>
    </>
  );
};

// const navItems = [
//   { href: 'home', text: 'Home' },
//   { href: 'movies', text: 'Movies' },
// ];

// export const AppBar = () => {
//   return (
//     <HeaderContainer>
//       <NavContainer>
//         {navItems.map(({ href, text }) => (
//           <StyledLink to={href} key={href}>
//             {text}
//           </StyledLink>
//         ))}
//       </NavContainer>
//     </HeaderContainer>
//   );
// };
