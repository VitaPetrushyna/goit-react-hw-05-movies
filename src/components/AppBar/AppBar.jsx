import { Link } from 'react-router-dom';
import { HeaderContainer, NavContainer } from '../AppBar/AppBar.styled';

export const AppBar = () => {
  return (
    <>
      <HeaderContainer>
        <NavContainer>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </NavContainer>
      </HeaderContainer>
    </>
  );
};
