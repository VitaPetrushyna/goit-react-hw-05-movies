// import { Link } from 'react-router-dom';
import {
  HeaderContainer,
  NavContainer,
  StyledLink,
} from '../AppBar/AppBar.styled';

const navItems = [
  { href: 'home', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

export const AppBar = () => {
  return (
    <>
      <HeaderContainer>
        <NavContainer>
          {navItems.map(({ href, text }) => (
            <StyledLink to={href} key={href}>
              {text}
            </StyledLink>
          ))}
        </NavContainer>
      </HeaderContainer>
    </>
  );
};

// export const AppBar = () => {
//   return (
//     <Header>
//       <Nav>
//         <Link to="/">Home</Link>
//         <Link to="/movies">Movies</Link>
//       </Nav>
//     </Header>
//   );
// };
